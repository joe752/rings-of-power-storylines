/* Episode-first season model.
   All narrative content is stored directly on SEASONS[season].episodes[].sections. */
(() => {
  const seasonIds = Object.keys(EP_NAMES);

  const makeSeason = (seasonId, names, seasonNumber) => ({
    id: seasonId,
    number: seasonNumber,
    episodes: names.map((name, index) => ({
      seasonId,
      seasonNumber,
      number: index + 1,
      name,
      sections: []
    }))
  });

  window.SEASON_ORDER = seasonIds;
  window.SEASONS = Object.fromEntries(
    seasonIds.map((seasonId, index) => [
      seasonId,
      makeSeason(seasonId, EP_NAMES[seasonId], index + 1)
    ])
  );

  /* A single ordered timeline for spoiler positions, URL episode numbers,
     episode rails, settings, and appearance links. Episode objects are shared
     by reference with SEASONS, so later section registration is reflected here. */
  window.EPISODE_TIMELINE = seasonIds.flatMap(seasonId =>
    window.SEASONS[seasonId].episodes
  );

  const requireText = (value, field, context) => {
    if (typeof value !== 'string' || !value.trim()) {
      throw new TypeError(`${context}: ${field} must be non-empty text`);
    }
  };

  const requireKnownIds = (ids, map, field, context) => {
    if (ids === undefined) return;
    if (!Array.isArray(ids)) {
      throw new TypeError(`${context}: ${field} must be an array`);
    }
    ids.forEach(id => {
      if (!map[id]) throw new Error(`${context}: unknown ${field} id "${id}"`);
    });
  };

  const validateSection = (section, context) => {
    if (!section || typeof section !== 'object' || Array.isArray(section)) {
      throw new TypeError(`${context}: section must be an object`);
    }

    requireText(section.summary, 'summary', context);
    requireText(section.why, 'why', context);

    if (!Array.isArray(section.beats) || !section.beats.length) {
      throw new TypeError(`${context}: beats must be a non-empty array`);
    }

    section.beats.forEach((beat, index) => {
      const beatContext = `${context} beat ${index + 1}`;
      if (!beat || typeof beat !== 'object' || Array.isArray(beat)) {
        throw new TypeError(`${beatContext}: beat must be an object`);
      }
      requireText(beat.text, 'text', beatContext);
      if (beat.lore && !LORE[beat.lore]) {
        throw new Error(`${beatContext}: unknown lore id "${beat.lore}"`);
      }
    });

    requireKnownIds(section.place, PLACES, 'place', context);
    requireKnownIds(section.people, CHARACTERS, 'character', context);
  };

  window.addEpisodeSection = (seasonId, episodeNumber, section) => {
    const episode = window.SEASONS[seasonId]?.episodes?.[episodeNumber - 1];
    if (!episode) throw new Error(`Unknown episode ${seasonId}E${episodeNumber}`);

    const context = `${seasonId.toUpperCase()}E${episodeNumber}`;
    validateSection(section, context);
    episode.sections.push(section);
  };

  /* Convenience for source modules that contribute at most one section per episode.
     Null entries are skipped; sections are still stored directly on their episodes. */
  window.addEpisodeSections = (seasonId, sectionsByEpisode) => {
    if (!Array.isArray(sectionsByEpisode)) {
      throw new TypeError(`Sections for ${seasonId} must be an array`);
    }
    sectionsByEpisode.forEach((section, index) => {
      if (section) window.addEpisodeSection(seasonId, index + 1, section);
    });
  };
})();