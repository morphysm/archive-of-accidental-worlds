# ARCHIVE OF ACCIDENTAL WORLDS

## Website Design and Development Document

**Project type:** Static experimental image archive
**Primary purpose:** Preserve and exhibit early AI-generated image collections
**Initial volume:** GUMMOS AND ROSES
**Estimated collections:** Approximately 20 folders
**Recommended stack:** Astro, TypeScript, CSS
**Target deployment:** Netlify or GitHub Pages
**Primary devices:** Desktop, tablet, mobile
**Document audience:** Codex and project maintainer

---

# 1. PROJECT DEFINITION

## 1.1 Title

**ARCHIVE OF ACCIDENTAL WORLDS**

## 1.2 Core concept

Archive of Accidental Worlds is an online archive of early AI-generated images created through repeated prompt variations.

The original prompts combined subjects such as:

* musicians;
* cinema characters;
* cities;
* UFOs;
* women and snakes;
* popular fictional characters;
* animals;
* landscapes;
* celebrities;
* religious or mythological imagery;
* domestic environments;
* ruins;
* machines.

The resulting images frequently escaped their source prompts.

Instead of faithfully reproducing the requested subjects, early image-generation systems produced unstable but strangely coherent visual environments. Repeated prompt variations created recurring populations, architectures, objects, colours, mutations, and atmospheres.

Each image folder should therefore be treated as an accidental world rather than merely as a prompt category.

The website documents these worlds as if they were recovered photographic archives.

---

## 1.3 Project statement

> Archive of Accidental Worlds is a collection of early synthetic images organised into separate visual territories. The images began as low-variation prompt experiments, but primitive image systems transformed them into accidental civilisations, landscapes, bodies, architectures, and mythologies.
>
> Their anatomical failures, unstable identities, contaminated textures, compression damage, visual repetition, and machine errors are preserved as part of the work.

---

## 1.4 Short description

> An archive of early machine-generated worlds that appeared by accident.

---

## 1.5 Curatorial position

The website must not present the images primarily as examples of prompt engineering.

The project is concerned with:

* accidental visual systems;
* primitive synthetic texture;
* machine misunderstanding;
* repeated mutations;
* unstable identity;
* failed representation;
* imaginary cultures;
* fictional geography;
* obsolete AI aesthetics;
* synthetic archaeology.

The original prompts remain historically relevant, but the resulting image worlds are the principal artwork.

---

# 2. PROJECT GOALS

## 2.1 Primary goals

The website must:

1. preserve the original character of the images;
2. organise approximately twenty collections into a coherent archive;
3. allow visitors to browse each collection sequentially;
4. provide contact sheets for rapid visual navigation;
5. preserve low-resolution, damaged, or malformed images without correction;
6. establish a strong archival identity;
7. support future expansion without structural redesign;
8. remain fast and usable on low- and mid-range devices;
9. avoid dependence on a database or complex content-management system;
10. allow direct URLs to every collection and image.

---

## 2.2 Secondary goals

The website may later support:

* original prompt fragments;
* approximate generation dates;
* historical notes about image-generation systems;
* downloadable exhibition lists;
* collection-specific essays;
* optional ambient sound;
* private or unpublished collections;
* alternate sequencing;
* exhibition mode.

These should not be required for the first release.

---

## 2.3 Non-goals

The website is not:

* a social network;
* an image-generation service;
* a commercial stock-photo library;
* a prompt marketplace;
* a technical AI benchmark;
* a conventional portfolio;
* an NFT gallery;
* an online shop;
* a discussion forum;
* a modern masonry-grid showcase.

Do not add:

* likes;
* comments;
* follower counts;
* ratings;
* autoplay slideshows;
* algorithmic recommendations;
* generative animations;
* AI chat functions;
* complex account systems;
* user uploads;
* excessive sharing controls.

---

# 3. DESIGN PRINCIPLES

## 3.1 The archive is the artwork

The interface should support the images without visually competing with them.

The website should feel like:

* a recovered digital archive;
* an abandoned cultural database;
* a damaged CD-ROM;
* an old image directory;
* a photographic proof-sheet collection;
* a private research archive;
* an anthropological record of imaginary societies;
* a museum database built with insufficient funding;
* a forgotten personal website.

---

## 3.2 Preserve imperfection

Do not correct the source material.

Never automatically:

* upscale images;
* restore faces;
* sharpen details;
* remove compression;
* regenerate missing areas;
* correct anatomy;
* recolour images;
* normalise contrast;
* remove watermarks or accidental text;
* crop significant visual errors;
* force one aspect ratio;
* convert every image into a consistent visual style.

The primitive texture is the reason the archive exists.

---

## 3.3 Avoid nostalgia clichés

The website may reference early internet and obsolete digital media, but it must not become a parody of a 1990s website.

Avoid:

* animated GIF decorations;
* fake Windows interfaces;
* excessive scanlines;
* blinking text;
* CRT filters over every image;
* fake VHS overlays;
* novelty cursors;
* random glitch effects;
* exaggerated pixel fonts;
* fake terminal commands;
* noisy background animation.

The design should be restrained and credible.

---

## 3.4 Direct navigation

Visitors should understand where they are at all times.

The site must clearly communicate:

