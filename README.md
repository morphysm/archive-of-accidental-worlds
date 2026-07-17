# ARCHIVE OF ACCIDENTAL WORLDS

Archive of Accidental Worlds is a static web archive for a collection of early AI-generated images organised into approximately twenty folders.

Each folder represents one accidental visual world.

The images were created through repeated low-variation prompts involving subjects such as cities, UFOs, women and snakes, popular fictional characters, musicians, animals, ruins, machines, and other recurring themes.

The early image-generation systems often failed to reproduce those subjects faithfully. Instead, they produced unstable but strangely coherent environments, populations, architectures, objects, and visual textures.

This project preserves those images without correcting their primitive synthetic quality.

---

## Project status

Early development.

The first collection planned for full implementation is:

```text
GUMMOS AND ROSES
```

This collection began with prompt variations combining Guns N’ Roses and visual elements associated with Harmony Korine’s *Gummo*.

The output developed into an accidental postwar trailer-park jungle populated by malformed musicians, feral families, animals, damaged vehicles, improvised tribes, vegetation, and fragments of American popular culture.

---

## Core principles

The project must preserve the original character of the images.

Do not:

* upscale the originals;
* restore faces;
* correct anatomy;
* sharpen images;
* recolour images;
* remove compression damage;
* crop images destructively;
* normalise aspect ratios;
* delete repeated or low-variation images automatically;
* rename or overwrite original source files.

The malformed bodies, unstable identities, repeated faces, contaminated textures, accidental text, and visual errors are part of the archive.

---

## Archive structure

Each top-level source folder represents one collection.

Example:

```text
source-images/
├── GUMMOS AND ROSES/
├── CITIES/
├── UFOS/
├── WOMAN AND SNAKES/
├── DISNEY/
└── ...
```

The existing folder names are the authoritative collection structure.

Codex must not rename these folders or invent replacement categories.

A folder name may later receive a different public-facing title through metadata, but the original folder name must remain preserved.

Example:

```ts
{
  folderName: "CITIES",
  slug: "cities",
  title: "CITIES",
  subtitle: "",
  description: "",
  status: "draft"
}
```

Later, the visible title may change without changing the source folder:

```ts
{
  folderName: "CITIES",
  slug: "cities",
  title: "CITIES WITHOUT COUNTRIES",
  subtitle: "Compressed urban territories",
  status: "published"
}
```

---

## Recommended stack

The intended implementation uses:

* Astro;
* TypeScript;
* CSS;
* static route generation;
* metadata-driven collections;
* metadata-driven image pages;
* Netlify or GitHub Pages deployment.

Avoid unnecessary frameworks, databases, gallery libraries, and client-side JavaScript.

---

## Planned site structure

```text
/
    Main archive cover

/archive
    Published collection index

/about
    Curatorial and historical statement

/collections/[collection]
    Collection introduction and contact sheet

/collections/[collection]/[image]
    Individual image viewer

/colophon
    Technical and archival information
```

Each image should have a direct URL.

Example:

```text
/collections/gummos-and-roses/gmr-001
```

---

## Main features

Planned features include:

* archive cover page;
* collection index;
* folder-based collection organisation;
* contact sheets;
* sequential image viewing;
* previous and next navigation;
* keyboard navigation;
* mobile navigation;
* direct links to individual images;
* collection descriptions;
* optional chapters;
* optional prompt fragments;
* responsive image layouts;
* reduced-motion support;
* accessible navigation;
* separate thumbnail files;
* static deployment.

---

## Image viewer controls

Planned controls:

```text
Right Arrow
    Next image

Left Arrow
    Previous image

Escape
    Return to the contact sheet

F
    Toggle fullscreen mode
```

Visible navigation controls must remain available. Keyboard controls should not be the only way to use the archive.

---

## Visual direction

The interface should feel like:

* a recovered digital archive;
* an abandoned cultural database;
* a damaged CD-ROM;
* a photographic proof sheet;
* an old image directory;
* an anthropological archive of imaginary societies.

The interface should remain restrained.

Avoid:

* social-media cards;
* likes and comments;
* engagement counters;
* rounded panels;
* glass effects;
* decorative gradients;
* exaggerated glitch effects;
* fake Windows interfaces;
* CRT overlays on every image;
* autoplay audio;
* large animation libraries;
* elaborate page-turn effects.

The images should remain the visual focus.

---

## Collection metadata

Each collection should use structured metadata.

Example:

```ts
type Collection = {
  id: string;
  folderName: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  accentKey: string;
  imageCount: number;
  generationPeriod?: string;
  originalPromptTerritory?: string;
  accidentalWorld?: string;
  status: "draft" | "published" | "hidden";
  closingText?: string;
};
```

Newly discovered collections must default to:

```ts
status: "draft"
```

Only collections explicitly marked as published should appear in the public archive.

---

## Image metadata

Example:

```ts
type ArchiveImage = {
  id: string;
  collectionId: string;
  number: number;
  filename: string;
  originalFilename?: string;
  src: string;
  thumbnailSrc: string;
  width: number;
  height: number;
  title?: string;
  chapter?: string;
  caption?: string;
  promptFragment?: string;
  approximateDate?: string;
  alt: string;
  status: "published" | "hidden";
  featured?: boolean;
};
```

