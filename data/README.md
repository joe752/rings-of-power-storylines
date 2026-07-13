# Data architecture

The companion uses plain JavaScript data files so it can remain static and GitHub Pages friendly. The important rule is that every piece of content has **one canonical home**.

## Canonical files

### Shared world data

- `core.js` — episode names, peoples, places, and objects
- `characters.js` — canonical character entities, staged identities, summaries, and relationships
- `lore.js` — lore notes
- `seasons-init.js` — initializes the season containers

### Season narrative data

Season files own the episode sections they define:

- `s1-*.js` — Season 1 sections
- `s2-*.js` — Season 2 sections

A file may define more than one section family when that keeps related material together. For example, `s1-southlands.js` contains the main Southlands sequence plus additional episode sections such as the early corruption mystery and Arondir's underground disappearance.

The internal `storylines` object is currently a container for section sequences. The UI does not require those sequences to remain permanent storylines: it simply gathers every non-null section for the selected episode and renders them as independent episode sections.

## No override layers

Do **not** add files that load later only to mutate or replace data defined earlier.

Avoid patterns such as:

```js
SEASONS.s1.storylines.foo.episodes[2].summary = "replacement";
```

in a separate `expansion`, `enrichment`, `patch`, or `override` file.

That architecture makes the rendered result depend on script order and creates multiple apparent sources of truth. A content fix can then be silently undone by a later file.

Instead:

1. Edit the canonical season file directly.
2. Add a new section sequence in that same season file when the episode needs another distinct section.
3. Edit `core.js`, `characters.js`, or `lore.js` directly for shared entities and lore.

## Load order

`index.html` loads data in this order:

1. shared world data
2. season initialization
3. Season 1 canonical files
4. Season 2 canonical files
5. `app.js`

No content file should depend on a later file rewriting it.

## Spoiler staging

Use `revealAt` for knowledge that changes over time. Prefer staged data inside the canonical entity itself rather than replacing the entity later.

Examples:

- object summaries can gain later `revealAt` entries
- character identities can become visible at later episodes
- relationships can appear only when the viewer has reached the relevant reveal

The canonical data should therefore describe the whole progression while the application decides which parts are visible at the current spoiler limit.

## Architectural principle

> **One fact, one canonical source. Visibility may be staged; ownership should not be layered.**