* archive name;
* collection name;
* image number;
* total image count;
* current chapter when applicable;
* previous and next image;
* return path to collection;
* return path to archive index.

The experimental identity must not make navigation confusing.

---

# 4. INFORMATION ARCHITECTURE

## 4.1 Main site hierarchy

```text
ARCHIVE COVER
    ↓
ARCHIVE INDEX
    ↓
COLLECTION INTRODUCTION
    ↓
COLLECTION CONTACT SHEET
    ↓
INDIVIDUAL IMAGE VIEWER
    ↓
COLLECTION END PAGE
```

Secondary pages:

```text
ABOUT THE ARCHIVE
METHOD / HISTORY
COLLECTION NOTES
COLOPHON
404 PAGE
```

---

## 4.2 Required routes

Recommended routes:

```text
/
    Main archive cover

/archive
    Complete collection index

/about
    Curatorial and historical statement

/collections/[collection-slug]
    Collection introduction and contact sheet

/collections/[collection-slug]/[image-id]
    Individual image viewer

/collections/[collection-slug]/chapters/[chapter-slug]
    Optional chapter-filtered contact sheet

/colophon
    Technical and archival information
```

Examples:

```text
/collections/gummos-and-roses
/collections/gummos-and-roses/gmr-001
/collections/women-and-snakes/was-014
/collections/cities/city-032
```

Every image page must be directly addressable.

Refreshing the browser must retain the current image.

Browser back and forward controls must work correctly.

---

## 4.3 Main archive cover

The homepage should be visually sparse.

Required elements:

```text
ARCHIVE
OF ACCIDENTAL
WORLDS
```

Secondary line:

```text
EARLY SYNTHETIC IMAGE COLLECTIONS
```

Primary action:

```text
ENTER ARCHIVE
```

Optional small information:

```text
20 COLLECTIONS
[APPROXIMATE YEAR RANGE]
```

The cover may use:

* one full-screen image;
* a partially obscured image;
* a slow-changing set of three images;
* a black or dirty cream background;
* one collection image selected manually.

Do not use an automatic rapid slideshow.

---

## 4.4 Archive index

The archive index presents all collections.

Each collection entry must contain:

* archive number;
* collection title;
* subtitle or short description;
* cover image;
* image count;
* publication status;
* link to open collection.

Example:

```text
VOLUME 01

GUMMOS AND ROSES

Photographs from a postwar trailer-park jungle.

142 IMAGES

OPEN VOLUME
```

The archive index must not resemble an e-commerce product grid.

Preferred layouts:

### Desktop

A vertical catalogue with alternating image and text positions.

or:

A restrained two-column archive index.

### Mobile

Single-column entries with image above text.

---

## 4.5 Collection introduction page

Every collection begins with an introduction.

Required fields:

* collection number;
* collection title;
* subtitle;
* cover image;
* short description;
* full curatorial text;
* image count;
* optional generation period;
* optional source-prompt territory;
* button to open contact sheet;
* button to begin sequence.

Example:

```text
VOLUME 01

GUMMOS AND ROSES

PHOTOGRAPHS FROM THE TRAILER-PARK JUNGLE

142 IMAGES

[INTRODUCTION]

VIEW CONTACT SHEET
BEGIN WITH IMAGE 001
```

---

## 4.6 Collection contact sheet

The contact sheet displays all images in a collection.

Requirements:

* sequential image numbering;
* small but legible thumbnails;
* native or near-native aspect ratios;
* stable layout;
* lazy loading;
* no rounded cards;
* no decorative shadows unless subtle;
* no social controls;
* no hover-dependent essential information;
* direct links to image pages.

Optional hover or focus information:

```text
IMAGE 023
CHAPTER III
UNTITLED
```

The contact sheet may support chapter filters.

Example:

```text
ALL
AFTER THE WAR
THE INHABITANTS
TRAILER-PARK JUNGLE
MACHINES AND ANIMALS
THE OLD ROCK GODS
LOW VARIATIONS
ROSES AFTER THE END
```

Filtering must update the URL only if it is implemented cleanly.

---

## 4.7 Individual image viewer

The image viewer is the central experience.

Required elements:

* current image;
* image number;
* total image count;
* collection title;
* optional image title;
* optional chapter;
* optional caption;
* previous image;
* next image;
* return to contact sheet;
* return to collection introduction.

Recommended desktop structure:

```text
COLLECTION TITLE                    023 / 142

                [IMAGE]

← PREVIOUS                          NEXT →

TITLE OR UNTITLED
CHAPTER NAME

INDEX
```

The image should remain the dominant element.

---

## 4.8 Collection ending page

After the last image, the visitor reaches a closing page.

Required elements:

* collection closing line;
* return to collection index;
* next collection;
* return to archive.

Example for GUMMOS AND ROSES:

```text
THE REFERENCES DISAPPEARED.
THE WORLD REMAINED.

GUMMOS AND ROSES
ARCHIVE OF AN ACCIDENTAL CIVILISATION

RETURN TO CONTACT SHEET
OPEN NEXT VOLUME
RETURN TO ARCHIVE
```

Each collection may have its own final line.

---

# 5. COLLECTION SYSTEM

## 5.1 Collection as an independent world

