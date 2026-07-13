/* ---------------------------------------------------------------
   Rings of Power Storyline Explorer — data layer
   Plain global data, no build step (kept GitHub-Pages friendly).
   Timeline scale used for spoiler-gating everywhere:
     S1E1..S1E8 = 1..8   S2E1..S2E8 = 9..16
--------------------------------------------------------------- */

window.EP_NAMES = {
  s1: ["A Shadow of the Past", "Adrift", "Adar", "The Great Wave", "Partings", "Udûn", "The Eye", "Alloyed"],
  s2: ["Elven Kings Under the Sky", "Where the Stars are Strange", "The Eagle and the Sceptre", "Eldest", "Halls of Stone", "Where Is He?", "Doomed to Die", "Shadow and Flame"]
};

/* ---------------- RACES ---------------- */
window.RACES = {
  elf: { name: "Elves", summary: [{ revealAt: 1, text: "Immortal Firstborn of Middle-earth, weary after ages of war with Morgoth and now with Sauron; many long for the undying lands of Valinor." }] },
  men: { name: "Men", summary: [{ revealAt: 1, text: "Mortal and scattered — from the humble Southlanders to the proud, seafaring descendants of Númenor." }] },
  dwarf: { name: "Dwarves", summary: [{ revealAt: 1, text: "A private, hardy people carved into the mountain halls of Khazad-dûm, guarding their own discoveries jealously." }] },
  harfoot: { name: "Harfoots", summary: [{ revealAt: 1, text: "A small nomadic folk who survive by staying hidden from the wider world, migrating with the seasons. They are part of the ancient Hobbit-kindreds from which the later peoples of the Shire and Bree descend." }], lore: "lore-harfoot-ancestry" },
  orc: { name: "Orcs", summary: [{ revealAt: 2, text: "Corrupted, sunlight-sensitive soldiers bred for war, organized in the Southlands toward an unknown purpose." }] },
  maia: { name: "Maiar", summary: [{ revealAt: 8, text: "Ancient spiritual beings older than the peoples of Middle-earth; Sauron is one of the Maiar, though his nature is hidden behind fairer forms." }] },
  istari: { name: "Istari", summary: [{ revealAt: 8, text: "Wizards sent in human-seeming shape to contest Sauron's growing power. By the end of Season 1, the Stranger is identified as one of them." }] }
};

/* ---------------- PLACES ---------------- */
window.PLACES = {
  lindon: { name: "Lindon", region: "Eriador", summary: [{ revealAt: 1, text: "Seat of the High King of the Elves, and the last grey haven before the ships sail west." }] },
  forodwaith: { name: "Forodwaith", region: "The far north", summary: [{ revealAt: 1, text: "A frozen wasteland where Sauron's mark is first rediscovered, long after the fall of Morgoth." }] },
  "sundering-sea": { name: "The Sundering Sea", region: "Between Middle-earth and Valinor", summary: [{ revealAt: 1, text: "The ocean that divides mortal lands from the undying West — and nearly claims Galadriel's life." }] },
  numenor: { name: "Númenor", region: "The island kingdom", summary: [{ revealAt: 1, text: "A proud island realm of Men gifted to the faithful after the First Age, increasingly divided over its friendship with Elves." }] },
  eregion: { name: "Eregion", region: "Eriador", summary: [{ revealAt: 1, text: "An Elven realm of smiths and artisans, home to Celebrimbor and the great forge he hopes to build." }, { revealAt: 8, text: "The realm where the first Rings of Power are forged." }] },
  "khazad-dum": { name: "Khazad-dûm", region: "The Misty Mountains", summary: [{ revealAt: 2, text: "The greatest Dwarven city ever delved, a thriving mountain realm ruled by Durin III." }, { revealAt: 4, text: "Its people are guarding a remarkable new ore discovered deep beneath the mountain." }] },
  rhovanion: { name: "Rhovanion", region: "Wilderland", summary: [{ revealAt: 1, text: "The wide wilderness the Harfoots migrate through, season after season, staying always out of sight." }] },
  tirharad: { name: "Tirharad", region: "The Southlands", summary: [{ revealAt: 1, text: "A Southlands village of human descendants of those who once served Morgoth, watched over by Elven soldiers." }] },
  ostirith: { name: "Ostirith", region: "The Southlands", summary: [{ revealAt: 2, text: "An abandoned Elven watchtower that becomes a refuge for the Southlanders fleeing the Orcs." }] },
  "mordor-region": { name: "The Southlands", aliases: ["Southlands"], region: "South of the Anduin", summary: [{ revealAt: 3, text: "The lands Adar seeks to claim and remake as a home for his Orcs." }], lore: "lore-mordor-name" },
  pelargir: { name: "Pelargir", region: "The Southlands coast", summary: [{ revealAt: 11, text: "A Númenórean settlement on the coast, and a gathering point for Men displaced by the war in the Southlands." }] },
  rhun: { name: "Rhûn", region: "The far east", summary: [{ revealAt: 11, text: "Distant eastern lands the Stranger is drawn toward, following a pull he doesn't yet understand." }] },
  mithlond: { name: "Grey Havens", aliases: ["Mithlond"], region: "Lindon", summary: [{ revealAt: 9, text: "The harbour of Círdan the Shipwright, where Elrond brings the Three Rings when he wants them destroyed rather than risk Sauron's influence." }] },
  "barrow-downs": { name: "Barrow-downs", region: "Eriador", summary: [{ revealAt: 12, text: "Ancient burial mounds on the road to Eregion, haunted by barrow-wights that attack Elrond and Galadriel's company." }] },
  "stoor-canyon": { name: "Stoor Canyon", region: "Rhûn", summary: [{ revealAt: 12, text: "A hidden desert settlement of Stoors whose traditions connect them to the wandering Harfoots." }] },
};

