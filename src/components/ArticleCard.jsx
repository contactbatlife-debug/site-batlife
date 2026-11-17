import { Link } from "react-router-dom";

export function formatDate(date) {
  // "T12:00:00" évite le décalage d'un jour dans les fuseaux derrière UTC
  // (new Date("2026-11-15") = minuit UTC → affichait "14 novembre" en Amérique).
  return new Date(`${date}T12:00:00`).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArticleCard({ article, delay = 0 }) {
  return (
    <Link to={`/blog/${article.slug}`}
      className="block rounded-2xl p-4 transition-all hover:-translate-y-0.5 fade-up"
      style={{
        background: "var(--bg-card)", border: "var(--border-card)", borderTop: "var(--border-top)",
        boxShadow: "var(--shadow-card)", animationDelay: `${delay}ms`,
      }}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl">{article.icon}</span>
        <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
          style={{ background: "rgba(56,189,248,0.1)", border: "0.5px solid rgba(56,189,248,0.3)", color: "var(--accent-cyan)" }}>
          {article.category}
        </span>
      </div>
      <h3 className="font-semibold leading-snug mb-1" style={{ color: "var(--text-primary)" }}>{article.title}</h3>
      <p className="text-sm leading-snug mb-3" style={{ color: "var(--text-secondary)" }}>{article.description}</p>
      <div className="flex items-center justify-between text-xs" style={{ color: "var(--text-label)" }}>
        <span>{formatDate(article.date)} · {article.readTime} min</span>
        <span style={{ color: "var(--accent-cyan)" }}>Lire →</span>
      </div>
    </Link>
  );
}