Each folder becomes a volume.

A volume is not defined only by its original prompt category.

Each volume should document:

1. original prompt territory;
2. accidental world;
3. recurring inhabitants;
4. recurring architecture;
5. recurring objects;
6. dominant colour and atmosphere;
7. characteristic machine errors;
8. internal image sequence;
9. optional chapters;
10. closing statement.

---

## 5.2 Initial known collections
## Folder-Based Collection Organisation

Codex must use the existing image-folder names to organise the archive.

Each top-level folder represents one collection or volume.

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

Codex should scan these folders and generate a collection inventory.

For each folder, record:

* original folder name;
* generated slug;
* image count;
* supported image files;
* unsupported files;
* duplicate filenames;
* cover-image candidate;
* publication status.

Example mapping:

```ts
{
  folderName: "GUMMOS AND ROSES",
  slug: "gummos-and-roses",
  title: "GUMMOS AND ROSES",
  status: "draft"
}
```

The original folder name must remain unchanged.

The slug may be generated by:

1. converting text to lowercase;
2. replacing spaces with hyphens;
3. removing unsupported URL characters;
4. preserving a stable mapping in metadata.

Examples:

```text
GUMMOS AND ROSES → gummos-and-roses
WOMAN AND SNAKES → woman-and-snakes
UFOS → ufos
```

Codex must not create poetic replacement names automatically.

Public titles, subtitles, descriptions, chapters, and curatorial names should remain editable through metadata.

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

Later, the visible title may change without renaming the folder:

```ts
{
  folderName: "CITIES",
  slug: "cities",
  title: "CITIES WITHOUT COUNTRIES",
  subtitle: "Compressed urban territories",
  status: "published"
}
```

## Updated Codex instruction

Use the existing top-level folder names as the authoritative collection structure.

Do not manually invent collection folders or rename the source directories.

Create a non-destructive inventory script that:

1. scans the selected archive root;
2. treats every top-level folder as one collection;
3. generates stable collection slugs;
4. counts supported images;
5. records dimensions and file types;
6. reports unsupported or corrupted files;
7. creates draft metadata;
8. does not move, rename, convert, or delete source files.

The generated inventory should be reviewed before any images are copied into the website’s public asset folders.

Do not assume every folder is ready for publication. All newly discovered collections must default to:

```ts
status: "draft"
```

Only collections explicitly marked as published should appear on the public archive page.

---

## 5.3 Recommended collection metadata

Each collection should have:

```ts
type Collection = {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  curatorialNote?: string;
  originalPromptTerritory?: string;
  accidentalWorld?: string;
  coverImage: string;
  accentKey: string;
  imageCount: number;
  chapters?: Chapter[];
  generationPeriod?: string;
  status: "draft" | "published" | "hidden";
  closingText?: string;
};
```

---

## 5.4 Recommended image metadata

