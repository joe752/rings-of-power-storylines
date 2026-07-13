(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const state = {
    episode: 0,
    spoilerLimit: 1,
    view: 'episodes',
    browseQuery: '',
    browseFilter: 'all'
  };

  const TYPE_MAPS = {
    character: CHARACTERS,
    place: PLACES,
    object: OBJECTS,
    race: RACES
  };

  const FILTERS = [
    ['all', 'All'],
    ['character', 'Characters'],
    ['place', 'Places'],
    ['object', 'Objects'],
    ['race', 'Races']
  ];

  const BROWSE_TYPES = [
    ['character', CHARACTERS, 'Character'],
    ['place', PLACES, 'Place'],
    ['object', OBJECTS, 'Object'],
    ['race', RACES, 'Race']
  ];

  const episodeCount = () => EPISODE_TIMELINE.length;
  const episodeAt = index => EPISODE_TIMELINE[index] || null;
  const episodeTag = index => {
    const episode = episodeAt(index);
    return episode ? `S${episode.seasonNumber}E${episode.number}` : '';
  };

  const clear = element => {
    while (element.firstChild) element.removeChild(element.firstChild);
  };

  const button = (text, className, onClick) => {
    const element = document.createElement('button');
    element.type = 'button';
    element.className = className;
    element.textContent = text;
    if (onClick) element.onclick = onClick;
    return element;
  };

  function firstReveal(entity) {
    const values = (entity.summary || [])
      .map(item => item.revealAt)
      .filter(Number.isFinite);
    return values.length ? Math.min(...values) : 1;
  }

  function entityVisible(type, id) {
    const entity = TYPE_MAPS[type]?.[id];
    return Boolean(entity) && firstReveal(entity) <= state.spoilerLimit;
  }

  function visibleIdentity(entity) {
    return entity?.identities
      ?.filter(identity => identity.revealAt <= state.spoilerLimit)
      .sort((a, b) => a.revealAt - b.revealAt)
      .at(-1) || null;
  }

  function entityLabel(type, id) {
    const entity = TYPE_MAPS[type]?.[id];
    if (!entity) return id;

    if (type === 'character') {
      const identity = visibleIdentity(entity);
      if (identity) return identity.displayName || identity.name;
      if (entity.nameRevealAt && entity.nameRevealAt > state.spoilerLimit) {
        return entity.identities?.[0]?.name || id;
      }
    }

    return entity.name || id;
  }

  function entityRole(type, id) {
    const entity = TYPE_MAPS[type]?.[id];
    if (!entity) return '';
    if (type === 'character') {
      const identity = visibleIdentity(entity);
      if (identity?.role) return identity.role;
    }
    return entity.role || '';
  }

  function visibleEntityNames(type, id) {
    const entity = TYPE_MAPS[type]?.[id];
    if (!entity) return [];

    const names = [];
    if (!entity.nameRevealAt || entity.nameRevealAt <= state.spoilerLimit) {
      names.push(entity.name);
    }
    (entity.aliases || []).forEach(alias => names.push(alias));

    if (type === 'character') {
      (entity.identities || [])
        .filter(identity => identity.revealAt <= state.spoilerLimit)
        .forEach(identity => {
          names.push(identity.name);
          (identity.aliases || []).forEach(alias => names.push(alias));
        });
    }

    return [...new Set(names.filter(Boolean))];
  }

  function loadState() {
    const params = new URLSearchParams(location.search);
    const saved = Number(localStorage.getItem('rop-spoiler-limit'));
    const requestedLimit = Number(params.get('spoilers'));
    const max = episodeCount();

    state.spoilerLimit = requestedLimit >= 1 && requestedLimit <= max
      ? requestedLimit
      : (saved >= 1 && saved <= max ? saved : 1);

    state.view = params.get('view') === 'browse' ? 'browse' : 'episodes';

    const requestedEpisode = Number(params.get('episode'));
    state.episode = requestedEpisode >= 1 && requestedEpisode <= state.spoilerLimit
      ? requestedEpisode - 1
      : Math.min(state.spoilerLimit - 1, max - 1);
  }

  function updateUrl(push = false) {
    const params = new URLSearchParams();
    params.set('episode', state.episode + 1);
    params.set('spoilers', state.spoilerLimit);
    if (state.view === 'browse') params.set('view', 'browse');

    history[push ? 'pushState' : 'replaceState'](
      null,
      '',
      `${location.pathname}?${params}`
    );
  }

  function buildDictionary() {
    const dictionary = [];

    for (const [type, map] of Object.entries(TYPE_MAPS)) {
      for (const [id] of Object.entries(map)) {
        if (!entityVisible(type, id)) continue;
        visibleEntityNames(type, id).forEach(name => {
          dictionary.push({ name, id, type });
        });
      }
    }

    return dictionary.sort((a, b) => b.name.length - a.name.length);
  }

  function boundaryOK(text, start, length) {
    const before = start ? text[start - 1] : '';
    const after = text[start + length] || '';
    const isWord = character => /^[\p{L}\p{N}_]$/u.test(character);
    return !isWord(before) && !isWord(after);
  }

  function appendLinkified(parent, text) {
    if (!text) return;

    const dictionary = buildDictionary();
    if (!dictionary.length) {
      parent.append(text);
      return;
    }

    const escapedNames = dictionary.map(item =>
      item.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    );
    const pattern = new RegExp(`(${escapedNames.join('|')})`, 'giu');
    const byName = new Map(
      dictionary.map(item => [item.name.toLowerCase(), item])
    );

    let last = 0;
    for (const match of text.matchAll(pattern)) {
      if (!boundaryOK(text, match.index, match[0].length)) continue;

      parent.append(text.slice(last, match.index));
      const hit = byName.get(match[0].toLowerCase());
      const link = document.createElement('span');
      link.className = 'inline-link';
      link.textContent = match[0];
      link.onclick = () => openEntity(hit.type, hit.id);
      parent.appendChild(link);
      last = match.index + match[0].length;
    }

    parent.append(text.slice(last));
  }

  function loreButton(id) {
    const lore = LORE[id];
    if (!lore || lore.revealAt > state.spoilerLimit) return null;

    const element = button('i', 'lore-button', () => openLore(id));
    element.setAttribute('aria-label', 'Show lore note');
    return element;
  }

  function entityButton(type, id, className = 'link-button') {
    return button(entityLabel(type, id), className, () => openEntity(type, id));
  }

  function renderEpisodes() {
    const host = $('#episode-grid');
    clear(host);

    let previousSeason = null;

    EPISODE_TIMELINE.forEach((episode, index) => {
      if (previousSeason !== null && episode.seasonNumber !== previousSeason) {
        const divider = document.createElement('div');
        divider.className = 'season-divider';
        divider.textContent = `SEASON ${episode.seasonNumber}`;
        host.appendChild(divider);
      }
      previousSeason = episode.seasonNumber;

      const locked = index >= state.spoilerLimit;
      const episodeButton = button(
        episodeTag(index),
        `episode-card compact${index === state.episode ? ' selected' : ''}`,
        () => {
          state.episode = index;
          renderEpisodes();
          renderEpisodePage();
          updateUrl(true);
        }
      );

      episodeButton.disabled = locked;
      episodeButton.title = locked ? 'Hidden by spoiler limit' : episode.name;
      host.appendChild(episodeButton);
    });
  }

  function makeFact(label, ids, type) {
    const element = document.createElement('div');
    element.innerHTML = `<strong>${label}: </strong>`;

    ids
      .filter(id => type !== 'character' || entityVisible(type, id))
      .forEach((id, index) => {
        if (index) element.append(' · ');
        element.appendChild(entityButton(type, id));
      });

    return element;
  }

  function renderSection(section) {
    const details = document.createElement('details');
    details.className = 'episode-section';

    const summary = document.createElement('summary');
    const title = document.createElement('span');
    title.className = 'section-title';
    appendLinkified(title, section.summary);

    const meta = document.createElement('span');
    meta.className = 'section-meta';
    meta.textContent = (section.place || [])
      .map(id => PLACES[id]?.name)
      .filter(Boolean)
      .join(' · ');

    summary.append(title, meta);
    details.appendChild(summary);

    const body = document.createElement('div');
    body.className = 'section-body';

    const list = document.createElement('ul');
    list.className = 'detail-list';
    (section.beats || []).forEach(beat => {
      const item = document.createElement('li');
      appendLinkified(item, beat.text);
      const lore = loreButton(beat.lore);
      if (lore) item.appendChild(lore);
      list.appendChild(item);
    });
    body.appendChild(list);

    const facts = document.createElement('div');
    facts.className = 'fact-grid';
    facts.appendChild(makeFact('Place', section.place || [], 'place'));
    facts.appendChild(makeFact('Characters', section.people || [], 'character'));

    const why = document.createElement('div');
    why.innerHTML = '<strong>Why it matters: </strong>';
    appendLinkified(why, section.why);
    facts.appendChild(why);

    body.appendChild(facts);
    details.appendChild(body);
    return details;
  }

  function renderEpisodePage() {
    const host = $('#episode-card');
    clear(host);

    const episode = episodeAt(state.episode);
    if (!episode) return;

    const head = document.createElement('header');
    head.className = 'episode-page-head';
    head.innerHTML = `
      <span class="badge">${episodeTag(state.episode)}</span>
      <h2>${episode.name}</h2>
      <p class="muted">${episode.sections.length} parts of the episode · tap a section to expand it</p>
    `;
    host.appendChild(head);

    const list = document.createElement('div');
    list.className = 'episode-sections';
    episode.sections.forEach(section => list.appendChild(renderSection(section)));
    host.appendChild(list);
  }

  function renderBrowseFilters() {
    const host = $('#browse-filters');
    clear(host);

    FILTERS.forEach(([id, label]) => {
      host.appendChild(button(
        label,
        `pill${state.browseFilter === id ? ' active' : ''}`,
        () => {
          state.browseFilter = id;
          renderBrowseFilters();
          renderBrowseResults();
        }
      ));
    });
  }

  function addBrowseCard(host, { type, title, sub, onClick }) {
    const card = button('', 'browse-card', onClick);
    const typeLabel = document.createElement('span');
    const titleElement = document.createElement('b');
    const subtitle = document.createElement('small');

    typeLabel.className = 'type-pill';
    typeLabel.textContent = type;
    titleElement.textContent = title;
    subtitle.textContent = sub || '';

    card.append(typeLabel, titleElement, subtitle);
    host.appendChild(card);
  }

  function renderBrowseResults() {
    const host = $('#browse-results');
    clear(host);

    const query = state.browseQuery.trim().toLowerCase();
    const filter = state.browseFilter;
    const matches = (...values) =>
      !query || values.join(' ').toLowerCase().includes(query);

    let count = 0;

    for (const [type, map, label] of BROWSE_TYPES) {
      if (filter !== 'all' && filter !== type) continue;

      for (const [id, entity] of Object.entries(map)) {
        if (!entityVisible(type, id)) continue;

        const title = entityLabel(type, id);
        const subtitle = type === 'character'
          ? entityRole(type, id)
          : (entity.region || label);

        if (!matches(title, subtitle, visibleEntityNames(type, id).join(' '))) {
          continue;
        }

        addBrowseCard(host, {
          type: label,
          title,
          sub: subtitle,
          onClick: () => openEntity(type, id)
        });
        count += 1;
      }
    }

    if (!count) {
      const empty = document.createElement('div');
      empty.className = 'empty';
      empty.textContent = 'No matches within your current spoiler limit.';
      host.appendChild(empty);
    }
  }

  function renderBrowse() {
    renderBrowseFilters();
    renderBrowseResults();
  }

  function setView(view, push = true) {
    state.view = view;
    $('#episodes-view').hidden = view !== 'episodes';
    $('#browse-view').hidden = view !== 'browse';
    $('#episodes-tab').classList.toggle('active', view === 'episodes');
    $('#browse-tab').classList.toggle('active', view === 'browse');

    if (view === 'browse') renderBrowse();
    if (push) updateUrl(true);
  }

  function openSheet(content) {
    const root = $('#modal-root');
    clear(root);

    const backdrop = document.createElement('div');
    const sheet = document.createElement('section');
    backdrop.className = 'modal-backdrop';
    sheet.className = 'sheet';
    sheet.innerHTML = '<div class="grabber"></div>';
    sheet.appendChild(content);
    backdrop.appendChild(sheet);

    backdrop.onclick = () => clear(root);
    sheet.onclick = event => event.stopPropagation();
    root.appendChild(backdrop);
  }

  function sheetHeader(type, name, role) {
    const fragment = document.createDocumentFragment();
    const header = document.createElement('div');
    const details = document.createElement('div');

    header.className = 'sheet-head';
    details.innerHTML = `
      <span class="type-pill">${type}</span>
      <h2>${name}</h2>
      ${role ? `<p class="muted">${role}</p>` : ''}
    `;

    header.append(
      details,
      button('×', 'close-button', () => clear($('#modal-root')))
    );
    fragment.appendChild(header);
    return fragment;
  }

  function appearances(type, id) {
    const names = visibleEntityNames(type, id).map(name => name.toLowerCase());
    const results = [];

    EPISODE_TIMELINE
      .slice(0, state.spoilerLimit)
      .forEach((episode, index) => {
        const hit = episode.sections.some(section => {
          if (type === 'character' && (section.people || []).includes(id)) return true;
          if (type === 'place' && (section.place || []).includes(id)) return true;

          const haystack = [
            section.summary,
            section.why,
            ...(section.beats || []).map(beat => beat.text)
          ].join(' ').toLowerCase();

          return names.some(name => haystack.includes(name));
        });

        if (hit) {
          results.push({
            index,
            label: `${episodeTag(index)} — ${episode.name}`
          });
        }
      });

    return results;
  }

  function openEntity(type, id) {
    const entity = TYPE_MAPS[type]?.[id];
    if (!entity || !entityVisible(type, id)) return;

    const content = document.createElement('div');
    content.appendChild(
      sheetHeader(type, entityLabel(type, id), entityRole(type, id))
    );

    if (type === 'character' && entity.race && entityVisible('race', entity.race)) {
      const race = document.createElement('p');
      race.className = 'muted';
      race.textContent = RACES[entity.race].name;
      content.appendChild(race);
    }

    (entity.summary || [])
      .filter(item => item.revealAt <= state.spoilerLimit)
      .forEach(item => {
        const paragraph = document.createElement('p');
        appendLinkified(paragraph, item.text);
        content.appendChild(paragraph);
      });

    if (entity.lore) {
      const lore = loreButton(entity.lore);
      if (lore) content.appendChild(lore);
    }

    const relationships = (entity.relations || []).filter(relation =>
      relation.revealAt <= state.spoilerLimit &&
      entityVisible('character', relation.id)
    );

    if (relationships.length) {
      const heading = document.createElement('p');
      heading.className = 'eyebrow';
      heading.textContent = 'Connections';
      content.appendChild(heading);

      const grid = document.createElement('div');
      grid.className = 'relation-grid';
      relationships.forEach(relation => {
        grid.appendChild(button(
          `${entityLabel('character', relation.id)} — ${relation.label}`,
          'relation-button',
          () => openEntity('character', relation.id)
        ));
      });
      content.appendChild(grid);
    }

    if (type !== 'race') {
      const episodeAppearances = appearances(type, id);
      if (episodeAppearances.length) {
        const heading = document.createElement('p');
        heading.className = 'eyebrow';
        heading.textContent = 'Appearances so far';
        content.appendChild(heading);

        const grid = document.createElement('div');
        grid.className = 'appearance-grid';
        episodeAppearances.forEach(appearance => {
          grid.appendChild(button(
            appearance.label,
            'appearance-button',
            () => {
              clear($('#modal-root'));
              state.episode = appearance.index;
              setView('episodes', false);
              renderEpisodes();
              renderEpisodePage();
              updateUrl(true);
            }
          ));
        });
        content.appendChild(grid);
      }
    }

    openSheet(content);
  }

  function openLore(id) {
    const lore = LORE[id];
    if (!lore || lore.revealAt > state.spoilerLimit) return;

    const content = document.createElement('div');
    content.appendChild(sheetHeader('Lore note', lore.title, ''));

    const paragraph = document.createElement('p');
    paragraph.textContent = lore.text;
    content.appendChild(paragraph);
    openSheet(content);
  }

  function openSettings() {
    const content = document.createElement('div');
    content.appendChild(sheetHeader(
      'Spoiler settings',
      'Choose the furthest episode you have seen',
      'Everything after it stays hidden.'
    ));

    const tabs = document.createElement('div');
    const list = document.createElement('div');
    tabs.className = 'filter-rail';
    list.className = 'settings-list';

    let selectedSeasonId = episodeAt(state.spoilerLimit - 1)?.seasonId || SEASON_ORDER[0];

    function draw() {
      clear(tabs);
      clear(list);

      SEASON_ORDER.forEach(seasonId => {
        const season = SEASONS[seasonId];
        tabs.appendChild(button(
          `Season ${season.number}`,
          `pill${seasonId === selectedSeasonId ? ' active' : ''}`,
          () => {
            selectedSeasonId = seasonId;
            draw();
          }
        ));
      });

      const season = SEASONS[selectedSeasonId];
      season.episodes.forEach(episode => {
        const globalIndex = EPISODE_TIMELINE.indexOf(episode);
        const globalPosition = globalIndex + 1;

        list.appendChild(button(
          `Episode ${episode.number} — ${episode.name}`,
          `settings-episode${globalPosition === state.spoilerLimit ? ' selected' : ''}`,
          () => {
            state.spoilerLimit = globalPosition;
            state.episode = Math.min(state.episode, globalIndex);
            localStorage.setItem('rop-spoiler-limit', globalPosition);
            clear($('#modal-root'));
            renderAll();
            updateUrl();
          }
        ));
      });
    }

    draw();
    content.append(tabs, list);
    openSheet(content);
  }

  function settingsSummary() {
    const episode = episodeAt(state.spoilerLimit - 1);
    if (!episode) return '';
    return `Season ${episode.seasonNumber} · Episode ${episode.number} — ${episode.name}`;
  }

  async function share() {
    updateUrl();
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'The Rings of Power Episode Companion',
          url: location.href
        });
      } else {
        await navigator.clipboard.writeText(location.href);
      }
    } catch (error) {
      if (error?.name !== 'AbortError') prompt('Copy this link:', location.href);
    }
  }

  function renderAll() {
    $('#settings-summary').textContent = settingsSummary();
    renderEpisodes();
    renderEpisodePage();
    setView(state.view, false);
  }

  $('#episodes-tab').onclick = () => setView('episodes');
  $('#browse-tab').onclick = () => setView('browse');
  $('#settings-button').onclick = openSettings;
  $('#share-button').onclick = share;
  $('#browse-search').oninput = event => {
    state.browseQuery = event.target.value;
    renderBrowseResults();
  };
  window.onpopstate = () => {
    loadState();
    renderAll();
  };

  loadState();
  renderAll();
  updateUrl();
})();