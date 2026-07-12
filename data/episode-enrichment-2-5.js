/* Episode-first enrichment for Season 1 Episodes 2-5.
   Grounded in what the episodes show; interpretive language is kept close to character behavior on screen. */
(() => {
  const g = SEASONS.s1.storylines.galadriel.episodes;
  const s = SEASONS.s1.storylines.southlands.episodes;
  const e = SEASONS.s1.storylines.elrond.episodes;
  const h = SEASONS.s1.storylines.harfoots.episodes;
  const i = SEASONS.s1.storylines.isildur.episodes;

  /* S1E2 — Adrift */
  g[1].summary = "Galadriel meets another survivor who refuses to explain himself.";
  g[1].beats = [
    { text: "Having leapt from the ship to Valinor, Galadriel is left attempting an impossible swim back toward Middle-earth. Her choice was absolute; the physical consequences of it are only now beginning to catch up with her." },
    { text: "She reaches a raft of human survivors, but their fear of an Elf makes her an outsider even among people facing the same danger. When a sea creature destroys the raft, only Galadriel and Halbrand remain together." },
    { text: "Halbrand says Orcs drove him from the Southlands, but he keeps his past guarded and resists Galadriel's attempts to turn his suffering into evidence for her hunt. Their alliance begins from necessity, suspicion, and the fact that each is trying to survive something they will not fully explain." },
    { text: "During the storm Halbrand saves Galadriel from drowning. By morning, the two castaways have become linked before either has chosen to trust the other." }
  ];
  g[1].why = "Galadriel's hunt finally gives her a human connection to the Southlands, but Halbrand is introduced as a person rather than a clue. Their relationship begins with mutual rescue, incomplete truths, and each projecting meaning onto the other.";

  s[1].summary = "Bronwyn has to prove the danger with her own hands.";
  s[1].beats = [
    { text: "Arondir enters the tunnel beneath Hordern alone and is captured, cutting Bronwyn off from the one person who immediately believed the threat was real." },
    { text: "Back in Tirharad, Bronwyn warns the villagers but cannot persuade them with fear or intuition alone. The community has lived under generations of Elven suspicion and is not eager to accept another warning from outside authority." },
    { text: "An Orc erupts through the floor of Bronwyn's home. She and Theo kill it together after a brutal struggle, turning the threat from rumor into something undeniable." },
    { text: "Bronwyn carries the Orc's severed head into the tavern as proof. The same people who dismissed her now follow her toward Ostirith, while Theo secretly brings the broken sword with him.", lore: "lore-orc-origin" }
  ];
  s[1].why = "Bronwyn becomes a leader because she acts when nobody else will. The episode also binds Theo's private fascination with the sword to the larger danger now forcing the whole village from home.";

  e[1].summary = "Twenty years means almost nothing to Elrond—and almost everything to Durin.";
  e[1].beats = [
    { text: "Elrond brings Celebrimbor to Khazad-dûm expecting his old friendship with Prince Durin to open the way. Instead, the Dwarves bar him from entering and Durin receives him with anger rather than warmth." },
    { text: "Elrond invokes the stone-breaking contest of sigin-tarâg to force an audience. The contest is playful on the surface, but it exposes how badly he has misread the friendship: Elrond believes he is returning to something preserved, while Durin has lived twenty full years without him." },
    { text: "Durin tells Elrond that in those missing years he married Disa and became a father. Elrond's immortality has made him careless with mortal-scale time; what felt like a short absence to him contained the most important events of his friend's life." },
    { text: "Disa refuses to let pride end the friendship. Her warmth makes room for Elrond to apologize honestly, and Durin finally agrees to hear the proposal that brought him there." }
  ];
  e[1].why = "The friendship becomes more interesting because it is not timeless and effortless. Elrond must learn that loving someone is not the same as being present for them, a lesson that will matter whenever politics asks him to use friendship as a bridge between peoples.";

  h[1].summary = "Nori turns curiosity into responsibility.";
  h[1].beats = [
    { text: "Nori does not merely return to look at the Stranger. She brings Poppy into the secret, helps move him out of the crater, hides him, feeds him, and begins trying to understand someone who cannot explain who he is." },
    { text: "The choice puts Poppy at risk too. Nori's compassion is therefore not uncomplicated heroism: her instinct to help repeatedly pulls the people closest to her into dangers they did not choose." },
    { text: "Because the Stranger cannot speak their language, Nori has to communicate through patience, gesture, and attention rather than answers. She treats his confusion as vulnerability before she knows whether he is safe." },
    { text: "The Stranger uses fireflies to form an unfamiliar constellation. The moment is beautiful until the fireflies fall dead, leaving Nori with evidence that whatever power surrounds him may be dangerous as well as wondrous." }
  ];
  h[1].why = "Nori's defining choice is not simply discovering the Stranger; it is deciding that finding someone helpless creates a responsibility to them. The episode also makes clear that kindness does not erase risk or uncertainty.";

  /* S1E3 — Adar */
  g[2].summary = "Númenor gives Galadriel power, beauty—and a closed door.";
  g[2].beats = [
    { text: "Elendil rescues Galadriel and Halbrand and brings them to Númenor, an island kingdom of Men whose scale and prosperity immediately make clear that this is not a minor human settlement." },
    { text: "Númenor's hostility toward Elves is equally important. Galadriel arrives expecting the old friendship between Elves and Númenóreans to matter, but the island has developed its own politics, grievances, and fear of Elven influence." },
    { text: "Queen Regent Míriel refuses Galadriel a ship and orders Elendil to watch her. Elendil nevertheless helps her reach the Hall of Lore, quietly revealing that Númenor itself is divided over how much of its older relationship with the Elves should survive." },
    { text: "In the archives, Galadriel learns that Sauron's mark is a map of the Southlands. Halbrand's crest then leads her to conclude that he may be the heir to a lost royal line—an interpretation Halbrand himself does not ask her to make." }
  ];
  g[2].why = "Númenor expands the story from a hunt for evil into a political world with its own memory and divisions. Galadriel also begins turning Halbrand into the king she thinks the Southlands need, a pattern of certainty that will shape both of them.";

  s[2].summary = "Arondir sees that the Orcs are not merely raiding—they are remaking the land.";
  s[2].beats = [
    { text: "Arondir wakes in an Orc labor camp and finds the missing Elven watchmen among the captives. The trenches are covered from the sun, allowing the Orcs to move through the Southlands during daylight." },
    { text: "The work itself reveals a larger purpose. Trees, villages, and living land are obstacles to be removed as the trench network advances; the Orcs are changing the environment to suit themselves rather than simply passing through it." },
    { text: "When the prisoners resist cutting down a tree, Médhor is killed. Arondir ultimately fells it himself, choosing survival and the possibility of escape over a gesture that would get more prisoners killed." },
    { text: "The escape attempt fails. Revion and the other captives die, and Arondir is taken before the figure the Orcs call Adar—'father.'" }
  ];
  s[2].why = "The threat becomes organized and territorial. Arondir realizes that someone is directing the Orcs toward a goal large enough to require reshaping the Southlands itself.";

  h[2].summary = "Nori's secret collides with the Harfoots' rules for survival.";
  h[2].beats = [
    { text: "The Stranger wanders into the Harfoots' gathering and exposes Nori's secret. What she treated as a private act of compassion becomes a danger the whole community has to judge." },
    { text: "The Harfoots' fear is grounded in how they survive: they are small, mobile, and hidden. A stranger who fell from the sky could draw exactly the kind of attention their customs are designed to avoid." },
    { text: "Nori is spared exile, but her family is placed at the back of the migration caravan. Because Largo is injured, that punishment could effectively mean being left behind." },
    { text: "The Stranger follows the Brandyfoots and uses his strength to help pull their cart. Nori's choice has endangered her family, but the person she helped now becomes the reason they can keep moving." }
  ];
  h[2].why = "The episode refuses to make either Nori or the Harfoots simply wrong. Nori sees a person in need; the community sees a threat to everyone. Her compassion now carries consequences she has to live with rather than merely defend.";

  i[2].summary = "Isildur is close to the life everyone expects him to want—and cannot make himself want it.";
  i[2].beats = [
    { text: "Isildur trains in Númenor's Sea Guard beside Valandil and Ontamo. He is close to graduating into a respected path, but his attention keeps drifting toward a call he cannot explain and a desire to go west." },
    { text: "Elendil sees his son's uncertainty as another failure to commit. Their conflict is not simply rebellious son against strict father: Elendil wants Isildur to choose a life and stand inside it, while Isildur cannot yet explain what feels wrong about the one in front of him." },
    { text: "The family is already geographically divided. Anárion is in the west, Eärien is beginning her own career, and Isildur's restlessness threatens to pull yet another child away from Elendil." },
    { text: "At the same time, Elendil's decision to rescue Galadriel draws the family into a much larger conflict than any of them yet understand." }
  ];
  i[2].why = "Isildur enters the story as someone unable to settle into the future prepared for him. His uncertainty matters because it affects not only his own path but the people whose lives are tied to his choices.";

  /* S1E4 — The Great Wave */
  g[3].summary = "Míriel is not only refusing Galadriel—she is trying to outrun a prophecy.";
  g[3].beats = [
    { text: "Míriel dreams of a great wave destroying Númenor. The vision gives her political caution a personal source: she is trying to rule while believing a catastrophic future may already be moving toward her." },
    { text: "Galadriel presents evidence of the Southlands threat and demands intervention, but her certainty and impatience make diplomacy harder. Míriel imprisons her rather than allow an outsider to dictate Númenor's course." },
    { text: "When Galadriel reaches the tower of the ailing King Tar-Palantir, Míriel reveals the palantír and the vision of Númenor's drowning. She fears that renewed involvement with the Elves may be the choice that brings the vision to pass.", lore: "lore-palantir" },
    { text: "Míriel orders Galadriel sent away. Then petals fall from the White Tree, and she interprets the omen as a warning that refusing to act may be the more dangerous choice.", lore: "lore-white-tree" }
  ];
  g[3].why = "Míriel's reversal is not simple persuasion. She is trapped between competing interpretations of the future, and every choice can be imagined as the one that causes the disaster she is trying to prevent.";

  s[3].summary = "Adar gives the Southlanders a choice while Theo learns the sword wants something from him.";
  s[3].beats = [
    { text: "Adar appears as a scarred Elf commanding Orcs who address him as a father. He releases Arondir to carry an ultimatum: the Southlanders must surrender their claim to the land or be destroyed." },
    { text: "Theo returns to Tirharad for food despite the Orc occupation. When he is trapped, the broken sword grows into a fuller blade by drawing blood from his arm, making his connection to it physical as well as secret." },
    { text: "Arondir rescues Theo at sunrise, but the escape does not end the danger. The Orcs have seen the weapon and now know that someone among the refugees possesses it." },
    { text: "Waldreg tells Theo that the blade is connected to Sauron. For Theo, the revelation gives shape to something that has already felt powerful and forbidden, increasing the temptation to see the weapon as significance rather than danger." }
  ];
  s[3].why = "The conflict becomes a struggle over belonging and inheritance. Adar claims the land for his children, while Theo discovers that the object drawing him in is tied to the very darkness hanging over his people's history.";

  i[3].summary = "Isildur's uncertainty finally hurts the friends standing beside him.";
  i[3].beats = [
    { text: "Still unable to commit to the Sea Guard, Isildur deliberately fails a training exercise so he can leave. The act is meant to free him from a path he does not want." },
    { text: "Because Valandil and Ontamo serve on the same ship, Isildur's choice gets them dismissed too. His private crisis becomes a material loss for friends who did want the future he threw away." },
    { text: "Their anger forces Isildur to confront a recurring weakness: he wants freedom from obligations without always seeing how much other people have invested in him." },
    { text: "When Míriel later calls for volunteers to sail to Middle-earth, the expedition offers all three a possible new direction—but it does not erase what Isildur did." }
  ];
  i[3].why = "Isildur's restlessness stops being romantic the moment it costs other people something. The episode makes his search for purpose a problem he must grow through, not proof that he is automatically right to reject every path offered to him.";

  /* S1E5 — Partings */
  g[4].summary = "Galadriel and Halbrand each push the other toward a role.";
  g[4].beats = [
    { text: "Galadriel trains Númenórean volunteers for war while trying to turn the expedition into more than a military response. She believes the Southlands need a king who can unite them, and she has decided Halbrand is that person." },
    { text: "Halbrand resists. He accuses Galadriel of using him to complete her own mission, and the accusation lands because she has repeatedly treated the meaning of his past as something she can decide for him." },
    { text: "Galadriel admits that fighting is the one place where she feels free of the darkness consuming her. The confession gives Halbrand a glimpse of the need underneath her certainty: the hunt has become part of how she survives herself." },
    { text: "Halbrand ultimately takes up the crest and joins the voyage. Whether he has accepted an identity or simply chosen the next road, Galadriel reads the decision as confirmation of the future she already imagined." }
  ];
  g[4].why = "Their bond deepens because each can see something wounded in the other, but that intimacy does not make their assumptions safe. Galadriel wants Halbrand to become a king; Halbrand encourages her to keep believing she understands him.";

  s[4].summary = "Fear divides the Southlanders before the Orcs even attack.";
  s[4].beats = [
    { text: "Bronwyn tries to organize a defense at Ostirith, but the refugees are hungry, frightened, and uncertain that resistance can succeed. Leadership now means asking people to risk their families on hope rather than proof." },
    { text: "Waldreg offers the opposite answer: survival through submission. Roughly half the group leaves with him, showing how easily old loyalties and present fear can become indistinguishable." },
    { text: "When Waldreg discovers that Adar is not Sauron, he submits anyway. Adar orders him to kill Rowan as proof, turning surrender from a promise of safety into participation in violence." },
    { text: "Theo finally shows the broken sword to Arondir. Arondir identifies it as a key tied to the domination of the Southlands, revealing that Theo's private secret may be central to the enemy's plan." }
  ];
  s[4].why = "The coming battle is already reshaping the community. The episode asks what people will trade for safety, while Theo learns that hiding the sword has made him part of a danger much larger than himself.";

  h[4].summary = "The Stranger protects the Harfoots, then frightens the person who trusted him first.";
  h[4].beats = [
    { text: "The migration continues through difficult country, with Poppy's walking song carrying the memory of Harfoots who were lost along the road. Their culture is warm and communal, but survival has always included the possibility of leaving people behind." },
    { text: "When wolves attack, the Stranger uses a burst of power to drive them away. His instinct is protective, but the magic injures his arm and again shows how little control he has over what he can do." },
    { text: "He uses cold and ice to heal himself. Nori approaches and is briefly caught in the effect, leaving her frightened of someone she has chosen to protect." },
    { text: "Elsewhere, three mysterious women examine the Stranger's meteor crater. The episode confirms that Nori is not the only person interested in what fell from the sky, but does not yet explain who they are or what they want." }
  ];
  h[4].why = "Nori's compassion is tested by fear rather than rewarded with certainty. The Stranger can save lives and still be dangerous, and caring about him does not require pretending otherwise.";
})();