# Data architecture

The companion uses plain JavaScript data files so it can remain static and GitHub Pages friendly. The important rule is that every piece of content has **one canonical home**, and the narrative model is **episode-first**.

## Canonical runtime shape

The application reads narrative content from:

```js
SEASONS.s1.episodes[0].sections
SEASONS.s1.episodes[1].sections
SEASONS.s2.episodes[0].sections
```

An episode owns its sections. A section does not need to belong to a permanent storyline that continues through later episodes or seasons.

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

The application therefore does not search across storyline objects to reconstruct an episode. It reads the episode directly.

## Adding narrative content

New content should use the episode-first registration API:

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

Do not create a permanent cross-episode storyline merely because the same character, place, or conflict appears more than once. Repeated characters and relationships are represented through entity IDs and can be queried independently of the episode-section structure.

## Existing Season 1 and Season 2 source files

The current season files predate the episode-first model and still declare their material in cross-episode series. `seasons-init.js` temporarily accepts those declarations through a non-enumerable compatibility registry. `finalize-episodes.js` compiles every non-null entry into the canonical `episodes[].sections` arrays and removes the old registry before `app.js` starts.

This bridge exists only so the architecture can change without rewriting all story content in one risky operation. **Do not use the legacy series shape for new content.** Existing files should be migrated into direct `addEpisodeSection(...)` calls as they are next edited or reorganized.

At runtime there is no `storylines` collection. The application depends only on the episode-first structure.

## Canonical files

### Shared world data

- `core.js` — episode names, peoples, places, and objects
- `characters.js` — canonical character entities, staged identities, summaries, and relationships
- `lore.js` — lore notes
- `seasons-init.js` — initializes episode-first season containers and the registration API
- `finalize-episodes.js` — removes the temporary compatibility registry before the app starts

### Season narrative data

- `s1-*.js` — current Season 1 source files
- `s2-*.js` — current Season 2 source files

As these are migrated, organization by file is only for maintainability. The data model itself remains episode-first.

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
3. Season 1 source files
4. Season 2 source files
5. episode finalization
6. `app.js`

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
