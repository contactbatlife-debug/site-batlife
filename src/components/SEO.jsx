import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { headForRoute, SITE } from "../lib/seo";

// Met à jour <head> lors de la navigation côté client.
// Au chargement initial, les balises correctes sont DÉJÀ dans le HTML
// grâce au pré-rendu (scripts/prerender.mjs) : ce composant ne fait
// que les maintenir à jour quand on navigue sans recharger la page.

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

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const head = headForRoute(pathname);

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
