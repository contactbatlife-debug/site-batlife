// ============================================================
// PRÉ-RENDU STATIQUE (SSG) — exécuté après `vite build`.
// ============================================================
import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import articles from "../src/data/articles.js";
import { SITE, headForRoute } from "../src/lib/seo.js";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, "dist");
const template = fs.readFileSync(path.join(dist, "index.html"), "utf-8");

const escAttr = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const escXml = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function fillTemplate(html, head, markup) {
  let out = html;
  const sub = (pattern, replacement) => {
    const found = typeof pattern === "string" ? out.includes(pattern) : pattern.test(out);
    if (!found) throw new Error(`Motif introuvable dans le gabarit : ${pattern}`);
    out = out.replace(pattern, typeof replacement === "function" ? replacement : () => replacement);
  };

  sub(/<title>[\s\S]*?<\/title>/, `<title>${escAttr(head.title)}</title>`);
  sub(/(<meta name="description" content=")[^"]*(")/, (m, a, b) => `${a}${escAttr(head.description)}${b}`);
  sub(/(<meta name="robots" content=")[^"]*(")/, (m, a, b) => `${a}${head.robots}${b}`);
  sub(/(<link rel="canonical" href=")[^"]*(")/, (m, a, b) => `${a}${escAttr(head.canonical)}${b}`);

  for (const [prop, val] of [
    ["og:type", head.ogType],
    ["og:title", head.title],
    ["og:description", head.description],
    ["og:url", head.canonical],
    ["og:image", head.image],
  ]) {
    sub(new RegExp(`(<meta property="${prop}" content=")[^"]*(")`), (m, a, b) => `${a}${escAttr(val)}${b}`);
  }
  for (const [name, val] of [
    ["twitter:title", head.title],
    ["twitter:description", head.description],
    ["twitter:image", head.image],
  ]) {
    sub(new RegExp(`(<meta name="${name}" content=")[^"]*(")`), (m, a, b) => `${a}${escAttr(val)}${b}`);
  }

  const ld = head.jsonld ? JSON.stringify(head.jsonld, null, 2).replace(/</g, "\\u003c") : "";
  sub(
    /(<script type="application\/ld\+json" id="seo-jsonld">)[\s\S]*?(<\/script>)/,
    (m, a, b) => `${a}\n${ld}\n    ${b}`
  );

  if (head.publishedTime) {
    sub("</head>", `  <meta property="article:published_time" content="${head.publishedTime}" />\n  </head>`);
  }

  sub('<div id="root"></div>', `<div id="root">${markup}</div>`);
  return out;
}

const vite = await createServer({
  root,
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
  ssr: {
    noExternal: ["react-router", "react-router-dom"],
    resolve: { conditions: ["module-sync", "module", "node", "development|production"] },
  },
});
const { render } = await vite.ssrLoadModule("/src/entry-server.jsx");

// ✅ Correction : /articles et /:slug (plus de /blog/)
// ✅ Routes avec le préfixe /fr/
// ✅ Retour à la normale : routes à la racine
const routes = ["/", "/articles", ...articles.map((a) => `/${a.slug}`)];
for (const route of routes) {
  const head = headForRoute(route);
  const html = fillTemplate(template, head, render(route));
  const file = route === "/" ? "index.html" : path.join(route.slice(1), "index.html");
  const dest = path.join(dist, file);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, html);
  console.log(`  ✔ ${route.padEnd(42)} → dist/${file} (${(html.length / 1024).toFixed(1)} Ko)`);
}

const html404 = fillTemplate(template, headForRoute("/404"), render("/404"));
fs.writeFileSync(path.join(dist, "404.html"), html404);
console.log(`  ✔ (404)                                      → dist/404.html`);

await vite.close();

// --- Flux RSS -------------------------------------------------
const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));
const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escXml(SITE.defaultTitle)}</title>
    <link>${SITE.url}/</link>
    <atom:link href="${SITE.url}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escXml(SITE.defaultDescription)}</description>
    <language>fr-FR</language>
    <lastBuildDate>${new Date(sorted[0].date + "T12:00:00Z").toUTCString()}</lastBuildDate>
${sorted
      .map(
    (a) => `    <item>
      <title>${escXml(a.title)}</title>
      <link>${SITE.url}/${a.slug}</link>
      <guid isPermaLink="true">${SITE.url}/${a.slug}</guid>
      <pubDate>${new Date(a.date + "T12:00:00Z").toUTCString()}</pubDate>
      <category>${escXml(a.category)}</category>
      <description>${escXml(a.description)}</description>
    </item>`
  )
  .join("\n")}
  </channel>
</rss>
`;
fs.writeFileSync(path.join(dist, "rss.xml"), rss);
console.log("  ✔ flux RSS                                   → dist/rss.xml");

// --- Sitemap --------------------------------------------------
const lastmod = sorted[0].date;
const urls = [
  { loc: `${SITE.url}/`, lastmod, priority: "1.0" },
  { loc: `${SITE.url}/articles`, lastmod, priority: "0.9" },
  ...sorted.map((a) => ({ loc: `${SITE.url}/${a.slug}`, lastmod: a.date, priority: "0.8" })),
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(dist, "sitemap.xml"), sitemap);
console.log("  ✔ sitemap                                    → dist/sitemap.xml");

console.log(`\nPré-rendu terminé : ${routes.length} pages + 404 + RSS + sitemap.`);