```ts
type ArchiveImage = {
  id: string;
  collectionId: string;
  number: number;
  filename: string;
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

Do not require optional fields to render an image.

The viewer must work when only these fields exist:

```text
id
collectionId
number
src
thumbnailSrc
width
height
alt
```

---

# 6. FIRST VOLUME: GUMMOS AND ROSES

## 6.1 Collection definition

GUMMOS AND ROSES began as repeated low-variation prompt combinations involving Guns N’ Roses and characters or visual elements associated with Harmony Korine’s *Gummo*.

The generated images did not remain faithful to either source.

They produced an accidental postwar trailer-park jungle populated by:

* malformed musicians;
* feral children;
* ruined families;
* improvised tribes;
* damaged vehicles;
* animals;
* overgrown trailers;
* scrap metal;
* mud;
* plastic;
* vegetation;
* fragments of celebrity culture;
* memories of rock mythology.

The volume should be presented as documentary photography from a civilisation that never existed.

---

## 6.2 GUMMOS AND ROSES chapter structure

### Chapter I — AFTER THE WAR

Include:

* ruined roads;
* destroyed landscapes;
* trailers;
* distant figures;
* industrial remains;
* damaged vehicles;
* overgrown settlements.

Purpose:

Establish the world before explaining its inhabitants.

---

### Chapter II — THE INHABITANTS

Include:

* portraits;
* families;
* children;
* musicians;
* groups;
* ambiguous celebrities;
* tribal figures;
* malformed faces.

Purpose:

Present the population as a synthetic society.

---

### Chapter III — TRAILER-PARK JUNGLE

Include:

* trailers;
* domestic ruins;
* bathtubs;
* plastic furniture;
* vegetation;
* flooded interiors;
* animals in houses;
* improvised gardens.

Purpose:

Define the domestic geography.

---

### Chapter IV — MACHINES AND ANIMALS

Include:

* vehicles;
* motorcycles;
* mechanical hybrids;
* pets;
* cages;
* improvised tools;
* weapons;
* object-body mutations.

Purpose:

Show the material culture of the world.

---

### Chapter V — THE OLD ROCK GODS

Include:

* recognisable musicians;
* rock-star residues;
* long-haired figures;
* band-like groups;
* counterfeit celebrities;
* ritual or saint-like portraits.

Purpose:

Reveal the damaged memory of Guns N’ Roses.

---

### Chapter VI — LOW VARIATIONS

Include sequences of three to eight images generated from closely related prompts.

Purpose:

Expose mutation, repetition, and primitive image-generation logic.

These may be displayed in denser sequence layouts.

---

### Chapter VII — ROSES AFTER THE END

Include:

* flowers;
* solitary figures;
* animals;
* evening landscapes;
* children;
* empty trailers;
* quiet domestic images;
* damaged beauty.

Purpose:

End with melancholy rather than spectacle.

---

## 6.3 GUMMOS AND ROSES collection text

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

# 7. VISUAL SYSTEM

## 7.1 Overall visual identity

The entire archive uses one structural design system.

Individual collections may modify only:

* accent colour;
* cover image;
* small decorative marker;
* chapter divider treatment;
* collection-specific subtitle.

Do not redesign the interface for each volume.

---

## 7.2 Base palette

Recommended CSS variables:

```css
:root {
  --archive-bg: #d8d1c2;
  --archive-paper: #e4dece;
  --archive-ink: #171512;
  --archive-muted: #676157;
  --archive-line: #8d8679;
  --archive-dark: #0e0d0b;
  --archive-red: #6c211e;
}
```

Values may be adjusted after viewing real images.

Avoid pure white and pure black for large surfaces unless a collection requires it.

---

## 7.3 Collection accent system

Each collection receives a controlled accent key.

Example:

```ts
const collectionAccents = {
  rust: "#6c211e",
  swamp: "#314936",
  ultraviolet: "#4a3f65",
  concrete: "#5c5d5d",
  plasticBlue: "#526b73",
  fadedPink: "#8b5967"
};
```

Use the accent for:

* active links;
* small numbering;
* chapter markers;
* focus outlines;
* collection labels;
* restrained dividers.

Do not tint the source images.

---

## 7.4 Typography

Use no more than two primary font families.

Recommended:

### Display font

A serif, condensed serif, or severe editorial font.

Use for:

* archive title;
* collection titles;
* large chapter titles;
* closing statements.

### Interface font

A monospace or utilitarian sans-serif.

Use for:

* navigation;
* image numbers;
* metadata;
* buttons;
* captions;
* labels.

The chosen fonts should be locally available through standard web delivery or open-source web fonts.

Do not use decorative horror fonts.

---

## 7.5 Typography scale

Suggested desktop scale:

```css
--text-xs: 0.72rem;
--text-sm: 0.85rem;
--text-base: 1rem;
--text-md: 1.25rem;
--text-lg: 1.75rem;
--text-xl: clamp(2.5rem, 6vw, 6.5rem);
```

Titles may be uppercase.

Body text should remain readable and not excessively letter-spaced.

---

## 7.6 Spacing

Use a restrained spacing system:

```css
--space-1: 0.25rem;
--space-2: 0.5rem;
--space-3: 0.75rem;
--space-4: 1rem;
--space-6: 1.5rem;
--space-8: 2rem;
--space-12: 3rem;
--space-16: 4rem;
--space-24: 6rem;
```

Collection pages should have generous empty space around text and images.

Contact sheets may use tighter spacing.

---

## 7.7 Borders and surfaces

Preferred:

* square corners;
* thin one-pixel lines;
* restrained image frames;
* flat surfaces;
* no glassmorphism;
* no rounded cards;
* no floating panels;
* no neon effects.

Possible image border:

```css
border: 1px solid rgba(23, 21, 18, 0.35);
```

---

## 7.8 Background texture

A subtle archive texture may be applied to page backgrounds.

Requirements:

* under approximately 5% visual opacity;
* no visible repeating seams;
* no movement required;
* should not degrade text legibility;
* must be removable through one CSS variable or class.

Do not apply texture over images.

---

# 8. IMAGE PRESENTATION

## 8.1 Aspect ratios

Preserve source aspect ratios.

Do not force all thumbnails into squares.

The contact sheet may use one of two systems:

### Option A — CSS masonry-like columns

Use CSS columns or a controlled masonry implementation.

Advantages:

* preserves aspect ratio;
* resembles an archive contact sheet.

Risks:

* reading order may become confusing.

### Option B — uniform rows with contained images

Use fixed row heights and `object-fit: contain`.

Advantages:

* predictable sequence;
* easier accessibility.

Recommended for the first version:

Use a regular CSS grid with image wrappers preserving intrinsic aspect ratio.

---

## 8.2 Full image sizing

Desktop:

```text
maximum width: approximately 86vw
maximum height: approximately 78vh
```

Mobile:

```text
maximum width: 100%
maximum height: approximately 72vh
```

Use:

```css
object-fit: contain;
```

Never crop full images in the viewer.

---

## 8.3 Thumbnails

Create separate thumbnail files.

Recommended thumbnail target:

* longest edge between 400 and 600 pixels;
* quality sufficient to preserve texture;
* do not sharpen;
* do not change colour;
* do not replace originals.

Thumbnails may use JPEG, PNG, or WebP depending on source comparison.

Do not automatically assume WebP looks best for these images. Compare before converting the entire archive.

---

## 8.4 Loading behaviour

The current full image loads immediately.

Preload:

* previous full image;
* next full image.

Lazy-load:

* contact-sheet images below the viewport;
* images outside the immediate viewer sequence.

Avoid displaying a modern spinner.

A simple text indicator is acceptable:

```text
LOADING IMAGE
```

or a neutral empty frame preserving image dimensions.

---

# 9. NAVIGATION AND INTERACTION

## 9.1 Keyboard controls

Within the image viewer:

```text
Right Arrow
    Next image

