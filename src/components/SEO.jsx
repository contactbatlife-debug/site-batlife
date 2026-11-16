import { useEffect } from "react";

const SITE = {
  name: "BatLife",
  url: "https://blog.batlife.app",
  defaultTitle: "BatLife — Santé & autonomie de votre batterie VAE & trottinette",
  defaultDescription: "Guides gratuits pour prolonger la vie de votre batterie VAE ou trottinette : hivernage, calibration, SoH, installation iPhone & Android.",
  defaultImage: "/og-cover.png",
  locale: "fr_FR",
};

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) { el = document.createElement("meta"); el.setAttribute(attr, key); document.head.appendChild(el); }
  el.setAttribute("content", content);
}
function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) { el = document.createElement("link"); el.setAttribute("rel", rel); document.head.appendChild(el); }
  el.setAttribute("href", href);
}
function setJsonLd(obj) {
  let el = document.getElementById("seo-jsonld");
  if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = "seo-jsonld"; document.head.appendChild(el); }
  el.textContent = JSON.stringify(obj);
}

export default function SEO({ title, description, image, type = "website", article = null, noindex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE.name}` : SITE.defaultTitle;
    const desc = description || SITE.defaultDescription;
    const img = new URL(image || SITE.defaultImage, SITE.url).href;
    const canonical = (window.location.origin + window.location.pathname).replace(/\/+$/, "") || SITE.url;

    document.title = fullTitle;
    upsertMeta("name", "description", desc);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:locale", SITE.locale);
    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:image", img);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", desc);
    upsertMeta("name", "twitter:image", img);
    upsertLink("canonical", canonical);

    setJsonLd(article ? {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: article.date,
      image: img,
      inLanguage: "fr-FR",
      author: { "@type": "Organization", name: SITE.name, url: SITE.url },
      publisher: { "@type": "Organization", name: SITE.name, logo: { "@type": "ImageObject", url: new URL("/favicon.svg", SITE.url).href } },
      mainEntityOfPage: canonical,
    } : {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
      description: desc,
      inLanguage: "fr-FR",
    });
  }, [title, description, image, type, article, noindex]);

  return null;
}