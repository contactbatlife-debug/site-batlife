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

// ➕ NOUVEAU : Correspondance entre les slugs FR et EN pour les balises hreflang
const slugTranslations = {
  "batterie-vae-se-decharge-toute-seule": "ebike-battery-drains-itself",
  "ebike-battery-drains-itself": "batterie-vae-se-decharge-toute-seule",
  "verifier-batterie-vae-occasion": "check-used-ebike-battery",
  "check-used-ebike-battery": "verifier-batterie-vae-occasion",
  "consommation-batterie-vae-wh-km": "measure-reduce-ebike-wh-km-consumption",
  "measure-reduce-ebike-wh-km-consumption": "consommation-batterie-vae-wh-km",
  "duree-vie-batterie-vae": "ebike-battery-lifespan",
  "ebike-battery-lifespan": "duree-vie-batterie-vae",
  "installer-batlife-iphone-android": "install-batlife-iphone-android",
  "install-batlife-iphone-android": "installer-batlife-iphone-android",
  "calibrer-sa-batterie-vae": "calibrate-ebike-battery",
  "calibrate-ebike-battery": "calibrer-sa-batterie-vae",
  "hivernage-batterie-vae": "ebike-battery-winter-storage",
  "ebike-battery-winter-storage": "hivernage-batterie-vae",
  "comprendre-le-soh": "understand-ebike-battery-soh",
  "understand-ebike-battery-soh": "comprendre-le-soh",
};

/**
 * Retourne les métadonnées complètes d'une route (chemin sans origine).
 * { title, description, canonical, robots, ogType, image, publishedTime, alternates, jsonld }
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
    alternates: [], // ➕ NOUVEAU
    jsonld: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: abs("/"),
      description: SITE.defaultDescription,
      inLanguage: "fr-FR",
    },
  };

  // 1. Page d'accueil
  if (path === "/") return base;

  // 2. Page de liste des articles
  if (path === "/articles") {
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
            url: abs(`/${a.slug}`),
            datePublished: a.date,
          })),
      },
    };
  }

  // 3. Page d'article individuel
  const slug = path.startsWith("/") ? path.substring(1) : path;
  const article = articles.find((a) => a.slug === slug);

  if (article) {
    const isFr = article.lang === "fr";
    const counterpartSlug = slugTranslations[slug];
    
    // ➕ NOUVEAU : Génération des balises hreflang (alternates)
    const alternates = [];
    if (counterpartSlug) {
      // Lien vers la version alternative (EN si on est en FR, FR si on est en EN)
      alternates.push({
        hreflang: isFr ? "en" : "fr",
        href: abs(`/${counterpartSlug}`),
      });
      // Lien x-default (indique à Google la version principale, ici le FR)
      alternates.push({
        hreflang: "x-default",
        href: isFr ? canonical : abs(`/${counterpartSlug}`),
      });
    }

    return {
      ...base,
      title: `${article.title} | ${SITE.name}`,
      description: article.description,
      ogType: "article",
      publishedTime: article.date,
      alternates, // ➕ NOUVEAU : on retourne le tableau
      jsonld: {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        image: abs(SITE.defaultImage),
        inLanguage: isFr ? "fr-FR" : "en-US", // ✅ CORRECTION : Langue dynamique selon l'article
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

  // 4. Route inconnue → page 404 (non indexable)
  return {
    ...base,
    title: `Page introuvable | ${SITE.name}`,
    robots: "noindex, nofollow",
    jsonld: null,
  };
}