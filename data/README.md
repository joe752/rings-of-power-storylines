# Data architecture

The companion uses plain JavaScript data files so it can remain static and GitHub Pages friendly. The important rules are that every piece of content has **one canonical home** and the narrative model is **episode-first**.

## Canonical runtime shape

The application reads narrative content directly from:

```js
SEASONS.s1.episodes[0].sections
SEASONS.s1.episodes[1].sections
SEASONS.s2.episodes[0].sections
```

An episode owns its sections. A section does not need to belong to a permanent storyline that continues through later episodes or seasons.

Each episode object also owns its display metadata:

```js
{
  seasonId: "s1",
  seasonNumber: 1,
  number: 3,
  name: "Adar",
  sections: []
}
```

`EPISODE_TIMELINE` is the single ordered list of those same episode objects. The application uses it for spoiler positions, URL episode numbers, the episode rail, settings, and appearance links. This keeps assumptions such as “eight episodes per season” or “exactly two seasons” out of `app.js`.

Each section contains the material needed to render that part of the episode:

```js
{
  summary: "...",
  beats: [{ text: "...", lore: "optional-lore-id" }],
  place: ["place-id"],
  people: ["character-id"],
  why: "...",
  blurb: "..."
}
```

The application does not search across storyline objects or compile a second model before rendering. It reads the selected episode directly.

## Adding narrative content

For a single section, use:

```js
addEpisodeSection("s1", 3, {
  summary: "A distinct dramatic development in the episode.",
  beats: [
    { text: "What happens and what the viewer can understand at this point." }
  ],
  place: ["numenor"],
  people: ["galadriel"],
  why: "Why this development matters now."
});
```

The episode number is 1-based.

A source module that contributes at most one section to each episode may use the convenience helper:

```js
addEpisodeSections("s1", [
  { /* Episode 1 section */ },
  null,
  { /* Episode 3 section */ }
]);
```

`null` means that module contributes no section to that episode. The helper immediately writes each non-null section into the corresponding episode; it does not create or retain a cross-episode storyline object.

Do not create a permanent storyline merely because the same character, place, relationship, or conflict appears more than once. Those connections are represented through entity IDs and can be queried independently of the episode-section structure.

## Validation at the data boundary

Sections are validated when they are registered so malformed content fails close to its source rather than surfacing later as a broken UI.

The registration layer checks that:

- `summary` and `why` contain text
- `beats` is a non-empty array
- every beat contains text
- every `place` ID exists in `PLACES`
- every `people` ID exists in `CHARACTERS`
- every beat-level `lore` ID exists in `LORE`

As new seasons are added, misspelled IDs and incomplete section objects should therefore be caught immediately when the source file loads.

## Canonical files

### Shared world data

- `core.js` — episode names, peoples, places, and objects
- `characters.js` — canonical character entities, staged identities, summaries, and relationships
- `lore.js` — lore notes
- `seasons-init.js` — initializes seasons, episode metadata, the ordered timeline, registration helpers, and section validation

### Season narrative data

- `s1-*.js` — Season 1 section modules
- `s2-*.js` — Season 2 section modules

The filenames are only a maintainability choice. A file may focus on a character, place, or cluster of related material, but the data it registers belongs to individual episodes.

## No storyline registry

There is no `storylines` collection, compatibility registry, compilation pass, or finalization step.

The canonical path is always:

```text
source module
    ↓
addEpisodeSection / addEpisodeSections
    ↓
SEASONS[season].episodes[episode].sections
    ↓
EPISODE_TIMELINE (same episode objects, ordered globally)
    ↓
app.js
```

That keeps the stored model identical to the model the UI reads.

## No override layers

Do **not** add files that load later only to mutate or replace data defined earlier.

Avoid patterns such as:

```js
SEASONS.s1.episodes[2].sections[0].summary = "replacement";
```

in a separate `expansion`, `enrichment`, `patch`, or `override` file.

That architecture makes the rendered result depend on script order and creates multiple apparent sources of truth. A content fix can then be silently undone by a later file.

Instead:

1. Edit the canonical section directly.
2. Add another episode section when the episode contains another distinct dramatic development.
3. Edit `core.js`, `characters.js`, or `lore.js` directly for shared entities and lore.

## Load order

`index.html` loads data in this order:

1. shared world data
2. episode-first season initialization
3. Season 1 section modules
4. Season 2 section modules
5. `app.js`

No content file should depend on a later file rewriting it.

## Spoiler staging

Use `revealAt` for shared knowledge that changes over time. Prefer staged data inside the canonical entity itself rather than replacing the entity later.

Examples:

- object summaries can gain later `revealAt` entries
- character identities can become visible at later episodes
- relationships can appear only when the viewer has reached the relevant reveal

The canonical data should therefore describe the whole progression while the application decides which parts are visible at the current spoiler limit.

## Architectural principles

> **The episode owns the section. Characters, places, objects, and relationships connect episodes without forcing them into permanent storylines.**

> **One fact, one canonical source. Visibility may be staged; ownership should not be layered.**