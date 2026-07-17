import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceRoot = path.join(root, "AI Pics");
const outputRoot = path.join(root, "dist");
const supported = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif", ".avif"]);

const escapeHtml = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#39;");

const slugify = (value) => value.normalize("NFKD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "") || "collection";

const fileUrl = (segments) => segments.map((segment) => encodeURIComponent(segment)).join("/");
const pageShell = ({ title, body, depth = 0, script = "" }) => {
  const prefix = "../".repeat(depth);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="An archive of early machine-generated worlds that appeared by accident.">
    <title>${escapeHtml(title)} — Archive of Accidental Worlds</title>
    <link rel="stylesheet" href="${prefix}styles.css">
  </head>
  <body>
    <header class="site-header">
      <a class="wordmark" href="${prefix}index.html">Archive of Accidental Worlds</a>
      <nav aria-label="Primary navigation">
        <a href="${prefix}archive/index.html">Archive</a>
        <a href="${prefix}about/index.html">About</a>
        <a href="${prefix}colophon/index.html">Colophon</a>
      </nav>
    </header>
    <main>${body}</main>
    <footer class="site-footer">Private development archive · original image files remain untouched</footer>
    ${script}
  </body>
</html>`;
};

const imageCard = (collection, image, depth) => {
  const prefix = "../".repeat(depth);
  const imagePath = `${prefix}images/${fileUrl([collection.slug, image.outputName])}`;
  const imagePage = `${prefix}collections/${collection.slug}/${image.number}/index.html`;
  return `<a class="image-card" href="${imagePage}">
    <img src="${imagePath}" alt="${escapeHtml(image.name)}" loading="lazy">
    <span>${String(image.number).padStart(3, "0")}</span>
  </a>`;
};

const collectionCard = (collection, depth) => {
  const prefix = "../".repeat(depth);
  const cover = collection.images[0];
  const coverSrc = cover ? `${prefix}images/${fileUrl([collection.slug, cover.outputName])}` : "";
  return `<article class="collection-card">
    <a href="${prefix}collections/${collection.slug}/index.html" class="collection-cover">
      ${cover ? `<img src="${coverSrc}" alt="" loading="lazy">` : "<span class=\"empty-cover\">No images</span>"}
    </a>
    <div class="collection-card__body">
      <p class="eyebrow">${String(collection.images.length).padStart(3, "0")} images</p>
      <h2><a href="${prefix}collections/${collection.slug}/index.html">${escapeHtml(collection.folderName)}</a></h2>
      <a class="text-link" href="${prefix}collections/${collection.slug}/index.html">Enter collection →</a>
    </div>
  </article>`;
};

const build = async () => {
  if (!existsSync(sourceRoot)) throw new Error(`Image archive root not found: ${sourceRoot}`);
  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });
  await cp(path.join(root, "site", "styles.css"), path.join(outputRoot, "styles.css"));

  const entries = await readdir(sourceRoot, { withFileTypes: true });
  const collections = [];
  for (const entry of entries.filter((item) => item.isDirectory()).sort((a, b) => a.name.localeCompare(b.name))) {
    if (entry.name.toLowerCase() === "not to be used") continue;
    const slug = slugify(entry.name);
    const files = (await readdir(path.join(sourceRoot, entry.name), { withFileTypes: true }))
      .filter((item) => item.isFile() && supported.has(path.extname(item.name).toLowerCase()))
      .map((item) => item.name)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    const collection = {
      folderName: entry.name,
      slug,
      images: files.map((name, index) => ({
        name,
        number: index + 1,
        // Keep source names in captions, but do not publish hidden files under
        // dot-prefixed URLs that deployment tooling may omit.
        outputName: name.startsWith(".")
          ? `image-${String(index + 1).padStart(3, "0")}${path.extname(name).toLowerCase()}`
          : name,
      })),
    };
    collections.push(collection);
    const imageDir = path.join(outputRoot, "images", slug);
    await mkdir(imageDir, { recursive: true });
    for (const image of collection.images) {
      await cp(path.join(sourceRoot, entry.name, image.name), path.join(imageDir, image.outputName));
    }
  }

  const archiveCards = collections.map((collection) => collectionCard(collection, 1)).join("\n");
  const archiveIndex = `<section class="page-heading"><p class="eyebrow">Archive index</p><h1>Collections</h1><p>${collections.length} territories · ${collections.reduce((sum, item) => sum + item.images.length, 0)} images</p></section><section class="collection-grid">${archiveCards}</section>`;
  const intro = `<section class="hero hero--cover">
    <p class="eyebrow">A private image archive</p>
    <h1>Accidental worlds,<br><em>preserved as found.</em></h1>
    <p class="lede">Early synthetic images organised as visual territories. Their errors, repetitions, and unstable identities are part of the record.</p>
    <p><a class="enter-link" href="archive/index.html">Enter archive →</a></p>
  </section>`;
  await writeFile(path.join(outputRoot, "index.html"), pageShell({ title: "Archive", body: intro }));
  await mkdir(path.join(outputRoot, "archive"), { recursive: true });
  await writeFile(path.join(outputRoot, "archive", "index.html"), pageShell({ title: "Archive index", body: archiveIndex, depth: 1 }));

  for (const collection of collections) {
    const collectionDir = path.join(outputRoot, "collections", collection.slug);
    await mkdir(collectionDir, { recursive: true });
    const grid = collection.images.map((image) => imageCard(collection, image, 2)).join("\n");
    const body = `<div class="page-heading"><a class="back-link" href="../../archive/index.html">← Archive</a><p class="eyebrow">Collection</p><h1>${escapeHtml(collection.folderName)}</h1><p>${collection.images.length} images · source folder preserved</p><p><a class="enter-link" href="1/index.html">Begin sequence →</a></p></div><section class="image-grid">${grid}</section>`;
    await writeFile(path.join(collectionDir, "index.html"), pageShell({ title: collection.folderName, body, depth: 2 }));
    for (const [index, image] of collection.images.entries()) {
      const imageDir = path.join(collectionDir, String(image.number));
      await mkdir(imageDir, { recursive: true });
      const previous = collection.images[index - 1];
      const next = collection.images[index + 1];
      const imageSrc = `../../../images/${fileUrl([collection.slug, image.outputName])}`;
      const body = `<div class="viewer-heading"><a class="back-link" href="../index.html">← ${escapeHtml(collection.folderName)}</a><p class="eyebrow">Image ${String(image.number).padStart(3, "0")} / ${String(collection.images.length).padStart(3, "0")}</p></div>
      <figure class="viewer"><img src="${imageSrc}" alt="${escapeHtml(image.name)}"><figcaption>${escapeHtml(image.name)}</figcaption></figure>
      <nav class="viewer-nav" aria-label="Image navigation">${previous ? `<a href="../${previous.number}/index.html">← Previous</a>` : "<span></span>"}<a href="../index.html">Contact sheet</a>${next ? `<a href="../${next.number}/index.html">Next →</a>` : "<span></span>"}</nav>`;
      const viewerScript = `<script>(() => { const prev = ${previous ? JSON.stringify(`../${previous.number}/index.html`) : "null"}; const next = ${next ? JSON.stringify(`../${next.number}/index.html`) : "null"}; document.addEventListener('keydown', (event) => { if (event.target.matches('input, textarea, select, button')) return; if (event.key === 'ArrowLeft' && prev) location.href = prev; if (event.key === 'ArrowRight' && next) location.href = next; if (event.key === 'Escape') location.href = '../index.html'; }); })();</script>`;
      await writeFile(path.join(imageDir, "index.html"), pageShell({ title: `${collection.folderName} ${image.number}`, body, depth: 3, script: viewerScript }));
    }
  }

  const about = `<div class="prose"><p class="eyebrow">About</p><h1>Archive of Accidental Worlds</h1><p>These images began as low-variation prompt experiments. Primitive image systems transformed their subjects into unstable environments, populations, architectures, and visual textures.</p><p>The archive preserves that primitive synthetic quality. Nothing here is upscaled, restored, sharpened, recoloured, or automatically corrected.</p></div>`;
  await mkdir(path.join(outputRoot, "about"), { recursive: true });
  await writeFile(path.join(outputRoot, "about", "index.html"), pageShell({ title: "About", body: about, depth: 1 }));
  const colophon = `<div class="prose"><p class="eyebrow">Colophon</p><h1>A static archive</h1><p>Built as a dependency-free static site. Collection folders and source filenames are treated as authoritative. The source archive is reserved; no image-content licence is implied.</p></div>`;
  await mkdir(path.join(outputRoot, "colophon"), { recursive: true });
  await writeFile(path.join(outputRoot, "colophon", "index.html"), pageShell({ title: "Colophon", body: colophon, depth: 1 }));
  console.log(`Built ${collections.length} collections and ${collections.reduce((sum, item) => sum + item.images.length, 0)} images in dist/`);
};

build().catch((error) => { console.error(error); process.exitCode = 1; });
