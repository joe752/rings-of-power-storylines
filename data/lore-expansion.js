/* Additional lore links layered onto the core dataset. */
(() => {
  const galadriel = window.CHARACTERS?.galadriel;
  if (galadriel) galadriel.lore = "lore-galadriel-long-view";

  const s1Galadriel = window.SEASONS?.s1?.storylines?.galadriel?.episodes;
  if (s1Galadriel) {
    // S1E1: the hunt carries the weight of a much larger First Age loss.
    if (s1Galadriel[0]?.beats?.[1]) s1Galadriel[0].beats[1].lore = "lore-galadriel-losses";

    // S1E5: her own admission about battle is the natural place to discuss
    // Tolkien's varying accounts of her pride, ambition and restlessness.
    if (s1Galadriel[4]?.beats?.[1]) s1Galadriel[4].beats[1].lore = "lore-galadriel-pride";

    // S1E8: the Three are familiar mythology; knowing the destination adds dread.
    if (s1Galadriel[7]?.beats?.[2]) s1Galadriel[7].beats[2].lore = "lore-three-rings-purpose";
  }

  const s1Elrond = window.SEASONS?.s1?.storylines?.elrond?.episodes;
  if (s1Elrond?.[0]?.beats?.[2]) s1Elrond[0].beats[2].lore = "lore-rings-poem";

  const rings = window.OBJECTS?.["three-rings"];
  if (rings) rings.lore = "lore-rings-poem";
})();
