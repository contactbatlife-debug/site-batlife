import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import articles from "../data/articles";
import ArticleCard, { formatDate } from "../components/ArticleCard";
import VideoEmbed from "../components/VideoEmbed";

function Block({ block }) {
  switch (block.type) {
    case "h2":
      return <h2 className="text-lg font-bold mt-8 mb-3" style={{ color: "var(--text-primary)" }}>{block.text}</h2>;
    case "p":
      return <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{block.text}</p>;
    case "list":
      return (
        <ul className="space-y-2 mb-4 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              <span style={{ color: "var(--accent-cyan)" }}>▸</span>{item}
            </li>
          ))}
        </ul>
      );
    case "tip":
      return (
        <div className="rounded-xl p-4 mb-4 flex gap-3" style={{ background: "rgba(74,222,128,0.06)", border: "0.5px solid rgba(74,222,128,0.25)" }}>
          <span>💡</span>
          <p className="text-sm leading-relaxed" style={{ color: "var(--accent-green)" }}>{block.text}</p>
        </div>
      );
    case "warning":
      return (
        <div className="rounded-xl p-4 mb-4 flex gap-3" style={{ background: "rgba(245,158,11,0.08)", border: "0.5px solid rgba(245,158,11,0.3)" }}>
          <span>⚠️</span>
          <p className="text-sm leading-relaxed" style={{ color: "#fbbf24" }}>{block.text}</p>
        </div>
      );
    case "video":
      return <VideoEmbed videoId={block.videoId} title={block.title} />;
    default:
      return null;
  }
}

export default function Article() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const canShare = typeof navigator !== "undefined" && !!navigator.share;

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        setProgress(max > 0 ? (el.scrollTop / max) * 100 : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [slug]);

  if (!article) {
    return (
      <div className="text-center py-20">
        <div className="text-4xl mb-4">🔍</div>
        <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>Cet article n'existe pas.</p>
        <Link to="/blog" className="text-sm font-semibold" style={{ color: "var(--accent-cyan)" }}>← Retour au blog</Link>
      </div>
    );
  }

  const related = articles.filter(a => a.slug !== slug).slice(0, 2);
  const url = typeof window !== "undefined" ? window.location.href : "";

  const copyLink = () => {
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {});
  };

  return (
    <article className="pb-8">
      {/* Barre de progression de lecture */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-[60]" style={{ background: "rgba(255,255,255,0.05)" }}>
        <div className="h-full transition-[width] duration-150" style={{ width: `${progress}%`, background: "linear-gradient(90deg,#38bdf8,#818cf8,#4ade80)" }} />
      </div>

      <Link to="/blog" className="inline-block text-sm mb-6 fade-up" style={{ color: "var(--accent-cyan)" }}>← Tous les articles</Link>

      <header className="mb-6 fade-up" style={{ animationDelay: "60ms" }}>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">{article.icon}</span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: "rgba(56,189,248,0.1)", border: "0.5px solid rgba(56,189,248,0.3)", color: "var(--accent-cyan)" }}>
            {article.category}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black leading-tight mb-3" style={{ color: "var(--text-primary)" }}>{article.title}</h1>
        <p className="text-xs" style={{ color: "var(--text-label)" }}>{formatDate(article.date)} · {article.readTime} min de lecture</p>
      </header>

      <div className="fade-up" style={{ animationDelay: "120ms" }}>
        {article.content.map((block, i) => <Block key={i} block={block} />)}
      </div>

      {/* Partage */}
      <div className="flex flex-wrap items-center gap-2 mt-8 pt-6" style={{ borderTop: "0.5px solid rgba(255,255,255,0.08)" }}>
        <span className="text-xs mr-1" style={{ color: "var(--text-label)" }}>Partager :</span>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
          target="_blank" rel="noopener noreferrer"
          className="px-3 py-1.5 rounded-lg text-xs font-semibold"
          style={{ background: "rgba(56,189,248,0.1)", border: "0.5px solid rgba(56,189,248,0.3)", color: "var(--accent-cyan)" }}>
          in LinkedIn
        </a>
        <button onClick={copyLink} className="px-3 py-1.5 rounded-lg text-xs font-semibold"
          style={{ background: "rgba(255,255,255,0.05)", border: "0.5px solid rgba(255,255,255,0.12)", color: "var(--text-secondary)" }}>
          {copied ? "✓ Lien copié" : "🔗 Copier le lien"}
        </button>
        {canShare && (
          <button onClick={() => navigator.share({ title: article.title, url }).catch(() => {})}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold"
            style={{ background: "rgba(168,85,247,0.1)", border: "0.5px solid rgba(168,85,247,0.3)", color: "var(--accent-purple)" }}>
            📤 Partager
          </button>
        )}
      </div>

      {/* Articles liés */}
      {related.length > 0 && (
        <section className="mt-10">
          <h2 className="text-lg font-bold mb-4" style={{ color: "var(--text-primary)" }}>À lire aussi</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {related.map((a, i) => <ArticleCard key={a.slug} article={a} delay={i * 60} />)}
          </div>
        </section>
      )}
    </article>
  );
}