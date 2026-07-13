/* Episode-first season model.
   The UI and future content work with SEASONS[season].episodes[].sections directly.
   Existing season files are accepted through a temporary legacy registry and are
   compiled into the episode-first shape before app.js runs. */
(() => {
  const makeSeason = names => ({
    episodes: names.map((name, index) => ({ number: index + 1, name, sections: [] })),
    _legacySeries: {}
  });

  window.SEASONS = {
    s1: makeSeason(EP_NAMES.s1),
    s2: makeSeason(EP_NAMES.s2)
  };

  // Compatibility bridge for the current canonical season files while they are
  // migrated from the old cross-episode series shape. This property is removed
  // by finalizeEpisodeData() before the application starts.
  for (const season of Object.values(window.SEASONS)) {
    Object.defineProperty(season, "storylines", {
      value: season._legacySeries,
      configurable: true,
      enumerable: false
    });
  }

  window.addEpisodeSection = (seasonId, episodeNumber, section) => {
    const season = window.SEASONS[seasonId];
    const episode = season?.episodes?.[episodeNumber - 1];
    if (!episode) throw new Error(`Unknown episode ${seasonId}E${episodeNumber}`);
    episode.sections.push(section);
  };

  window.finalizeEpisodeData = () => {
    for (const [seasonId, season] of Object.entries(window.SEASONS)) {
      for (const [sourceId, series] of Object.entries(season._legacySeries || {})) {
        (series.episodes || []).forEach((section, index) => {
          if (!section) return;
          window.addEpisodeSection(seasonId, index + 1, { sourceId, ...section });
        });
      }

      delete season.storylines;
      delete season._legacySeries;
    }
  };
})();
