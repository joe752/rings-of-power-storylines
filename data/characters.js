/* ---------------- CHARACTERS ---------------- */
window.CHARACTERS = {
  finrod: { name: "Finrod", race: "elf", role: "Galadriel's brother (deceased)", storylines: ["s1:galadriel"],
    summary: [{ revealAt: 1, text: "Galadriel's brother and a great Elven king of the First Age. The series says Sauron killed him during his hunt for the Dark Lord, prompting Galadriel to take up that hunt." }], lore: "lore-finrod",
    relations: [{ id: "galadriel", label: "brother whose hunt she continues", revealAt: 1 }] },
  galadriel: { name: "Galadriel", race: "elf", role: "Commander of the Northern Armies", storylines: ["s1:galadriel", "s2:galadriel"], lore: "lore-galadriel-long-view",
    summary: [
      { revealAt: 1, text: "A relentless Elven commander who refuses to believe Sauron is truly gone, even after the rest of her people move on." },
      { revealAt: 5, text: "Leads a Númenórean expedition back to the Southlands, having convinced herself Halbrand is the region's rightful king." },
      { revealAt: 8, text: "Discovers that Halbrand has been Sauron in disguise all along — the very enemy she swore to hunt." },
      { revealAt: 16, text: "Survives the fall of Eregion and keeps Nenya from Sauron, although he takes the Nine Rings she was carrying." }
    ],
    relations: [
      { id: "finrod", label: "brother whose hunt she continues", revealAt: 1 },
      { id: "elrond", label: "old friend and confidant", revealAt: 1 },
      { id: "sauron", label: "uneasy ally she meets at sea", revealAt: 2 },
      { id: "gil-galad", label: "High King she defies", revealAt: 1 },
      { id: "celebrimbor", label: "master smith whose Ring project she helps redirect", revealAt: 8 }
    ] },
  sauron: { name: "Sauron", nameRevealAt: 8, race: "maia", role: "The Dark Lord", storylines: ["s1:galadriel", "s2:galadriel", "s2:southlands"],
    identities: [
      { name: "Halbrand", revealAt: 2, until: 7, role: "A castaway claiming to be a Southlands refugee" },
      { name: "Sauron", revealAt: 8, role: "The Dark Lord, revealed behind the Halbrand deception" },
      { name: "Annatar", displayName: "Sauron · Annatar", revealAt: 10, role: "The Dark Lord in his fair guise as the Lord of Gifts", aliases: ["Lord of Gifts"] }
    ],
    summary: [
      { revealAt: 2, text: "As Halbrand, a guarded survivor Galadriel finds adrift at sea, he claims Orcs drove him from the Southlands." },
      { revealAt: 5, text: "Accepted by Galadriel as the Southlands' long-lost king, Halbrand sails with her expedition back to Middle-earth." },
      { revealAt: 8, text: "Halbrand is revealed to be Sauron himself, having used Galadriel's assumptions and Celebrimbor's ambition to return to the center of power." },
      { revealAt: 10, text: "In Eregion, Sauron takes the fair form of Annatar, the Lord of Gifts, and gains the trust Celebrimbor denied to Halbrand." },
      { revealAt: 16, text: "After breaking Celebrimbor and turning Adar's Orcs against him, Sauron takes possession of the Nine Rings intended for Men." }
    ],
    relations: [
      { id: "galadriel", label: "uneasy ally whose assumptions he exploits", revealAt: 2 },
      { id: "celebrimbor", label: "master smith he deceives first as Halbrand, then Annatar", revealAt: 8 },
      { id: "adar", label: "enemy whose hatred he weaponizes", revealAt: 9 }
    ] },
  elrond: { name: "Elrond", race: "elf", role: "Emissary of the High King", storylines: ["s1:elrond", "s2:elrond", "s2:galadriel"],
    summary: [
      { revealAt: 1, text: "A diplomatic, idealistic Elf assigned to help Celebrimbor's ambitious new forge get built." },
      { revealAt: 4, text: "Learns of mithril, a secret Dwarven discovery, and is torn between his oath to Durin and his duty to his own people." },
      { revealAt: 8, text: "Helps bring the plan for the Three Rings to completion, then discovers the Southlands royal line ended generations ago and realizes Halbrand's identity was false." },
      { revealAt: 9, text: "Distrusts the Three because Sauron's deception led to their creation, even after the Rings restore the fading Elves." }
    ],
    relations: [{ id: "durin-iv", label: "oldest friend, strained by 20 lost years", revealAt: 2 }, { id: "celebrimbor", label: "smith whose great project he helps build", revealAt: 1 }, { id: "gil-galad", label: "High King he answers to", revealAt: 1 }] },
  "durin-iv": { name: "Prince Durin IV", aliases: ["Durin IV"], race: "dwarf", role: "Heir to the throne of Khazad-dûm", storylines: ["s1:elrond", "s2:elrond"],
    identities: [
      { name: "Prince Durin IV", revealAt: 2, role: "Heir to the throne of Khazad-dûm", aliases: ["Durin IV"] },
      { name: "Durin IV", displayName: "Durin IV", revealAt: 16, role: "Named 'King Durin' by his dying father, though the succession remains disputed" }
    ],
    summary: [
      { revealAt: 2, text: "Elrond's estranged friend, now a father and prince of Khazad-dûm." },
      { revealAt: 4, text: "He is helping guard the secret of a remarkable discovery deep beneath the mountain." },
      { revealAt: 16, text: "His father recognizes him as King Durin before sacrificing himself against the Balrog, but a rival claim prevents a simple succession." }
    ],
    relations: [{ id: "elrond", label: "reconciled old friend", revealAt: 2 }, { id: "disa", label: "wife", revealAt: 2 }, { id: "durin-iii", label: "father and king", revealAt: 2 }] },
  disa: { name: "Disa", race: "dwarf", role: "Durin IV's wife", storylines: ["s1:elrond", "s2:elrond"],
    summary: [{ revealAt: 2, text: "Durin IV's wife, quick to mend the rift between her husband and Elrond." }, { revealAt: 13, text: "Recognizes that Durin III's Ring is changing him and joins her husband in resisting the king's increasingly dangerous mining." }],
    relations: [{ id: "durin-iv", label: "husband", revealAt: 2 }, { id: "durin-iii", label: "father-in-law", revealAt: 2 }] },
  celebrimbor: { name: "Celebrimbor", race: "elf", role: "Master smith of Eregion", storylines: ["s1:elrond", "s2:elrond", "s2:galadriel"],
    summary: [
      { revealAt: 1, text: "A celebrated Elven smith with an ambitious plan for a forge unlike any before it." },
      { revealAt: 8, text: "With Halbrand's crucial advice still influencing the work, forges the first Rings of Power without knowing Halbrand is Sauron." },
      { revealAt: 16, text: "Dies resisting Sauron after recognizing how completely Annatar manipulated both him and the Ring-making project." }
    ],
    relations: [{ id: "elrond", label: "partner in the great forge", revealAt: 1 }, { id: "sauron", label: "the 'Lord Annatar' who deceives him", revealAt: 10 }, { id: "narvi", label: "Dwarven fellow craftsman", revealAt: 13 }] },
  "gil-galad": { name: "Gil-galad", race: "elf", role: "High King of the Elves", storylines: ["s1:galadriel", "s1:elrond", "s2:galadriel"],
    summary: [{ revealAt: 1, text: "High King of the Elves in Lindon, weighing the safety of his people against the risk of provoking another war." }, { revealAt: 5, text: "Fears the fading of the Elves and looks to mithril as a possible answer." }, { revealAt: 9, text: "Becomes the bearer of Vilya when the Three Rings are finally used to halt the Elves' fading." }] },
  miriel: { name: "Míriel", race: "men", role: "Queen Regent of Númenor", storylines: ["s1:galadriel", "s1:isildur", "s2:numenor"],
    identities: [
      { name: "Míriel", revealAt: 3, role: "Queen Regent of Númenor" },
      { name: "Míriel", revealAt: 11, role: "Deposed Queen Regent, still recognized by the Faithful" }
    ],
    summary: [
      { revealAt: 3, text: "Queen Regent of Númenor, wary of Elves and of anything that might repeat her people's ancient mistakes." },
      { revealAt: 4, text: "Sees Númenor's drowning in the palantír, and ultimately chooses to aid the Southlands despite the vision." },
      { revealAt: 14, text: "Survives the Trial by Abyss after taking Elendil's place, and is acclaimed by the Faithful as Queen of the Sea." },
      { revealAt: 16, text: "Remains in Númenor when Pharazôn brands the Faithful traitors, but sends Elendil west with Narsil." }
    ],
    relations: [{ id: "elendil", label: "her most trusted captain and Faithful ally", revealAt: 3 }, { id: "galadriel", label: "reluctant guest, then ally", revealAt: 3 }, { id: "pharazon", label: "political rival who takes the throne", revealAt: 11 }] },
  elendil: { name: "Elendil", race: "men", role: "Sea captain of Númenor", storylines: ["s1:galadriel", "s1:isildur", "s2:numenor"],
    identities: [
      { name: "Elendil", revealAt: 3, role: "Sea captain of Númenor" },
      { name: "Elendil", revealAt: 13, role: "Faithful supporter of Míriel, estranged from Pharazôn's regime" },
      { name: "Elendil", revealAt: 16, role: "Fugitive leader among the Faithful, carrying Narsil" }
    ],
    summary: [{ revealAt: 3, text: "A loyal Númenórean captain who rescues Galadriel and Halbrand, and whose own family is quietly fracturing." }, { revealAt: 13, text: "Refuses to recognize Pharazôn's rule and loses Valandil as the struggle over Númenor turns violent." }, { revealAt: 16, text: "Escapes Pharazôn's purge after Míriel gives him Narsil and sends him toward the Faithful in the west." }],
    relations: [{ id: "isildur", label: "son", revealAt: 3 }, { id: "earien", label: "daughter", revealAt: 3 }, { id: "miriel", label: "queen he serves", revealAt: 3 }] },
  isildur: { name: "Isildur", race: "men", role: "Sea Guard cadet", storylines: ["s1:isildur", "s2:southlands"],
    identities: [
      { name: "Isildur", revealAt: 3, role: "Sea Guard cadet" },
      { name: "Isildur", revealAt: 4, role: "Dismissed Sea Guard cadet" },
      { name: "Isildur", revealAt: 5, role: "Volunteer with Númenor's Southlands expedition" },
      { name: "Isildur", revealAt: 11, role: "Númenórean survivor stranded in Middle-earth" }
    ],
    summary: [
      { revealAt: 3, text: "Elendil's restless son, close to finishing his naval training but pulled toward something he can't explain." },
      { revealAt: 4, text: "Deliberately sabotages his own Sea Guard training to get dismissed, unintentionally causing Valandil and Ontamo to be dismissed with him." },
      { revealAt: 5, text: "Stows away on the Southlands expedition and earns a place aboard the fleet after saving Kemen from sabotage he himself attempted." },
      { revealAt: 11, text: "Presumed lost in the Southlands, but survives and begins trying to find a way home." },
      { revealAt: 16, text: "Finally sails for Númenor, unaware that Pharazôn has seized power and Elendil has been branded a traitor." }
    ],
    relations: [{ id: "elendil", label: "father", revealAt: 3 }, { id: "earien", label: "sister", revealAt: 3 }, { id: "estrid", label: "travels with and grows close to", revealAt: 11 }] },
  earien: { name: "Eärien", race: "men", role: "Guild apprentice and architect", storylines: ["s1:isildur", "s2:numenor"],
    summary: [{ revealAt: 3, text: "Elendil's daughter, building her own career apart from her father and brother." }, { revealAt: 11, text: "Publicly exposes Míriel's use of the palantír, helping Pharazôn's faction seize the political moment at the coronation." }, { revealAt: 16, text: "Turns against the purge she helped enable and warns Elendil before Pharazôn's men can arrest him." }],
    relations: [{ id: "elendil", label: "father", revealAt: 3 }, { id: "isildur", label: "brother", revealAt: 3 }] },
  kemen: { name: "Kemen", race: "men", role: "Chancellor's son", storylines: ["s1:isildur", "s2:numenor", "s2:southlands"],
    identities: [
      { name: "Kemen", revealAt: 5, role: "Son of Chancellor Pharazôn" },
      { name: "Kemen", revealAt: 11, role: "Son and enforcer of King Pharazôn" },
      { name: "Kemen", revealAt: 16, role: "Commander of Númenor's new military outpost at Pelargir" }
    ],
    summary: [{ revealAt: 5, text: "Son of Chancellor Pharazôn, and no friend to Númenor's continued alliance with the Elves." }, { revealAt: 13, text: "Kills Valandil after losing a fight at a Faithful shrine, turning political intimidation into murder." }, { revealAt: 16, text: "Carries Pharazôn's authority to Pelargir, where he claims the settlement as a military outpost and blocks Estrid from sailing with Isildur." }],
    relations: [{ id: "pharazon", label: "father", revealAt: 5 }] },
  pharazon: { name: "Pharazôn", race: "men", role: "Chancellor of Númenor", storylines: ["s1:galadriel", "s1:isildur", "s2:numenor"],
    identities: [
      { name: "Pharazôn", revealAt: 3, role: "Chancellor of Númenor" },
      { name: "Ar-Pharazôn", revealAt: 11, role: "King of Númenor", aliases: ["Pharazôn"] }
    ],
    summary: [{ revealAt: 3, text: "Númenor's influential chancellor, skilled at reading the island's fears and ambitions." }, { revealAt: 11, text: "His supporters turn the Great Eagle's appearance at Míriel's disrupted coronation into an acclamation of Pharazôn as king." }, { revealAt: 16, text: "Uses fear of Sauron to brand the Faithful traitors and extends his new regime's authority into Pelargir." }] },
  arondir: { name: "Arondir", race: "elf", role: "Silvan Elf soldier", storylines: ["s1:southlands", "s2:southlands"],
    summary: [{ revealAt: 1, text: "An Elven soldier stationed among the Southlanders, uneasy about abandoning the watch — and Bronwyn." }, { revealAt: 11, text: "Mourns Bronwyn after her death from the poisoned Orc wound she suffered in Season 1 and continues protecting Theo and the displaced Southlanders." }],
    relations: [{ id: "bronwyn", label: "loves", revealAt: 1 }, { id: "adar", label: "captor, then enemy", revealAt: 3 }, { id: "theo", label: "tries to protect", revealAt: 4 }] },
  bronwyn: { name: "Bronwyn", race: "men", role: "Healer of Tirharad", storylines: ["s1:southlands", "s2:southlands"],
    summary: [{ revealAt: 1, text: "A healer and single mother trying to protect her village from a danger no one else will believe." }, { revealAt: 11, text: "Dies after the poison from the Orc arrow wound she suffered in Season 1 eventually overwhelms her; Pelargir mourns her with a funeral pyre." }],
    relations: [{ id: "theo", label: "son", revealAt: 1 }, { id: "arondir", label: "loves", revealAt: 1 }] },
  theo: { name: "Theo", race: "men", role: "Bronwyn's son", storylines: ["s1:southlands", "s2:southlands"],
    summary: [{ revealAt: 1, text: "Bronwyn's son, drawn to a broken sword he doesn't yet understand." }, { revealAt: 11, text: "Grieves Bronwyn in Pelargir and initially pushes Arondir away after her death." }, { revealAt: 16, text: "Chooses to remain in Middle-earth when Isildur finally sails back to Númenor." }],
    relations: [{ id: "bronwyn", label: "mother", revealAt: 1 }, { id: "arondir", label: "complicated surrogate family bond", revealAt: 11 }] },
  adar: { name: "Adar", race: "elf", role: "Commander of the Orcs", storylines: ["s1:southlands", "s2:southlands", "s2:galadriel"],
    summary: [{ revealAt: 3, text: "A mysterious scarred figure whom the Orcs call Adar — 'father.'" }, { revealAt: 4, text: "A scarred Elf who commands the Orcs as a father-figure and claims the Southlands for his children." }, { revealAt: 6, text: "Seeks a homeland for the Orcs free of Sauron's domination." }, { revealAt: 16, text: "After Nenya briefly heals his scarred form, he is betrayed and killed by the Orcs he called his children." }],
    relations: [{ id: "arondir", label: "prisoner turned enemy", revealAt: 4 }, { id: "sauron", label: "enemy he once helped overthrow", revealAt: 9 }, { id: "glug", label: "lieutenant who ultimately betrays him", revealAt: 16 }] },
  waldreg: { name: "Waldreg", race: "men", role: "Tavern keeper of Tirharad", storylines: ["s1:southlands", "s2:southlands"],
    summary: [{ revealAt: 1, text: "The tavern keeper in Tirharad, whose barn contains the broken sword Theo secretly takes." }, { revealAt: 4, text: "Recognizes the broken sword and reveals his loyalty to Sauron's old order." }, { revealAt: 9, text: "Still serves Adar in Mordor when Sauron returns there disguised as Halbrand." }] },
  nori: { name: "Nori Brandyfoot", aliases: ["Nori"], race: "harfoot", role: "Curious Harfoot", storylines: ["s1:harfoots", "s2:stranger"],
    summary: [{ revealAt: 1, text: "An adventurous young Harfoot who can't resist the mystery of a man who fell from the sky." }, { revealAt: 16, text: "Parts from Gandalf in Rhûn and chooses to travel with the displaced Stoors and Poppy as they search for a new home." }],
    relations: [{ id: "stranger", label: "finds and protects", revealAt: 1 }, { id: "poppy", label: "best friend", revealAt: 1 }] },
  poppy: { name: "Poppy Proudfellow", aliases: ["Poppy"], race: "harfoot", role: "Nori's best friend", storylines: ["s1:harfoots", "s2:stranger"],
    summary: [{ revealAt: 2, text: "Nori's more cautious best friend, who gets pulled into her secret anyway." }, { revealAt: 9, text: "Catches up with Nori and the Stranger on the road to Rhûn, bringing Sadoc's book and the old walking song that helps guide them." }, { revealAt: 16, text: "Leaves the ruined Stoor settlement with Nori, Merimac and the migrating Stoors." }] },
  sadoc: { name: "Sadoc Burrows", aliases: ["Sadoc"], race: "harfoot", role: "Harfoot elder", storylines: ["s1:harfoots"],
    summary: [{ revealAt: 1, text: "The Harfoots' keeper of stories, first to notice the stars are behaving strangely." }, { revealAt: 8, text: "Mortally wounded while helping rescue the Stranger, he spends his final moments watching the sunrise with his friends." }] },
  largo: { name: "Largo Brandyfoot", aliases: ["Largo"], race: "harfoot", role: "Nori's father", storylines: ["s1:harfoots"],
    summary: [{ revealAt: 3, text: "Nori's father, whose injury threatens to leave the family behind on the migration." }] },
  stranger: { name: "The Stranger", race: "istari", role: "A man who fell from the sky", storylines: ["s1:harfoots", "s2:stranger"],
    identities: [
      { name: "The Stranger", revealAt: 1, role: "A man who fell from the sky" },
      { name: "Gandalf", revealAt: 16, role: "An Istar discovering his purpose in Middle-earth", aliases: ["Grand-Elf", "Grandelf"] }
    ],
    summary: [
      { revealAt: 1, text: "A towering, amnesiac figure found alive inside a meteor crater, unable to speak the Harfoots' language." },
      { revealAt: 5, text: "Shows glimpses of dangerous, uncontrolled magic while trying to protect the people who took him in." },
      { revealAt: 8, text: "Learns he is one of the Istari — a wizard sent to Middle-earth for a purpose he is still uncovering." },
      { revealAt: 16, text: "In Rhûn, he chooses his friends over the pursuit of power, finds the staff he had been seeking and accepts the name Gandalf." }
    ],
    relations: [{ id: "nori", label: "friend and moral guide", revealAt: 1 }, { id: "bombadil", label: "ancient teacher who challenges him to choose his own path", revealAt: 12 }, { id: "dark-wizard", label: "fellow wizard who tries to recruit him", revealAt: 16 }] },
  bombadil: { name: "Tom Bombadil", aliases: ["Bombadil"], role: "The Eldest; an intentionally mysterious being", storylines: ["s2:stranger"],
    summary: [{ revealAt: 12, text: "An ancient, cheerful figure in Rhûn who calls himself the Eldest and begins teaching the Stranger. Neither the series nor Tolkien identifies Tom as an Istar; his nature is deliberately left unexplained." }], lore: "lore-bombadil",
    relations: [{ id: "stranger", label: "teacher", revealAt: 12 }] },
  cirdan: { name: "Círdan", race: "elf", role: "The Shipwright of the Grey Havens", storylines: ["s2:galadriel", "s2:elrond"],
    summary: [{ revealAt: 9, text: "One of the oldest and wisest Elves in Middle-earth. Elrond entrusts the Three Rings to him for destruction, but Círdan comes to believe the rings should be used." }],
    relations: [{ id: "elrond", label: "counsels", revealAt: 9 }, { id: "gil-galad", label: "fellow bearer of an Elven Ring", revealAt: 9 }] },
  "durin-iii": { name: "King Durin III", aliases: ["Durin III"], race: "dwarf", role: "King of Khazad-dûm", storylines: ["s1:elrond", "s2:elrond"],
    summary: [{ revealAt: 2, text: "Durin IV's cautious father, determined to protect Khazad-dûm from risks his son is more willing to take." }, { revealAt: 13, text: "After accepting one of the Seven Rings, his restored ability to read the mountain becomes entangled with a dangerous hunger to dig ever deeper." }, { revealAt: 16, text: "Removes the Ring, recognizes his son as 'King Durin' and sacrifices himself fighting the Balrog he awakened beneath the mountain." }],
    relations: [{ id: "durin-iv", label: "son and heir", revealAt: 2 }, { id: "disa", label: "daughter-in-law", revealAt: 2 }] },
  narvi: { name: "Narvi", race: "dwarf", role: "Master craftsman of Khazad-dûm", storylines: ["s2:elrond"],
    summary: [{ revealAt: 11, text: "A trusted Dwarven craftsman serving Khazad-dûm's royal house." }, { revealAt: 13, text: "Works with Celebrimbor to create the great western Doors of Durin." }, { revealAt: 15, text: "Sides with Durin IV and Disa when Durin III's ring-driven obsession turns against his own people." }],
    relations: [{ id: "celebrimbor", label: "fellow craftsman", revealAt: 13 }, { id: "durin-iv", label: "supports against the king's dangerous mining", revealAt: 15 }] },
  mirdania: { name: "Mirdania", race: "elf", role: "Smith of Eregion", storylines: ["s2:galadriel", "s2:elrond"],
    summary: [{ revealAt: 9, text: "One of Celebrimbor's smiths working in the forge at Eregion." }, { revealAt: 13, text: "Becomes increasingly drawn into Annatar's manipulation of the forge and of Celebrimbor himself." }, { revealAt: 15, text: "Killed after Sauron turns Celebrimbor's attempt to expose him against the smiths of Eregion." }],
    relations: [{ id: "celebrimbor", label: "master smith she serves", revealAt: 9 }, { id: "sauron", label: "deceived by as Annatar", revealAt: 13 }] },
  valandil: { name: "Valandil", race: "men", role: "Sea Guard and Isildur's friend", storylines: ["s1:isildur", "s2:numenor"],
    summary: [{ revealAt: 3, text: "Isildur's loyal friend and fellow Sea Guard cadet." }, { revealAt: 13, text: "Remains loyal to Elendil and Míriel as Pharazôn's faction takes control, and is killed by Kemen after sparing him in a fight." }],
    relations: [{ id: "isildur", label: "friend", revealAt: 3 }, { id: "elendil", label: "stands beside", revealAt: 13 }] },
  "dark-wizard": { name: "The Dark Wizard", role: "A powerful sorcerer ruling in Rhûn", storylines: ["s2:stranger"],
    summary: [{ revealAt: 10, text: "A powerful ruler in Rhûn who sends masked riders to capture the Stranger." }, { revealAt: 16, text: "Reveals himself as another of the five Wizards and tries to recruit Gandalf against Sauron, then attacks the Stoors when Gandalf refuses him." }],
    relations: [{ id: "stranger", label: "hunts", revealAt: 10 }, { id: "stranger", label: "tries to recruit", revealAt: 16 }] },
  gundabel: { name: "Gundabale Earthauler", aliases: ["Gundabale", "Gundabel", "The Gund"], race: "stoor", role: "Leader among the Stoors", storylines: ["s2:stranger"],
    summary: [{ revealAt: 12, text: "Leader of the Stoors living in a hidden canyon in Rhûn, whose people preserve old stories about a promised green homeland in the west." }],
    relations: [{ id: "nori", label: "recognizes as kin to the Stoors through shared history", revealAt: 12 }] },
  glug: { name: "Glûg", race: "orc", role: "Adar's lieutenant", storylines: ["s2:southlands"],
    summary: [{ revealAt: 9, text: "An Orc lieutenant serving Adar as the war against Sauron begins." }, { revealAt: 13, text: "Voices growing fear that Adar is sacrificing too many of their people." }, { revealAt: 16, text: "Betrays and kills Adar after Sauron exploits his disillusionment, then is himself killed by Sauron after Galadriel's escape." }],
    relations: [{ id: "adar", label: "serves as lieutenant", revealAt: 9 }, { id: "adar", label: "betrays", revealAt: 16 }, { id: "sauron", label: "briefly follows before Sauron kills him", revealAt: 16 }] },
  estrid: { name: "Estrid", race: "men", role: "Southlands survivor", storylines: ["s2:southlands"],
    summary: [{ revealAt: 11, text: "A Southlands survivor Isildur meets on the road to Pelargir. She secretly bears Adar's mark and burns the skin around it to hide it." }, { revealAt: 12, text: "Arondir exposes her as one of the Wild Men who submitted to Adar, but her actions during the search for Theo complicate any simple judgment of her. The rescue also reunites her with her betrothed, Hagen." }, { revealAt: 16, text: "She and Isildur admit their feelings for one another, but Kemen refuses to let her sail to Númenor with him." }],
    relations: [{ id: "isildur", label: "travels with and grows close to", revealAt: 11 }] }
};