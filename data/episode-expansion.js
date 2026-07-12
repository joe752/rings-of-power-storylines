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
})();