Left Arrow
    Previous image

Escape
    Return to contact sheet

F
    Toggle fullscreen viewing

I
    Toggle image information if implemented
```

Keyboard controls must not interfere with form inputs or browser shortcuts.

Listeners should exist only on image-viewer pages.

---

## 9.2 Pointer controls

Desktop:

* clicking the right side of the viewing area moves forward;
* clicking the left side moves backward;
* visible text navigation remains available.

Do not hide all navigation behind image clicks.

---

## 9.3 Mobile controls

Mobile requirements:

* visible previous and next buttons;
* minimum touch target approximately 44 × 44 pixels;
* optional swipe navigation;
* no hover dependency;
* image captions below image;
* no accidental navigation during vertical scrolling.

Swipe should require a deliberate horizontal movement threshold.

---

## 9.4 Fullscreen

Fullscreen is optional but recommended.

Requirements:

* image remains contained;
* background becomes near-black;
* controls remain accessible;
* Escape exits fullscreen before leaving the page;
* fullscreen state should not be required for ordinary viewing.

---

## 9.5 Transitions

Use only:

* direct cuts;
* short opacity fades;
* subtle image reveal.

Recommended duration:

```text
100–220 milliseconds
```

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

Disable non-essential transitions under reduced motion.

---

# 10. CONTENT AND EDITORIAL SYSTEM

## 10.1 Titles

Images do not require titles.

Default display:

```text
IMAGE 023
```

Optional editorial title:

```text
UNTITLED MUTATION
```

Do not invent descriptive titles for every image unless there is a clear curatorial reason.

---

## 10.2 Prompt fragments

Original prompt fragments may be included when available.

They should be hidden by default behind:

```text
SHOW PROMPT FRAGMENT
```

Prompt fragments must preserve:

* spelling mistakes;
* repetition;
* punctuation;
* incomplete phrases;
* accidental wording.

Do not rewrite them.

---

## 10.3 Dates

Use exact dates only when known.

Otherwise use:

```text
APPROX. 2022
EARLY GENERATION PERIOD
DATE UNKNOWN
```

Do not invent dates from file-modification metadata without verification.

---

## 10.4 Alt text

Alt text should describe visible content without falsely identifying uncertain subjects.

Preferred:

> A long-haired figure standing beside a damaged vehicle in an overgrown trailer settlement.

Avoid:

> Slash after World War III.

Use celebrity names only when identity is certain and curatorially intentional.

Decorative collection-cover duplicates may use empty alt text when the same information is already present nearby.

---

# 11. DATA ARCHITECTURE

## 11.1 Recommended folder structure

```text
src/
├── components/
│   ├── ArchiveHeader.astro
│   ├── ArchiveFooter.astro
│   ├── ArchiveCover.astro
│   ├── CollectionCard.astro
│   ├── CollectionIntroduction.astro
│   ├── ContactSheet.astro
│   ├── ImageThumbnail.astro
│   ├── ImageViewer.astro
│   ├── ImageMetadata.astro
│   ├── ViewerNavigation.astro
│   ├── ChapterNavigation.astro
│   └── PromptFragment.astro
│
├── data/
│   ├── collections.ts
│   ├── images/
│   │   ├── gummos-and-roses.ts
│   │   ├── cities.ts
│   │   ├── ufos.ts
│   │   └── women-and-snakes.ts
│   └── types.ts
│
├── layouts/
│   ├── BaseLayout.astro
│   ├── CollectionLayout.astro
│   └── ViewerLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── archive.astro
│   ├── about.astro
│   ├── colophon.astro
│   └── collections/
│       ├── [collection].astro
│       └── [collection]/
│           └── [image].astro
│
├── scripts/
│   ├── viewer-navigation.ts
│   └── fullscreen.ts
│
└── styles/
    ├── global.css
    ├── tokens.css
    ├── archive.css
    ├── collection.css
    └── viewer.css