/* ---------------- OBJECTS ---------------- */
window.OBJECTS = {
  "saurons-mark": { name: "Sauron's Mark", summary: [{ revealAt: 1, text: "A branded symbol found in the frozen fortress where Galadriel's company searches for traces of Sauron." }, { revealAt: 3, text: "Galadriel discovers that the symbol is also a map of the Southlands." }] },
  "black-sword": { name: "The Broken Sword", aliases: ["broken sword"], summary: [
    { revealAt: 1, text: "A shattered blade bearing Sauron's mark, secretly kept by Waldreg and taken up by Theo." },
    { revealAt: 4, text: "The blade can reform when it draws blood, and both Waldreg and Adar's forces treat it as something important. Its true purpose is still unknown." },
    { revealAt: 6, text: "The sword is revealed to be a key for the mechanism that opens the dam and sends water through the Orc tunnels toward Orodruin, triggering the eruption that transforms the Southlands." }
  ] },
  palantir: { name: "The Palantír", aliases: ["palantír"], summary: [{ revealAt: 4, text: "A seeing-stone kept by Míriel's family, showing visions of Númenor's fate — including a wave that drowns the island." }], lore: "lore-palantir" },
  mithril: { name: "Mithril", summary: [{ revealAt: 4, text: "A newly discovered ore, lighter than silk and harder than iron, found deep beneath Khazad-dûm." }, { revealAt: 5, text: "Rumored to hold the light of a lost Silmaril, and perhaps the only thing that can slow the Elves' fading." }], lore: "lore-silmaril" },
  "three-rings": { name: "The Three Rings", summary: [{ revealAt: 8, text: "Rings of Power forged by Celebrimbor for the Elves, meant to preserve and heal without dominating." }], lore: "lore-rings-poem" },
  "stranger-staff": { name: "The Stranger's Staff", summary: [{ revealAt: 16, text: "A staff the Stranger takes from a branch in the Stoors' ruined canyon, as he finally accepts the name Gandalf." }] },
  "seven-rings": { name: "The Seven Rings", summary: [{ revealAt: 11, text: "Seven Rings of Power forged for Dwarf-lords under Annatar's guidance. They can amplify the bearers' abilities, but also their greed and obsession." }] },
  "nine-rings": { name: "The Nine Rings", summary: [{ revealAt: 15, text: "Nine Rings of Power forged for mortal Men. Celebrimbor completes them while Sauron traps him inside an illusion of a peaceful Eregion." }] },
  "durin-ring": { name: "Durin III's Ring", summary: [{ revealAt: 13, text: "One of the Seven Rings, given to King Durin III. It helps him read the mountain and restore Khazad-dûm, while steadily magnifying his greed." }] },
  "doors-of-durin": { name: "The Doors of Durin", summary: [{ revealAt: 13, text: "A new western entrance to Khazad-dûm created through the friendship and craft of Celebrimbor and Narvi." }] },
  nenya: { name: "Nenya", summary: [{ revealAt: 9, text: "Galadriel's Ring of Power, one of the Three Elven Rings." }] },
  narya: { name: "Narya", summary: [{ revealAt: 9, text: "The red Ring of Power worn by Círdan, one of the Three Elven Rings." }] },
  vilya: { name: "Vilya", summary: [{ revealAt: 9, text: "The blue Ring of Power worn by Gil-galad, one of the Three Elven Rings." }] },
};
