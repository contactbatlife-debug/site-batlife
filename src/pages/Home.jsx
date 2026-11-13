import { Link } from "react-router-dom";
import articles from "../data/articles";
import ArticleCard from "../components/ArticleCard";

const PLAY_STORE_URL = "https://play.google.com/store/search?q=BatLife&c=apps"; // remplace par ton lien direct
const WEB_APP_URL = "https://batlife.app";

const features = [
  { icon: "🔋", title: "Suivi du SoH", text: "Un indice de santé estimé cycle après cycle, avec indice de confiance." },
  { icon: "🎯", title: "Calibration", text: "Convertissez la tension au repos en charge réelle pour recaler votre jauge." },
  { icon: "❄️", title: "Diagnostic hivernage", text: "La bonne tension de stockage pour passer l'hiver sans vieillir la batterie." },
  { icon: "📄", title: "Certificat PDF", text: "Un historique exportable qui valorise votre vélo à la revente." },
  { icon: "🔒", title: "100 % local", text: "Aucun compte, aucun serveur, aucune donnée collectée. Tout reste sur votre appareil." },
  { icon: "🌍", title: "5 langues", text: "Français, anglais, espagnol, allemand et néerlandais." },
];

const stats = [
  { value: "280+", label: "modèles de véhicules" },
  { value: "5", label: "langues" },
  { value: "0", label: "donnée collectée" },
  { value: "100 %", label: "gratuit, sans pub" },
];

function BatteryHero() {
  return (
    <div className="relative shrink-0 fade-up" style={{ animationDelay: "150ms" }}>
      <div className="absolute inset-0 rounded-full battery-halo" aria-hidden />
      <svg width="150" height="190" viewBox="0 0 150 190" role="img" aria-label="Batterie BatLife en bonne santé">
        <defs>
          <linearGradient id="batBody" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#a3e635" />
          </linearGradient>
        </defs>
        <rect x="55" y="6" width="40" height="16" rx="5" fill="#9ca3af" />
        <rect x="25" y="22" width="100" height="160" rx="18" fill="url(#batBody)" />
        <rect x="25" y="22" width="100" height="160" rx="18" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
        <path d="M75 52 v36 M57 70 h36" stroke="#fff" strokeWidth="12" strokeLinecap="round" />
        <rect x="57" y="132" width="36" height="12" rx="6" fill="#fff" />
      </svg>
    </div>
  );
}

export default function Home() {
  const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <div className="space-y-12 pb-8">
      {/* Hero */}
      <section className="flex flex-col sm:flex-row items-center gap-8 pt-4">
        <div className="flex-1 fade-up">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4"
            style={{ background: "rgba(74,222,128,0.1)", border: "0.5px solid rgba(74,222,128,0.3)", color: "var(--accent-green)" }}>
            Gratuit · Sans pub · Sans compte
          </span>
          <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4" style={{
            background: "linear-gradient(135deg,#38bdf8,#818cf8,#4ade80)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Prenez soin de votre batterie, prolongez sa vie.
          </h1>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            BatLife suit la santé de votre batterie de vélo ou trottinette électrique, vous guide pour la charger au bon moment
            et vous aide à préserver son autonomie année après année.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={WEB_APP_URL} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg,#38bdf8,#818cf8)", color: "#0a1830", boxShadow: "0 0 20px rgba(56,189,248,0.25)" }}>
              🔋 Ouvrir l'app web
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.06)", border: "0.5px solid rgba(255,255,255,0.15)", color: "var(--text-primary)" }}>
              ▶ Play Store
            </a>
          </div>
        </div>
        <BatteryHero />
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s, i) => (
          <div key={s.label} className="rounded-2xl p-4 text-center fade-up"
            style={{ background: "var(--bg-card)", border: "var(--border-card)", animationDelay: `${i * 60}ms` }}>
            <p className="text-2xl font-black" style={{ color: "var(--accent-cyan)" }}>{s.value}</p>
            <p className="text-xs mt-1" style={{ color: "var(--text-label)" }}>{s.label}</p>
          </div>
        ))}
      </section>

      {/* Fonctionnalités */}
      <section>
        <h2 className="text-lg font-bold mb-4 fade-up" style={{ color: "var(--text-primary)" }}>Ce que BatLife fait pour vous</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {features.map((f, i) => (
            <div key={f.title} className="rounded-2xl p-4 fade-up"
              style={{ background: "var(--bg-card)", border: "var(--border-card)", borderTop: "var(--border-top)", animationDelay: `${i * 60}ms` }}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{f.icon}</span>
                <h3 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{f.title}</h3>
              </div>
              <p className="text-sm leading-snug" style={{ color: "var(--text-secondary)" }}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Derniers articles */}
      <section>
        <div className="flex items-center justify-between mb-4 fade-up">
          <h2 className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>Derniers articles</h2>
          <Link to="/blog" className="text-sm font-semibold" style={{ color: "var(--accent-cyan)" }}>Tout le blog →</Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {latest.map((a, i) => <ArticleCard key={a.slug} article={a} delay={i * 60} />)}
        </div>
      </section>

      {/* Confidentialité */}
      <section className="rounded-2xl p-5 fade-up"
        style={{ background: "rgba(74,222,128,0.05)", border: "0.5px solid rgba(74,222,128,0.2)" }}>
        <h2 className="font-semibold text-sm mb-2" style={{ color: "var(--accent-green)" }}>🔒 Vos données restent chez vous</h2>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
          BatLife fonctionne entièrement en local sur votre appareil. Aucun compte, aucun tracking, aucun serveur.
          Vous pouvez exporter une sauvegarde JSON ou CSV à tout moment pour changer d'appareil en toute sérénité.
        </p>
      </section>
    </div>
  );
}