```

Public assets:

```text
public/
├── images/
│   ├── gummos-and-roses/
│   │   ├── full/
│   │   ├── thumbs/
│   │   └── cover/
│   ├── cities/
│   │   ├── full/
│   │   ├── thumbs/
│   │   └── cover/
│   └── ...
│
├── textures/
└── icons/
```

Original untouched assets should remain outside the public build:

```text
archive-originals/
```

This folder should not be modified by scripts.

---

## 11.2 Data separation

Do not hard-code image arrays inside page components.

Collection metadata and image metadata must remain separate from presentation.

A collection should be addable by:

1. adding image files;
2. adding one collection metadata object;
3. adding one image metadata file;
4. selecting a cover;
5. setting status to published.

No route code should need manual duplication.

---

## 11.3 Build-time validation

Add a validation script or utility checking:

* duplicate image IDs;
* duplicate collection slugs;
* missing image files;
* missing thumbnails;
* invalid chapter references;
* missing width or height;
* missing alt text;
* incorrect sequence numbering;
* broken cover-image paths;
* published collections with zero images.

The build should fail with a readable error for invalid published data.

---

# 12. ASSET PREPARATION PIPELINE

## 12.1 Preserve originals

Before website processing:

```text
1. Copy each Dropbox folder into archive-originals.
2. Make a second working copy.
3. Never process files directly inside archive-originals.
4. Retain original filenames in metadata when useful.
```

---

## 12.2 Naming convention

Prepared files should use stable sequential names.

Examples:

```text
gmr-001.jpg
gmr-002.png
city-001.jpg
ufo-001.png
was-001.jpg
```

Recommended prefixes:

```text
gmr
city
ufo
was
dis
```

Do not rename all twenty collections before inspecting their content.

---

## 12.3 Image inventory script

Codex may create a script that scans a working collection and reports:

* filename;
* extension;
* width;
* height;
* aspect ratio;
* file size;
* duplicate hashes;
* missing sequence numbers;
* unsupported formats.

The script must not modify originals.

Output may be JSON or CSV.

---

## 12.4 Thumbnail generation script

Thumbnail generation must:

* read from working copies;
* output to `public/images/[collection]/thumbs`;
* preserve aspect ratio;
* avoid sharpening;
* avoid colour correction;
* never overwrite source images;
* skip existing thumbnails unless explicitly requested;
* log failures clearly.

The script should be optional and separately executable.

---

## 12.5 Duplicate detection

Early prompt collections may contain near-identical images.

Do not delete duplicates automatically.

The inventory may detect:

* exact duplicates through file hash;
* likely duplicates through perceptual hash if available.

Codex should report duplicates but leave editorial decisions to the user.

Low variations are part of the archive and may be intentionally retained.

---

# 13. ACCESSIBILITY

## 13.1 Required standards

The first release should aim for WCAG 2.1 AA where practical.

Required:

* semantic landmarks;
* headings in logical order;
* keyboard navigation;
* visible focus;
* adequate text contrast;
* descriptive links;
* meaningful alt text;
* reduced-motion support;
* no autoplay sound;
* no hover-only information;
* no inaccessible custom controls.

---

## 13.2 Focus appearance

Use a clear focus style tied to the collection accent.

Example:

```css
:focus-visible {
  outline: 2px solid var(--collection-accent);
  outline-offset: 4px;
}
```

Do not remove focus outlines.

---

## 13.3 Screen-reader sequence

On image pages, reading order should be:

1. archive name;
2. collection title;
3. image number;
4. image;
5. caption or metadata;
6. previous and next links;
7. index links.

Visual positioning may differ, but DOM order should remain logical.

---

# 14. PERFORMANCE

## 14.1 Performance goals

Target:

* minimal JavaScript;
* static HTML where possible;
* responsive images;
* stable image dimensions;
* no large animation libraries;
* no database;
* no heavy client framework;
* no third-party gallery package unless clearly justified.

---

## 14.2 Image performance

Required:

* width and height attributes;
* lazy loading on contact sheets;
* eager loading only for current image and critical cover;
* previous and next image preloading;
* separate thumbnails;
* no full-resolution image loading for contact sheets;
* no unnecessary base64 embedding.

---

## 14.3 JavaScript budget

Use client-side JavaScript only for:

* keyboard navigation;
* optional swipe;
* fullscreen;
* optional prompt reveal;
* optional sound control.

Do not hydrate static text or contact-sheet markup unnecessarily.

---

# 15. RESPONSIVE DESIGN

## 15.1 Desktop

Recommended breakpoint:

```text
1024 pixels and above
```

Behaviour:

* wide archive index;
* image viewer centred;
* metadata may sit beside image;
* maximum reading width for body text;
* generous margins.

---

## 15.2 Tablet

Recommended range:

```text
640–1023 pixels
```

Behaviour:

* simplified two-column archive index;
* metadata moves below or beside image depending on width;
* contact-sheet columns reduced;
* navigation remains visible.

---

## 15.3 Mobile

Below approximately:

```text
640 pixels
```

Behaviour:

* single-column archive index;
* two-column or three-column contact sheet;
* full-width image viewer;
* captions below image;
* large navigation controls;
* no tiny metadata;
* no fixed sidebars;
* no horizontal page overflow.

---

# 16. OPTIONAL SOUND SYSTEM

Sound is not part of the first release unless explicitly approved.

If added later:

* default state is off;
* no autoplay;
* one global toggle;
* collection-specific ambient loops;
* volume remains low;
* sound stops or changes cleanly across routes;
* preference may be saved locally;
* no essential information depends on audio.

Possible labels:

```text
SOUND: OFF
SOUND: ON
```

Do not use a standard speaker icon without text.

---

# 17. SEO AND SOCIAL METADATA

Each page should have:

* unique title;
* description;
* canonical URL;
* Open Graph title;
* Open Graph description;
* selected preview image.

Examples:

```text
Archive of Accidental Worlds
```

```text
GUMMOS AND ROSES — Archive of Accidental Worlds
```

```text
Image 023 — GUMMOS AND ROSES
```

Do not overuse AI marketing terminology.

---

# 18. PRIVACY AND EXTERNAL SERVICES

The first release should avoid unnecessary trackers.

Preferred:

* no analytics initially;
* no advertising;
* no third-party comments;
* no external image hosting;
* no embedded social feeds;
* no mandatory cookies.

If analytics are later added, use a privacy-respecting service and document it.

---

# 19. ERROR STATES

## 19.1 Missing image

If an image file is missing:

```text
IMAGE UNAVAILABLE
```

The visitor must still be able to navigate to previous and next images.

---

## 19.2 Unpublished collection

Draft or hidden collections must not appear in the public archive index.

Direct access should return a controlled 404 or not generate the page.

---

## 19.3 404 page

Suggested text:

```text
THIS WORLD WAS NOT RECOVERED.

