// ============================================================
// Métadonnées SEO — source unique de vérité.
// Utilisée à la fois par :
//   - scripts/prerender.mjs  (HTML statique généré au build)
//   - src/components/SEO.jsx (mise à jour lors de la navigation)
// Toute nouvelle page/route doit être décrite ici.
// ============================================================
import articles from "../data/articles.js";

export const SITE = {
  name: "BatLife",
  url: "https://blog.batlife.app",
  defaultTitle: "BatLife — Santé & autonomie de votre batterie VAE & trottinette",
  defaultDescription:
    "BatLife prolonge la durée de vie de votre batterie de vélo ou trottinette électrique. Guides gratuits : hivernage, calibration, SoH, installation iPhone & Android.",
  defaultImage: "/og-cover.png",
  locale: "fr_FR",
};

const abs = (p) => new URL(p, SITE.url).href;

/**
 * Retourne les métadonnées complètes d'une route (chemin sans origine).
 * { title, description, canonical, robots, ogType, image, publishedTime, jsonld }
 */
export function headForRoute(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const canonical = abs(path);

  const base = {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
    canonical,
    robots: "index, follow",
    ogType: "website",
    image: abs(SITE.defaultImage),
    publishedTime: null,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: abs("/"),
      description: SITE.defaultDescription,
      inLanguage: "fr-FR",
    },
  };

  if (path === "/") return base;

  if (path === "/blog") {
    const title = `Blog : guides batterie VAE & trottinette | ${SITE.name}`;
    const description =
      "Tutoriels et conseils d'entretien pour prolonger la durée de vie de votre batterie : hivernage, calibration, SoH, installation de l'app.";
    return {
      ...base,
      title,
      description,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: `Le blog ${SITE.name}`,
        url: canonical,
        description,
        inLanguage: "fr-FR",
        blogPost: [...articles]
          .sort((a, b) => b.date.localeCompare(a.date))
          .map((a) => ({
            "@type": "BlogPosting",
            headline: a.title,
            url: abs(`/blog/${a.slug}`),
            datePublished: a.date,
          })),
      },
    };
  }

  const match = path.match(/^\/blog\/([^/]+)$/);
  const article = match && articles.find((a) => a.slug === match[1]);
  if (article) {
    return {
      ...base,
      title: `${article.title} | ${SITE.name}`,
      description: article.description,
      ogType: "article",
      publishedTime: article.date,
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        image: abs(SITE.defaultImage),
        inLanguage: "fr-FR",
        author: { "@type": "Organization", name: SITE.name, url: abs("/") },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          logo: { "@type": "ImageObject", url: abs("/favicon.svg") },
        },
        mainEntityOfPage: canonical,
      },
    };
  }

  // Route inconnue → page 404 (non indexable)
  return {
    ...base,
    title: `Page introuvable | ${SITE.name}`,
    robots: "noindex, nofollow",
    jsonld: null,
  };
}
