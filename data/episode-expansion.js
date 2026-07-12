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
    { text: "Inside that divide, Arondir and Bronwyn have quietly fallen in love. Their affection has to remain largely unspoken and private—not only because an Elf and a mortal loving one another is extraordinary, but because neither community is inclined to welcome the other.", lore: "lore-elf-mortal-love" },
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

  /* S1E2: Bronwyn's leadership and Arondir's disappearance are different pieces
     of the episode, and both deserve room. */
  const s1e2South = SEASONS.s1.storylines.southlands.episodes[1];
  s1e2South.summary = "Bronwyn makes the danger impossible to ignore.";
  s1e2South.beats = [
    { text: "Bronwyn returns to Tirharad with a warning that most of the village does not want to hear. The old distrust of Elves and the lack of visible proof make it easy for people to dismiss what she and Arondir found at Hordern." },
    { text: "The threat reaches her own home when an Orc bursts up through the floor. Bronwyn and Theo survive a brutal struggle and kill it together." },
    { text: "Bronwyn carries the Orc's severed head into the tavern. The act is shocking, but it succeeds where argument did not: she gives the village proof and convinces people to abandon their homes for Ostirith." }
  ];
  s1e2South.place = ["tirharad", "ostirith"];
  s1e2South.people = ["bronwyn", "theo"];
  s1e2South.why = "Bronwyn becomes a leader because she acts before consensus exists. Her willingness to face the danger herself is what finally moves the community.";
  s1e2South.blurb = "Bronwyn forces the truth into view";

  SEASONS.s1.storylines["arondir-below"] = {
    title: "Arondir beneath the Southlands",
    cast: ["arondir"],
    location: "Hordern · the Orc tunnels",
    art: "scene-southlands",
    color: "oklch(68% 0.10 45)",
    episodes: [
      null,
      {
        summary: "Arondir follows the danger underground and disappears from Bronwyn's world.",
        beats: [
          { text: "While Bronwyn returns to warn Tirharad, Arondir descends into the tunnel beneath Hordern to learn what has moved under the village." },
          { text: "The choice is consistent with the same concern that brought him back to Bronwyn: he does not leave when the official watch ends because he no longer sees the Southlands as someone else's problem." },
          { text: "Something captures him underground. The episode separates Arondir from Bronwyn just as the threat becomes undeniable, leaving each of them to confront a different side of the same danger." }
        ],
        place: ["tirharad", "mordor-region"],
        people: ["arondir", "bronwyn"],
        why: "Arondir's disappearance turns his decision to stay into a personal cost. He and Bronwyn are now fighting the same threat without knowing what has happened to the other.",
        blurb: "Arondir vanishes underground"
      },
      null,
      null,
      null,
      null,
      null,
      null
    ]
  };

  /* S1E4: Adar's message and Arondir's return to the people he cares about are
     emotionally distinct. */
  const s1e4South = SEASONS.s1.storylines.southlands.episodes[3];
  s1e4South.summary = "Adar turns Arondir into a messenger.";
  s1e4South.beats = [
    { text: "Arondir is brought before Adar, a scarred Elf who commands the Orcs and speaks of them as a people rather than disposable monsters." },
    { text: "Adar releases him with a deliberate purpose: carry an ultimatum to the refugees at Ostirith. Surrender the Southlands or be destroyed." },
    { text: "Arondir returns from captivity not simply as a soldier with intelligence, but as someone now carrying responsibility for what happens to Bronwyn, Theo, and the entire community gathered at the tower." }
  ];
  s1e4South.place = ["mordor-region", "ostirith"];
  s1e4South.people = ["adar", "arondir", "bronwyn"];
  s1e4South.why = "Adar sends Arondir back because he needs a messenger. For Arondir, the message becomes personal: the people threatened are no longer strangers he was assigned to watch.";
  s1e4South.blurb = "Arondir carries Adar's ultimatum";

  SEASONS.s1.storylines["theo-and-return"] = {
    title: "Theo, the sword, and Arondir's return",
    cast: ["theo", "arondir", "bronwyn", "waldreg"],
    location: "Tirharad · Ostirith",
    art: "scene-southlands",
    color: "oklch(72% 0.11 55)",
    episodes: [null, null, null,
      {
        summary: "Arondir returns by saving the son of the woman he loves.",
        beats: [
          { text: "Theo slips back into Tirharad for food and is trapped as Orcs search the village. When cornered, he uses the broken sword and discovers that it can rebuild itself by drawing his blood." },
          { text: "Arondir reaches Theo at sunrise and rescues him, bringing him back toward Ostirith. The rescue begins a more complicated relationship between them: Theo distrusts the Elf who is close to his mother, yet Arondir repeatedly puts himself at risk for him." },
          { text: "Back among the refugees, Waldreg recognizes the sword as a relic tied to Sauron. Theo's private fascination with the weapon is now connected to a much older darkness." }
        ],
        place: ["tirharad", "ostirith"],
        people: ["theo", "arondir", "bronwyn", "waldreg"],
        why: "Arondir's bond with Bronwyn increasingly draws him into Theo's life as well. At the same time, Theo is being pulled toward a very different inheritance through the sword.",
        blurb: "Arondir brings Theo home"
      }, null, null, null, null
    ]
  };

  /* S1E5: the emotional decision to resist belongs apart from the sword and the
     people who choose surrender. */
  const s1e5South = SEASONS.s1.storylines.southlands.episodes[4];
  s1e5South.summary = "Bronwyn and Arondir choose hope when surrender would be easier.";
  s1e5South.beats = [
    { text: "The refugees at Ostirith are frightened, hungry, and divided. Bronwyn, who first pushed everyone to flee, begins to doubt whether resistance is only leading them toward a worse death." },
    { text: "Arondir refuses to let despair become the only argument. His faith in the possibility of resistance helps steady Bronwyn when she is close to giving up." },
    { text: "Their relationship matters politically as well as personally: an Elf and a Southlander choosing to stand together offers a small answer to the inherited hostility that has defined the region." }
  ];
  s1e5South.place = ["ostirith"];
  s1e5South.people = ["bronwyn", "arondir"];
  s1e5South.why = "Bronwyn's decision to keep fighting is not made in isolation. Arondir's trust in her—and the trust between them—helps turn private love into a shared commitment to the people around them.";
  s1e5South.blurb = "They choose to stand together";

  SEASONS.s1.storylines["southlands-surrender"] = {
    title: "The sword divides the Southlanders",
    cast: ["theo", "waldreg", "adar"],
    location: "Ostirith · Adar's camp",
    art: "scene-southlands",
    color: "oklch(66% 0.12 45)",
    episodes: [null, null, null, null,
      {
        summary: "Fear, old loyalties, and the broken sword pull the community apart.",
        beats: [
          { text: "Waldreg persuades many of the refugees that survival means surrendering to the power gathering in the Southlands. Their choice is not presented as simple cowardice; fear and inherited loyalty make submission feel safer than resistance." },
          { text: "When Waldreg discovers that Adar is not Sauron, he submits anyway and is ordered to prove his loyalty through violence." },
          { text: "Theo finally shows the broken sword to Arondir. The marks around the old watchtower connect the weapon to the dark history of the Southlands, making Theo's secret central to the danger around them without yet revealing what the sword is actually for." }
        ],
        place: ["ostirith", "mordor-region"],
        people: ["theo", "waldreg", "adar", "arondir"],
        why: "The Southlanders are divided by two competing responses to fear: resist an uncertain future, or submit to a power that promises survival. Theo's sword is clearly part of the threat, but its true purpose remains hidden.",
        blurb: "The community fractures"
      }, null, null, null
    ]
  };
})();