RETURN TO THE ARCHIVE
```

Keep the page simple and useful.

---

# 20. CODEX WORKING RULES

Codex must follow these rules throughout implementation.

## 20.1 Inspect before coding

Before modifying the project, Codex must inspect:

* repository tree;
* package files;
* framework;
* routes;
* existing styles;
* deployment configuration;
* image folders;
* scripts;
* documentation;
* current build status.

Codex must report findings before restructuring the project.

---

## 20.2 Preserve unrelated work

Codex must:

* avoid changing unrelated files;
* avoid broad refactors;
* avoid replacing existing configuration without reason;
* avoid deleting assets;
* avoid formatting the entire repository;
* avoid adding libraries when native solutions are sufficient.

---

## 20.3 Certainty over speed

Codex should:

* verify file paths;
* verify image counts;
* verify route generation;
* verify the build after each stage;
* explain uncertainty;
* ask for missing editorial decisions only when technically necessary;
* avoid inventing collection metadata.

---

## 20.4 No destructive image processing

Codex must never:

* overwrite originals;
* alter files in `archive-originals`;
* delete duplicate images;
* regenerate image content;
* crop source files automatically;
* rename files without producing a mapping;
* remove metadata without approval.

---

## 20.5 Incremental implementation

Codex must work in small stages.

Each stage should include:

1. files changed;
2. implementation summary;
3. verification performed;
4. remaining risks;
5. next proposed stage.

---

# 21. IMPLEMENTATION PHASES

## Phase 0 — Repository inspection

Codex must:

* inspect project;
* identify existing architecture;
* run existing build if safe;
* report current state;
* propose exact file structure;
* make no implementation changes.

Deliverable:

```text
Repository inspection report
```

---

## Phase 1 — Static foundation

Implement:

* Astro project structure if not already present;
* base layout;
* global CSS tokens;
* archive header;
* archive footer;
* placeholder routes;
* 404 page.

Use placeholder text and no full collection import.

Verification:

* build succeeds;
* all routes render;
* mobile layout has no overflow.

---

## Phase 2 — Data model

Implement:

* collection types;
* image types;
* collection registry;
* image registry;
* build-time validation;
* one sample collection with five placeholder images.

Verification:

* static routes generated;
* invalid metadata produces readable errors;
* direct image URLs work.

---

## Phase 3 — Archive cover and index

Implement:

* archive homepage;
* enter interaction;
* archive index;
* collection cards;
* status filtering;
* responsive layouts.

Verification:

* only published collections appear;
* cover loads correctly;
* keyboard focus order is logical.

---

## Phase 4 — Collection pages

Implement:

* collection introduction;
* collection metadata;
* contact sheet;
* chapter filters;
* begin-sequence action.

Verification:

* all thumbnails link correctly;
* chapter assignments display correctly;
* lazy loading works;
* layout remains stable.

---

## Phase 5 — Image viewer

Implement:

* full image display;
* previous and next navigation;
* image count;
* metadata;
* contact-sheet return;
* direct URL support;
* keyboard controls;
* fullscreen;
* preloading.

Verification:

* first image has no invalid previous link;
* last image leads to collection ending page;
* browser back works;
* keyboard listeners do not leak to other pages.

---

## Phase 6 — GUMMOS AND ROSES import

Implement:

* final collection metadata;
* chapter metadata;
* prepared image paths;
* thumbnails;
* cover;
* collection introduction;
* closing page.

Do not import the full folder until the inventory has been reviewed.

Verification:

* sequence is correct;
* all image files exist;
* no accidental omissions;
* no automatic enhancements;
* image count matches data.

---

## Phase 7 — Additional collections

For each new folder:

1. inventory assets;
2. inspect visual content;
3. define working title;
4. define accidental world;
5. select cover;
6. decide whether chapters are necessary;
7. prepare metadata;
8. generate thumbnails;
9. validate;
10. publish.

Do not publish all twenty collections simultaneously unless they have been reviewed.

---

## Phase 8 — Performance and accessibility audit

Check:

* Lighthouse results;
* keyboard navigation;
* colour contrast;
* alt text;
* mobile loading;
* layout shift;
* large file sizes;
* route correctness;
* reduced-motion mode;
* missing images;
* 404 behaviour.

---

## Phase 9 — Deployment

Prepare:

* production build;
* Netlify or GitHub Pages configuration;
* custom domain if available;
* cache headers;
* robots file;
* sitemap;
* favicon;
* social preview image.

Verify production URLs after deployment.

---

# 22. ACCEPTANCE CRITERIA

The first public version is complete when:

1. the homepage clearly presents Archive of Accidental Worlds;
2. the archive index lists published collections;
3. GUMMOS AND ROSES functions as a complete volume;
4. all GUMMOS AND ROSES images can be browsed sequentially;
5. all images have direct URLs;
6. the contact sheet uses thumbnails rather than full images;
7. source aspect ratios are preserved;
8. original image files remain untouched;
9. keyboard navigation works;
10. mobile navigation works;
11. browser back and forward work;
12. missing metadata does not break the viewer;
13. the project builds without errors;
14. no unnecessary framework or gallery library is added;
15. there is no autoplay sound;
16. there are no social-media interface elements;
17. the visual identity remains restrained and archival;
18. the site performs acceptably on a mid-range mobile device;
19. reduced-motion preferences are respected;
20. unpublished collections remain hidden.

---

# 23. FIRST CODEX PROMPT

Use this prompt to begin the project.

```text
We are building a static image archive titled:

