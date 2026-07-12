(() => {
  'use strict';

  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => [...root.querySelectorAll(s)];
  const state = {
    railId: 'galadriel', spoilerLimit: 16, view: 'explore', currentEpisodeByRail: {},
    browseQuery: '', browseFilter: 'all'
  };

  const TYPE_MAPS = { character: CHARACTERS, place: PLACES, object: OBJECTS, race: RACES };
  const FILTERS = [['all','All'],['storyline','Storylines'],['character','Characters'],['place','Places'],['object','Objects'],['race','Races']];

  function railById(id){ return RAILS.find(r => r.id === id) || RAILS[0]; }
  function episodesFor(railId){ const r=railById(railId); return SEASONS.s1.storylines[r.seasons.s1].episodes.concat(SEASONS.s2.storylines[r.seasons.s2].episodes); }
  function railMeta(railId){ const r=railById(railId),a=SEASONS.s1.storylines[r.seasons.s1],b=SEASONS.s2.storylines[r.seasons.s2]; const cast=[]; [...a.cast,...b.cast].forEach(id=>{if(!cast.includes(id))cast.push(id)}); return {title:r.title,location:r.location,art:a.art,color:a.color,cast}; }
  function firstAvailable(episodes,limit=state.spoilerLimit){ const i=episodes.findIndex((e,idx)=>e&&idx<limit); return i<0?0:i; }
  function activeEpisodeIndex(railId=state.railId){ const eps=episodesFor(railId), stored=state.currentEpisodeByRail[railId]; return Number.isInteger(stored)&&eps[stored]&&stored<state.spoilerLimit?stored:firstAvailable(eps); }
  function episodeName(i){ return i<8?EP_NAMES.s1[i]:EP_NAMES.s2[i-8]; }
  function episodeTag(i){ return i<8?`S1E${i+1}`:`S2E${i-7}`; }
  function firstReveal(entity){ const vals=(entity.summary||[]).map(x=>x.revealAt).filter(Number.isFinite); return vals.length?Math.min(...vals):1; }
  function entityVisible(type,id){ const e=TYPE_MAPS[type]?.[id]; return !!e && firstReveal(e)<=state.spoilerLimit; }
  function visibleIdentity(entity){
    if(!entity?.identities)return null;
    return entity.identities.filter(x=>x.revealAt<=state.spoilerLimit).sort((a,b)=>a.revealAt-b.revealAt).at(-1)||null;
  }
  function entityLabel(type,id){
    const e=TYPE_MAPS[type]?.[id]; if(!e)return id;
    if(type==='character'){const ident=visibleIdentity(e);if(ident)return ident.displayName||ident.name;if(e.nameRevealAt&&e.nameRevealAt>state.spoilerLimit)return e.identities?.[0]?.name||id;}
    return e.name||id;
  }
  function entityRole(type,id){
    const e=TYPE_MAPS[type]?.[id]; if(!e)return '';
    if(type==='character'){const ident=visibleIdentity(e);if(ident?.role)return ident.role;}
    return e.role||'';
  }
  function visibleEntityNames(type,id){
    const e=TYPE_MAPS[type]?.[id]; if(!e)return [];
    const names=[];
    if(!e.nameRevealAt||e.nameRevealAt<=state.spoilerLimit)names.push(e.name);
    (e.aliases||[]).forEach(name=>names.push(name));
    if(type==='character')for(const ident of (e.identities||[])){if(ident.revealAt<=state.spoilerLimit){names.push(ident.name);(ident.aliases||[]).forEach(name=>names.push(name));}}
    return [...new Set(names.filter(Boolean))];
  }

  function loadState(){
    const p=new URLSearchParams(location.search), saved=Number(localStorage.getItem('rop-spoiler-limit'));
    const qLimit=Number(p.get('spoilers')); state.spoilerLimit=qLimit>=1&&qLimit<=16?qLimit:(saved>=1&&saved<=16?saved:16);
    state.view=p.get('view')==='browse'?'browse':'explore';
    const qRail=p.get('rail'); if(qRail&&RAILS.some(r=>r.id===qRail))state.railId=qRail;
    const qEp=Number(p.get('episode')); if(Number.isInteger(qEp)&&qEp>=1&&qEp<=16)state.currentEpisodeByRail[state.railId]=qEp-1;
  }
  function updateUrl(replace=true){ const p=new URLSearchParams(); p.set('rail',state.railId);p.set('episode',String(activeEpisodeIndex()+1));p.set('spoilers',String(state.spoilerLimit));if(state.view!=='explore')p.set('view',state.view);history[replace?'replaceState':'pushState'](null,'',`${location.pathname}?${p}`); }

  function clear(el){ while(el.firstChild)el.removeChild(el.firstChild); }
  function btn(text,cls,onClick){ const b=document.createElement('button');b.type='button';b.className=cls;b.textContent=text;if(onClick)b.addEventListener('click',onClick);return b; }
  function entityButton(type,id,cls='link-button'){ const b=btn(entityLabel(type,id),cls,()=>openEntity(type,id)); return b; }

  function renderStoryPicker(){ const host=$('#story-picker');clear(host); RAILS.forEach(r=>{ const m=railMeta(r.id),b=document.createElement('button');b.type='button';b.className='story-card'+(r.id===state.railId?' selected':'');b.style.setProperty('--story-color',m.color);b.innerHTML=`<svg viewBox="0 0 180 96"><use href="#${m.art}"></use></svg><b>${escapeHtml(m.title)}</b><small>${escapeHtml(m.location)}</small>`;b.onclick=()=>{state.railId=r.id;renderExplore();updateUrl(false)};host.appendChild(b); }); }
  function renderHeading(){ const m=railMeta(state.railId);$('#story-title').textContent=m.title;$('#story-location').textContent=m.location;const cast=$('#cast-chips');clear(cast);m.cast.filter(id=>entityVisible('character',id)).forEach(id=>cast.appendChild(entityButton('character',id))); }
  function renderEpisodes(){ const host=$('#episode-grid');clear(host);const eps=episodesFor(state.railId),active=activeEpisodeIndex(),m=railMeta(state.railId);eps.forEach((ep,i)=>{if(i===8){const d=document.createElement('div');d.className='season-divider';d.textContent='SEASON 2';host.appendChild(d)}const locked=i>=state.spoilerLimit,disabled=locked||!ep,b=document.createElement('button');b.type='button';b.className='episode-card'+(i===active?' selected':'');b.style.setProperty('--story-color',m.color);b.disabled=disabled;const blurb=locked?'Hidden by spoiler limit':(!ep?'Not a focus of this episode':ep.blurb);b.innerHTML=`<strong>${episodeTag(i)}</strong><span>${escapeHtml(episodeName(i))}</span><small>${escapeHtml(blurb)}</small>`;if(!disabled)b.onclick=()=>{state.currentEpisodeByRail[state.railId]=i;renderEpisodes();renderDetail();updateUrl(false)};host.appendChild(b)}); }

  function buildDictionary(){ const d=[];for(const [type,map] of Object.entries(TYPE_MAPS))for(const [id] of Object.entries(map)){if(!entityVisible(type,id))continue;visibleEntityNames(type,id).forEach(name=>d.push({name,id,type}))}d.sort((a,b)=>b.name.length-a.name.length);return d; }
  function appendLinkified(parent,text){ if(!text)return;const dict=buildDictionary(); if(!dict.length){parent.append(text);return}const escaped=dict.map(x=>x.name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));const re=new RegExp(`(${escaped.join('|')})`,'gi'),byName=new Map(dict.map(x=>[x.name.toLowerCase(),x]));let last=0;for(const m of text.matchAll(re)){parent.append(text.slice(last,m.index));const hit=byName.get(m[0].toLowerCase());if(hit){const s=document.createElement('span');s.className='inline-link';s.textContent=m[0];s.onclick=()=>openEntity(hit.type,hit.id);parent.appendChild(s)}else parent.append(m[0]);last=m.index+m[0].length}parent.append(text.slice(last)); }
  function loreButton(id){ const l=LORE[id];if(!l||l.revealAt>state.spoilerLimit)return null;const b=btn('i','lore-button',()=>openLore(id));b.setAttribute('aria-label','Show book lore');return b; }
  function renderDetail(){ const host=$('#detail-card'),i=activeEpisodeIndex(),ep=episodesFor(state.railId)[i],m=railMeta(state.railId);clear(host);if(!ep){host.hidden=true;return}host.hidden=false;const layout=document.createElement('div');layout.className='detail-layout';layout.innerHTML=`<svg class="detail-art" viewBox="0 0 180 96" style="--story-color:${m.color}"><use href="#${m.art}"></use></svg>`;const body=document.createElement('div');body.className='detail-body';const kicker=document.createElement('div');kicker.className='detail-kicker';kicker.innerHTML=`<span class="badge">${episodeTag(i).replace('E',' · Episode ')}</span><strong>${escapeHtml(episodeName(i))}</strong>`;body.appendChild(kicker);const summary=document.createElement('h3');summary.className='detail-summary';appendLinkified(summary,ep.summary);body.appendChild(summary);const ul=document.createElement('ul');ul.className='detail-list';ep.beats.forEach((beat,n)=>{const li=document.createElement('li');appendLinkified(li,beat.text);const lb=loreButton(beat.lore);if(lb)li.appendChild(lb);ul.appendChild(li)});body.appendChild(ul);const facts=document.createElement('div');facts.className='fact-grid';facts.appendChild(makeFact('Place',ep.place||[],'place'));facts.appendChild(makeFact('Characters',(ep.people||[]).filter(id=>entityVisible('character',id)),'character'));const why=document.createElement('div');why.innerHTML='<strong>Why it matters: </strong>';appendLinkified(why,ep.why);facts.appendChild(why);body.appendChild(facts);layout.appendChild(body);host.appendChild(layout); }
  function makeFact(label,ids,type){const d=document.createElement('div');d.innerHTML=`<strong>${label}: </strong>`;ids.forEach((id,idx)=>{if(idx)d.append(' ');d.appendChild(entityButton(type,id,'link-button'))});return d;}
  function renderExplore(){renderStoryPicker();renderHeading();renderEpisodes();renderDetail();}

  function renderBrowseFilters(){ const host=$('#browse-filters');clear(host);FILTERS.forEach(([id,label])=>{const b=btn(label,'pill'+(state.browseFilter===id?' active':''),()=>{state.browseFilter=id;renderBrowseFilters();renderBrowseResults()});host.appendChild(b)}); }
  function addBrowseCard(host,{type,title,sub,onClick,art,color}){const b=document.createElement('button');b.type='button';b.className='browse-card';if(art)b.innerHTML=`<svg viewBox="0 0 180 96" style="--story-color:${color}"><use href="#${art}"></use></svg>`;const pill=document.createElement('span');pill.className='type-pill';pill.textContent=type;const strong=document.createElement('b');strong.textContent=title;const small=document.createElement('small');small.textContent=sub||'';b.append(pill,strong,small);b.onclick=onClick;host.appendChild(b); }
  function renderBrowseResults(){const host=$('#browse-results');clear(host);const q=state.browseQuery.trim().toLowerCase(),f=state.browseFilter;let count=0;const matches=(...parts)=>!q||parts.join(' ').toLowerCase().includes(q);
    if(f==='all'||f==='storyline')RAILS.forEach(r=>{const m=railMeta(r.id);if(matches(m.title,m.location)){addBrowseCard(host,{type:'Storyline',title:m.title,sub:m.location,art:m.art,color:m.color,onClick:()=>{state.railId=r.id;setView('explore',false)}});count++}});
    for(const [type,map,label] of [['character',CHARACTERS,'Character'],['place',PLACES,'Place'],['object',OBJECTS,'Object'],['race',RACES,'Race']]){if(f!=='all'&&f!==type)continue;for(const [id,e] of Object.entries(map)){if(!entityVisible(type,id))continue;const sub=type==='character'?entityRole(type,id):(type==='place'?e.region:(type==='race'?'People':'Object'));const title=entityLabel(type,id),searchNames=visibleEntityNames(type,id).join(' ');if(matches(title,sub,searchNames)){addBrowseCard(host,{type:label,title,sub,onClick:()=>openEntity(type,id)});count++}}}
    if(!count){const d=document.createElement('div');d.className='empty';d.textContent='No matches within your current spoiler limit.';host.appendChild(d)} }
  function renderBrowse(){renderBrowseFilters();renderBrowseResults();}
  function setView(view,push=true){state.view=view;$('#explore-view').hidden=view!=='explore';$('#browse-view').hidden=view!=='browse';$('#explore-tab').classList.toggle('active',view==='explore');$('#browse-tab').classList.toggle('active',view==='browse');if(view==='browse')renderBrowse();if(push)updateUrl(false);}

  function openSheet(content){const root=$('#modal-root');clear(root);const back=document.createElement('div');back.className='modal-backdrop';const sheet=document.createElement('section');sheet.className='sheet';sheet.innerHTML='<div class="grabber"></div>';sheet.appendChild(content);back.appendChild(sheet);back.onclick=()=>clear(root);sheet.onclick=e=>e.stopPropagation();root.appendChild(back);}
  function sheetHeader(type,name,role){const frag=document.createDocumentFragment(),head=document.createElement('div');head.className='sheet-head';const d=document.createElement('div');d.innerHTML=`<span class="type-pill">${escapeHtml(type)}</span><h2>${escapeHtml(name)}</h2>${role?`<p class="muted">${escapeHtml(role)}</p>`:''}`;head.appendChild(d);head.appendChild(btn('×','close-button',()=>clear($('#modal-root'))));frag.appendChild(head);return frag;}
  function openEntity(type,id){const e=TYPE_MAPS[type]?.[id];if(!e||!entityVisible(type,id))return;const c=document.createElement('div');c.appendChild(sheetHeader(type,entityLabel(type,id),entityRole(type,id)));if(type==='character'&&e.identities){const known=e.identities.filter(x=>x.revealAt<=state.spoilerLimit).map(x=>x.name);if(known.length>1){const p=document.createElement('p');p.className='muted identity-line';p.textContent='Known identities: '+known.join(' · ');c.appendChild(p)}}if(type==='character'&&e.race&&entityVisible('race',e.race)){const p=document.createElement('p');p.className='muted';p.textContent=RACES[e.race].name;c.appendChild(p)}const bios=(e.summary||[]).filter(x=>x.revealAt<=state.spoilerLimit);bios.forEach(x=>{const p=document.createElement('p');appendLinkified(p,x.text);c.appendChild(p)});if(e.lore){const lb=loreButton(e.lore);if(lb)c.appendChild(lb)}const rels=type==='race'?Object.entries(CHARACTERS).filter(([cid,ch])=>ch.race===id&&entityVisible('character',cid)):(e.relations||[]).filter(r=>r.revealAt<=state.spoilerLimit&&entityVisible('character',r.id));if(rels.length){const h=document.createElement('p');h.className='eyebrow';h.textContent=type==='race'?'Notable characters':'Connections';c.appendChild(h);const grid=document.createElement('div');grid.className='relation-grid';if(type==='race'){Object.entries(CHARACTERS).filter(([cid,ch])=>ch.race===id&&entityVisible('character',cid)).forEach(([cid,ch])=>grid.appendChild(btn(entityLabel('character',cid),'relation-button',()=>openEntity('character',cid))))}else rels.forEach(r=>grid.appendChild(btn(`${entityLabel('character',r.id)} — ${r.label}`,'relation-button',()=>openEntity('character',r.id))));c.appendChild(grid)}
    if(type!=='race'){const apps=appearances(type,id,e);if(apps.length){const h=document.createElement('p');h.className='eyebrow';h.textContent='Appearances so far';c.appendChild(h);const grid=document.createElement('div');grid.className='appearance-grid';apps.forEach(a=>grid.appendChild(btn(a.label,'appearance-button',()=>{clear($('#modal-root'));state.railId=a.railId;state.currentEpisodeByRail[a.railId]=a.index;setView('explore',false);renderExplore();updateUrl(false)})));c.appendChild(grid)}}openSheet(c); }
  function appearances(type,id,e){const names=visibleEntityNames(type,id).map(x=>x.toLowerCase()),out=[];RAILS.forEach(r=>episodesFor(r.id).forEach((ep,i)=>{if(!ep||i>=state.spoilerLimit)return;let involved=type==='character'?(ep.people||[]).includes(id):type==='place'?(ep.place||[]).includes(id):false;if(!involved){const hay=[ep.summary,ep.why,...ep.beats.map(b=>b.text)].join(' ').toLowerCase();involved=names.some(n=>hay.includes(n))}if(involved)out.push({railId:r.id,index:i,label:`${railMeta(r.id).title} — ${episodeName(i)}`})}));return out; }
  function openLore(id){const l=LORE[id];if(!l||l.revealAt>state.spoilerLimit)return;const c=document.createElement('div');c.appendChild(sheetHeader('Book & lore note',l.title,''));const p=document.createElement('p');p.textContent=l.text;c.appendChild(p);openSheet(c);}

  function openSettings(){const c=document.createElement('div');c.appendChild(sheetHeader('Spoiler settings','Choose the furthest episode you have seen','Everything after it stays hidden.'));const tabs=document.createElement('div');tabs.className='filter-rail';let season=state.spoilerLimit<=8?'s1':'s2';const list=document.createElement('div');list.className='settings-list';function draw(){clear(tabs);clear(list);['s1','s2'].forEach(s=>tabs.appendChild(btn(`Season ${s==='s1'?1:2}`,'pill'+(s===season?' active':''),()=>{season=s;draw()})));EP_NAMES[season].forEach((name,i)=>{const global=season==='s1'?i+1:i+9;const b=btn(`Episode ${i+1} — ${name}`,'settings-episode'+(global===state.spoilerLimit?' selected':''),()=>{state.spoilerLimit=global;localStorage.setItem('rop-spoiler-limit',String(global));clear($('#modal-root'));renderAll();updateUrl(true)});list.appendChild(b)})}draw();c.append(tabs,list);openSheet(c); }
  function settingsSummary(){const l=state.spoilerLimit,s=l<=8?'s1':'s2',n=l<=8?l:l-8;return `Season ${s==='s1'?1:2} · Episode ${n} — ${EP_NAMES[s][n-1]}`;}
  async function share(){updateUrl(true);try{if(navigator.share)await navigator.share({title:'The Rings of Power Storyline Explorer',url:location.href});else{await navigator.clipboard.writeText(location.href);const b=$('#share-button');const old=b.textContent;b.textContent='Link copied';setTimeout(()=>b.textContent=old,1500)}}catch(e){if(e?.name!=='AbortError')prompt('Copy this link:',location.href)}}

  function validateData(){const issues=[];for(const [cid,c] of Object.entries(CHARACTERS)){if(c.race&&!RACES[c.race])issues.push(`Character ${cid}: missing race ${c.race}`);for(const rel of (c.relations||[]))if(!CHARACTERS[rel.id])issues.push(`Character ${cid}: missing relation ${rel.id}`)}for(const r of RAILS)for(const [s,k] of Object.entries(r.seasons))if(!SEASONS[s]?.storylines?.[k])issues.push(`Rail ${r.id}: missing ${s}:${k}`);for(const [sid,season] of Object.entries(SEASONS))for(const [stid,story] of Object.entries(season.storylines)){if(story.episodes.length!==8)issues.push(`${sid}:${stid} has ${story.episodes.length} episodes`);story.episodes.forEach((ep,i)=>{if(!ep)return;(ep.people||[]).forEach(id=>{if(!CHARACTERS[id])issues.push(`${sid}:${stid}:E${i+1} missing character ${id}`)});(ep.place||[]).forEach(id=>{if(!PLACES[id])issues.push(`${sid}:${stid}:E${i+1} missing place ${id}`)});ep.beats.forEach(b=>{if(b.lore&&!LORE[b.lore])issues.push(`${sid}:${stid}:E${i+1} missing lore ${b.lore}`)})})}if(issues.length)console.warn('Storyline Explorer data validation issues:',issues);return issues;}
  function escapeHtml(s){return String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));}
  function renderAll(){ $('#settings-summary').textContent=settingsSummary();renderExplore();setView(state.view,false); }

  $('#explore-tab').onclick=()=>setView('explore');$('#browse-tab').onclick=()=>setView('browse');$('#settings-button').onclick=openSettings;$('#share-button').onclick=share;$('#browse-search').addEventListener('input',e=>{state.browseQuery=e.target.value;renderBrowseResults()});window.addEventListener('popstate',()=>{loadState();renderAll()});
  validateData();loadState();renderAll();updateUrl(true);
})();
