import { useLocation, Link } from "react-router-dom";
import articles from "../data/articles";

const pairs = {
  "batterie-vae-se-decharge-toute-seule": "ebike-battery-drains-itself",
  "verifier-batterie-vae-occasion": "check-used-ebike-battery",
  "consommation-batterie-vae-wh-km": "measure-reduce-ebike-wh-km-consumption",
  "duree-vie-batterie-vae": "ebike-battery-lifespan",
  "installer-batlife-iphone-android": "install-batlife-iphone-android",
  "calibrer-sa-batterie-vae": "calibrate-ebike-battery",
  "hivernage-batterie-vae": "ebike-battery-winter-storage",
  "comprendre-le-soh": "understand-ebike-battery-soh",
};

// Map dans les deux sens (FR -> EN et EN -> FR)
const map = { ...pairs };
Object.entries(pairs).forEach(([fr, en]) => { map[en] = fr; });

export default function LanguageSwitcher() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\/+|\/+$/g, "") || "/";

  // 1. Si on est sur un article traduit : on affiche le bouton spécifique (ex: 🌐 EN)
  if (map[slug]) {
    const current = articles.find(a => a.slug === slug);
    const isFr = current?.lang === "fr";
    
    return (
      <Link
        to={`/${map[slug]}`}
        title={isFr ? "Read in English" : "Lire en français"}
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold"
        style={{
          background: "rgba(56,189,248,0.1)",
          border: "0.5px solid rgba(56,189,248,0.3)",
          color: "var(--accent-cyan)",
        }}
      >
        🌐 {isFr ? "EN" : "FR"}
      </Link>
    );
  }

  // 2. Si on est sur l'accueil (/) ou la liste des articles (/articles)
  if (slug === "/" || slug === "articles") {
    return (
      <Link
        to="/articles"
        title="Voir les articles en français et en anglais"
        className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold"
        style={{
          background: "rgba(56,189,248,0.1)",
          border: "0.5px solid rgba(56,189,248,0.3)",
          color: "var(--accent-cyan)",
        }}
      >
        🌐 EN / FR
      </Link>
    );
  }

  return null;
}