ARCHIVE OF ACCIDENTAL WORLDS

The project contains approximately twenty folders of early AI-generated images.
Known collections include:

- GUMMOS AND ROSES
- CITIES
- UFOS
- WOMEN AND SNAKES
- Disney-related images
- approximately fifteen additional collections

The original images were generated through repeated low-variation prompts.
The systems often failed to reproduce the requested subjects and instead formed
accidental visual worlds with recurring populations, objects, landscapes,
architectures and machine errors.

The website must present each folder as a separate archival volume.

The first completed volume will be GUMMOS AND ROSES.

GUMMOS AND ROSES began as prompts combining Guns N’ Roses and visual elements
associated with Harmony Korine’s Gummo. The output became an accidental postwar
trailer-park jungle inhabited by malformed musicians, feral families, animals,
ruined machines, improvised tribes, vegetation and fragments of American
popular culture.

Critical visual principles:

- restrained archival interface;
- preserve primitive image quality;
- do not upscale, restore, sharpen, recolour or destructively crop images;
- preserve source aspect ratios;
- no modern social-media gallery;
- no rounded cards;
- no likes, comments or engagement counters;
- no exaggerated glitch effects;
- no fake Windows interface;
- no autoplay sound;
- no unnecessary animation;
- no unnecessary JavaScript.

Recommended architecture:

- Astro
- TypeScript
- CSS
- static routes
- metadata-driven collections
- metadata-driven image pages
- separate thumbnails
- direct URL for every image
- Netlify or GitHub Pages deployment

Required site structure:

/
    archive cover

/archive
    all published collections

/about
    archive statement

/collections/[collection]
    collection introduction and contact sheet

/collections/[collection]/[image]
    individual image viewer

/colophon
    archive and technical notes

Required viewer controls:

- previous image;
- next image;
- return to contact sheet;
- image number and total;
- left and right arrow keyboard navigation;
- Escape returns to index;
- optional fullscreen;
- previous and next image preloading.

Important working rules:

1. Inspect the repository before changing anything.
2. Read all existing documentation.
3. Identify the framework, routes, styles, scripts and deployment configuration.
4. Locate all image folders.
5. Do not modify or rename original images.
6. Do not touch unrelated files.
7. Do not install dependencies until you explain why they are needed.
8. Do not implement the whole site in one pass.
9. Certainty is more important than speed.
10. Build and verify each stage separately.

For this first task:

- inspect the repository only;
- report the current architecture;
- report all relevant files;
- identify potential conflicts;
- propose an exact implementation structure;
- propose the first small development stage;
- do not write or modify code yet.
```

---

# 24. SECOND CODEX PROMPT

Use this only after approving the inspection report.

```text
Proceed with Phase 1 only.

Build the static foundation for ARCHIVE OF ACCIDENTAL WORLDS.

Implement:

- base Astro layout;
- global design tokens;
- archive header;
- archive footer;
- homepage cover;
- placeholder archive index;
- placeholder about page;
- placeholder colophon page;
- controlled 404 page;
- responsive base styles.

Do not yet:

- import the image archive;
- build the full contact sheet;
- build the image viewer;
- generate thumbnails;
- add sound;
- add animation libraries;
- add collection-specific themes;
- restructure unrelated files.

Visual direction:

- dirty cream or near-black base;
- restrained serif display title;
- monospace or utilitarian interface text;
- square corners;
- thin lines;
- no gradients;
- no glass effects;
- no rounded cards;
- no exaggerated retro styling.

After implementation:

1. run the build;
2. report every changed file;
3. report verification results;
4. report any unresolved issues;
5. stop before Phase 2.
```

---

# 25. DEVELOPMENT PRIORITY

The correct order is:

```text
ARCHITECTURE
→ DATA MODEL
→ NAVIGATION
→ IMAGE VIEWER
→ GUMMOS AND ROSES IMPORT
→ VISUAL REFINEMENT
→ ADDITIONAL COLLECTIONS
```

Do not begin by importing all twenty folders.

GUMMOS AND ROSES should serve as the first complete volume and technical prototype. Once its data model, image handling, sequencing, contact sheet, and responsive viewer are stable, the same architecture can be used for the remaining collections.
