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

  window.addEpisodeSection = (seasonId, episodeNumber, section) => {
    const episode = window.SEASONS[seasonId]?.episodes?.[episodeNumber - 1];
    if (!episode) throw new Error(`Unknown episode ${seasonId}E${episodeNumber}`);
    if (!section || typeof section !== "object") {
      throw new TypeError(`Invalid section for ${seasonId}E${episodeNumber}`);
    }
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