The image viewer must still work when optional metadata is absent.

---

## Suggested repository structure

```text
.
├── README.md
├── AGENTS.md
├── archive-originals/
├── source-images/
├── public/
│   ├── images/
│   │   ├── gummos-and-roses/
│   │   │   ├── full/
│   │   │   ├── thumbs/
│   │   │   └── cover/
│   │   └── ...
│   ├── textures/
│   └── icons/
├── scripts/
│   ├── inventory-images.ts
│   ├── validate-archive.ts
│   └── generate-thumbnails.ts
└── src/
    ├── components/
    ├── data/
    ├── layouts/
    ├── pages/
    ├── scripts/
    └── styles/
```

The exact structure may be adjusted after repository inspection.

---

## Source-image safety

The `archive-originals/` directory contains untouched source material.

Scripts must never:

* modify files inside `archive-originals/`;
* rename source files;
* delete duplicate images;
* convert originals in place;
* overwrite source assets;
* apply automatic visual enhancement.

Prepared website copies should be created separately.

---

## Inventory workflow

Before importing a collection into the public site:

1. scan the source folder;
2. record the folder name;
3. generate a stable slug;
4. count supported image files;
5. record image dimensions;
6. record file formats;
7. detect unsupported or corrupted files;
8. identify exact duplicates;
9. create draft metadata;
10. review the inventory manually;
11. select a cover image;
12. approve the image sequence;
13. generate thumbnails;
14. publish the collection.

Duplicate detection must be informational only.

Low-variation images may be intentionally retained.

---

## Filename conventions

Prepared image copies should use stable sequential names.

Examples:

```text
gmr-001.jpg
gmr-002.png
city-001.jpg
ufo-001.png
was-001.jpg
```

Original filenames may be stored in metadata.

Do not rename source files without preserving an explicit mapping.

---

## Development order

The intended development order is:

```text
Repository inspection
→ Static foundation
→ Data model
→ Archive index
→ Collection pages
→ Image viewer
→ GUMMOS AND ROSES import
→ Accessibility and performance review
→ Additional collections
→ Deployment
```

Do not import every collection at the beginning.

GUMMOS AND ROSES should serve as the first complete volume and technical prototype.

---

## Codex working rules

Before changing code, Codex must:

1. inspect the repository;
2. read this README and `AGENTS.md`;
3. identify the current framework;
4. inspect routes, styles, scripts, and deployment files;
5. locate all source-image folders;
6. report the current architecture;
7. propose an exact implementation plan;
8. avoid changing unrelated files.

During implementation, Codex must:

* work in small verified stages;
* preserve original images;
* avoid broad refactors;
* avoid unnecessary dependencies;
* verify paths before using them;
* run the build after each stage;
* report every changed file;
* report unresolved risks;
* stop at the requested phase.

Certainty is more important than speed.

---

## First Codex task

The first Codex task should be inspection only.

```text
Inspect this repository for the ARCHIVE OF ACCIDENTAL WORLDS project.

Read README.md, AGENTS.md, package files, configuration files, source folders,
routes, styles, scripts, deployment files, and image directories.

Use the existing top-level image-folder names as the authoritative collection
structure.

Do not rename, move, convert, or modify any source images.

For this first task:

1. report the current repository architecture;
2. identify the framework and package manager;
3. list all relevant files and folders;
4. identify potential conflicts or missing foundations;
5. identify the image archive root;
6. list the collection folders found there;
7. propose an exact non-destructive implementation structure;
8. propose the first small development phase;
9. do not modify code or assets yet.
```

---

## First planned volume

### GUMMOS AND ROSES

Suggested subtitle:

```text
Photographs from the Trailer-Park Jungle
```

Collection statement:

> These images began as low-variation prompt experiments combining Guns N’ Roses with characters and environments associated with Harmony Korine’s *Gummo*.
>
> The system failed to reproduce either source.
>
> Instead, it generated a continuous accidental world: a postwar trailer-park jungle inhabited by malformed musicians, feral families, animals, ruined machines, improvised tribes, and fragments of American popular culture.
>
> The images belong to an early period of synthetic image generation. Their unstable bodies, contaminated textures, repeated faces, malformed objects, and uncertain identities are preserved as part of the work.
>
> This volume presents them as photographs from a civilisation that never existed.

---

## Project statement

> Archive of Accidental Worlds is a collection of early synthetic images organised into separate visual territories. The images began as low-variation prompt experiments, but primitive image systems transformed them into accidental civilisations, landscapes, bodies, architectures, and mythologies.
>
> Their anatomical failures, unstable identities, contaminated textures, compression damage, visual repetition, and machine errors are preserved as part of the work.

---

## License

The code license and image-archive terms have not yet been defined.

Do not assume that the images are available for reuse, redistribution, model training, commercial use, or derivative works.

Until a separate license is added, treat all image content as reserved.

---

## Repository status

Private development archive.

The structure, collection names, image order, curatorial texts, and publication status may change during review.
# archive-of-accidental-worlds
