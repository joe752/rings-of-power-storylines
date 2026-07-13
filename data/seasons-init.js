/* Episode-first season model.
   All narrative content is stored directly on SEASONS[season].episodes[].sections. */
(() => {
  const makeSeason = names => ({
    episodes: names.map((name, index) => ({ number: index + 1, name, sections: [] })),
    _legacySeries: {}
  });

  window.SEASONS = {
    s1: makeSeason(EP_NAMES.s1),
    s2: makeSeason(EP_NAMES.s2)
  };

  window.addEpisodeSection = (seasonId, episodeNumber, section) => {
    const season = window.SEASONS[seasonId];
    const episode = season?.episodes?.[episodeNumber - 1];
    if (!episode) throw new Error(`Unknown episode ${seasonId}E${episodeNumber}`);
    episode.sections.push(section);
  };

  /* Convenience for source files that contribute at most one section per episode.
     Null entries are skipped; the data is still written directly into each episode. */
  window.addEpisodeSections = (seasonId, sectionsByEpisode) => {
    sectionsByEpisode.forEach((section, index) => {
      if (section) window.addEpisodeSection(seasonId, index + 1, section);
    });
  };

  /* Temporary compatibility only while the remaining old source files are migrated. */
  for (const season of Object.values(window.SEASONS)) {
    Object.defineProperty(season, "storylines", {
      value: season._legacySeries,
      configurable: true,
      enumerable: false
    });
  }

  window.finalizeEpisodeData = () => {
    for (const [seasonId, season] of Object.entries(window.SEASONS)) {
      for (const series of Object.values(season._legacySeries || {})) {
        window.addEpisodeSections(seasonId, series.episodes || []);
      }

      delete season.storylines;
      delete season._legacySeries;
    }
  };
})();