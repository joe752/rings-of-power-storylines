/* Episode-first enrichment. These additions stay grounded in what the episode itself shows. */
(() => {
  const elrond = SEASONS.s1.storylines.elrond.episodes[0];
  elrond.summary = "Elrond balances friendship with the demands of power.";
  elrond.beats = [
    { text: "Elrond welcomes Galadriel home as an old friend, but he also speaks from inside Gil-galad's political world. He urges her to accept the honor of returning to Valinor because he believes her war has ended and fears that continuing it will consume her." },
    { text: "Their conversation establishes a tension that will follow Elrond throughout the story: he genuinely loves the people close to him, yet his position repeatedly asks him to carry the priorities of kings, realms, and larger causes into those friendships." },
    { text: "After Galadriel departs, Gil-galad brings Elrond to Celebrimbor. The master smith wants an immense new forge completed by spring, giving Elrond a political assignment whose success will depend on relationships beyond the Elven court." }
  ];
  elrond.people = ["elrond", "galadriel", "gil-galad", "celebrimbor"];
  elrond.why = "Elrond is introduced as both a loyal friend and a rising political figure. The episode establishes the conflict between personal trust and public duty that will shape many of his most important relationships.";
  elrond.blurb = "Friendship meets public duty";

  const harfoots = SEASONS.s1.storylines.harfoots.episodes[0];
  harfoots.summary = "Nori cannot stop looking beyond the familiar.";
  harfoots.beats = [
    { text: "The Harfoots survive by remaining hidden, moving with the seasons, and treating attention from the wider world as danger. Their caution is not cowardice; for a small wandering people, being unnoticed is a form of protection." },
    { text: "Nori already strains against that instinct. She is curious about what lies beyond the Harfoots' familiar paths and pays attention when the world seems to be changing, even when others would rather keep their heads down." },
    { text: "Sadoc notices that the stars are appearing at the wrong time. Later, a meteor crosses Middle-earth and crashes near the camp. Instead of fleeing from the unknown, Nori approaches the crater and finds a full-sized man alive in strangely cool fire." }
  ];
  harfoots.why = "The episode establishes the trait that drives Nori's choices: when caution tells her to turn away, curiosity and concern pull her closer. Finding the Stranger matters because Nori is the kind of person who chooses to look.";
  harfoots.blurb = "Nori looks beyond the safe path";

  /* S1E1 works better as two Southlands sections: the human–Elf relationship is
     the emotional groundwork, while the spreading corruption is a separate mystery. */
  const southlands = SEASONS.s1.storylines.southlands.episodes[0];
  southlands.summary = "Arondir and Bronwyn cross a boundary their communities do not trust.";
  southlands.beats = [
    { text: "For generations, Elven soldiers have watched the people of the Southlands because their ancestors sided with Morgoth. The war is ancient, but the distrust is not: many Southlanders resent being treated as if they inherited their ancestors' guilt, while many Elves still see them as a people who must be watched." },
    { text: "Inside that divide, Arondir and Bronwyn have quietly fallen in love. Their affection has to remain largely unspoken and private—not only because an Elf and a mortal loving one another is extraordinary, but because neither community is inclined to welcome the other." , lore: "lore-elf-mortal-love" },
    { text: "When the Elven watch is ordered home, Arondir does not simply leave with the others. He returns to Bronwyn, even though his own company will be looking for him. Their conversation makes clear that separation has become a personal choice neither of them is ready to accept." },
    { text: "The relationship also changes how Arondir sees the people he has been assigned to watch. Bronwyn is not an abstraction or the descendant of an old enemy; through her, the Southlands have become a place of human lives and attachments that matter to him." }
  ];
  southlands.place = ["tirharad"];
  southlands.people = ["arondir", "bronwyn"];
  southlands.why = "The episode establishes the Southlands through a relationship caught inside inherited hostility. Arondir and Bronwyn's love is already pulling both of them across boundaries their communities have spent generations maintaining.";
  southlands.blurb = "Love across an old divide";

  SEASONS.s1.storylines["southlands-shadow"] = {
    title: "The first signs of danger",
    cast: ["arondir", "bronwyn", "theo"],
    location: "Tirharad · Hordern",
    art: "scene-southlands",
    color: "oklch(72% 0.12 55)",
    episodes: [
      {
        summary: "Something is wrong beneath the apparent peace.",
        beats: [
          { text: "Bronwyn brings Arondir to a sick cow whose milk has turned black after it wandered east near Hordern. The image is small and domestic, but it is the episode's clearest warning that corruption is already reaching ordinary life." },
          { text: "Arondir and Bronwyn travel together to investigate Hordern and find the village burned and abandoned. The danger is still unexplained, but the discovery gives them a reason to act together just as the official Elven watch is ending." },
          { text: "Elsewhere, Theo secretly takes a broken black sword bearing Sauron's mark from Waldreg's barn. The weapon is important, but at this point neither Theo nor the audience yet understands what it is or how deeply it is connected to the danger spreading through the Southlands." }
        ],
        place: ["tirharad"],
        people: ["arondir", "bronwyn", "theo"],
        why: "The black milk, the destruction of Hordern, and Theo's hidden sword turn the Southlands from a place of old political tension into the first place where a new threat is visibly taking root.",
        blurb: "The first signs of corruption"
      }, null, null, null, null, null, null, null
    ]
  };
})();