import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { headForRoute, SITE } from "../lib/seo";

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function removeMeta(attr, key) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove();
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// ➕ NOUVEAU : Fonction pour gérer les balises hreflang
function upsertAlternate(href, hrefLang) {
  let el = document.head.querySelector(`link[rel="alternate"][hreflang="${hrefLang}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", hrefLang);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const head = headForRoute(pathname);

    // ➕ NOUVEAU : Nettoyer les anciennes balises alternate avant d'ajouter les nouvelles
    document.head.querySelectorAll('link[rel="alternate"]').forEach(el => el.remove());

    document.title = head.title;
    upsertMeta("name", "description", head.description);
    upsertMeta("name", "robots", head.robots);
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:locale", SITE.locale);
    upsertMeta("property", "og:type", head.ogType);
    upsertMeta("property", "og:title", head.title);
    upsertMeta("property", "og:description", head.description);
    upsertMeta("property", "og:url", head.canonical);
    upsertMeta("property", "og:image", head.image);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", head.title);
    upsertMeta("name", "twitter:description", head.description);
    upsertMeta("name", "twitter:image", head.image);
    upsertLink("canonical", head.canonical);

    // ➕ NOUVEAU : Injecter les balises hreflang si elles existent
    if (head.alternates && Array.isArray(head.alternates)) {
      head.alternates.forEach(alt => upsertAlternate(alt.href, alt.hreflang));
    }

    if (head.publishedTime) {
      upsertMeta("property", "article:published_time", head.publishedTime);
    } else {
      removeMeta("property", "article:published_time");
    }

    const ld = document.getElementById("seo-jsonld");
    if (ld) ld.textContent = head.jsonld ? JSON.stringify(head.jsonld) : "";
  }, [pathname]);

  return null;
}