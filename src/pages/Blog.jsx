import { useMemo, useState } from "react";
import articles from "../data/articles";
import ArticleCard from "../components/ArticleCard";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Tous");

  const categories = useMemo(() => ["Tous", ...new Set(articles.map(a => a.category))], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return [...articles]
      .sort((a, b) => b.date.localeCompare(a.date))
      .filter(a => category === "Tous" || a.category === category)
      .filter(a => !q || a.title.toLowerCase().includes(q) || a.description.toLowerCase().includes(q));
  }, [query, category]);

  return (
    <div className="space-y-6 pb-8">
      <header className="fade-up">
        <h1 className="text-2xl font-black mb-2" style={{
          background: "linear-gradient(135deg,#38bdf8,#818cf8)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>Le blog BatLife</h1>
        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Guides, tutoriels et conseils pour prolonger la durée de vie de votre batterie.
        </p>
      </header>

      {/* Recherche + filtres */}
      <div className="space-y-3 fade-up" style={{ animationDelay: "80ms" }}>
        <input type="search" value={query} onChange={e => setQuery(e.target.value)}
          placeholder="Rechercher un article…"
          className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
          style={{ background: "var(--bg-input)", border: "var(--border-input)", color: "var(--text-primary)" }} />
        <div className="flex flex-wrap gap-2">
          {categories.map(c => (
            <button key={c} onClick={() => setCategory(c)}
              className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
              style={category === c
                ? { background: "linear-gradient(135deg,rgba(56,189,248,0.25),rgba(99,102,241,0.2))", border: "0.5px solid rgba(56,189,248,0.5)", color: "var(--accent-cyan)" }
                : { background: "rgba(255,255,255,0.04)", border: "0.5px solid rgba(255,255,255,0.1)", color: "var(--text-secondary)" }}>
              {c}
            </button>
          ))}
        </div>
        <p className="text-xs" style={{ color: "var(--text-label)" }}>
          {filtered.length} article{filtered.length > 1 ? "s" : ""}
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 gap-3">
          {filtered.map((a, i) => <ArticleCard key={a.slug} article={a} delay={i * 50} />)}
        </div>
      ) : (
        <div className="text-center py-12 rounded-2xl" style={{ background: "var(--bg-card)", border: "var(--border-card)" }}>
          <div className="text-3xl mb-2">🔍</div>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Aucun article ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  );
}