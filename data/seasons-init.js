/* Episode-first season model.
   All narrative content is stored directly on SEASONS[season].episodes[].sections. */
(() => {
  const makeSeason = names => ({
    episodes: names.map((name, index) => ({ number: index + 1, name, sections: [] }))
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

  /* Convenience for source modules that contribute at most one section per episode.
     Null entries are skipped; sections are still stored directly on their episodes. */
  window.addEpisodeSections = (seasonId, sectionsByEpisode) => {
    sectionsByEpisode.forEach((section, index) => {
      if (section) window.addEpisodeSection(seasonId, index + 1, section);
    });
  };
})();