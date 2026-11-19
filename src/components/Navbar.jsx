import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md"
      style={{ background: "rgba(10,24,48,0.85)", borderBottom: "0.5px solid rgba(255,255,255,0.08)" }}>
      <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl">🔋</span>
          <span className="text-lg font-bold" style={{
            background: "linear-gradient(135deg,#38bdf8,#818cf8)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>BatLife</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to="/" style={{ color: "var(--text-secondary)" }}>Accueil</Link>
          <Link to="/articles" style={{ color: "var(--text-secondary)" }}>Blog</Link>
          <a href="https://batlife.app" target="_blank" rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg font-semibold"
            style={{ background: "linear-gradient(135deg,rgba(56,189,248,0.2),rgba(99,102,241,0.15))", border: "0.5px solid rgba(56,189,248,0.4)", color: "var(--accent-cyan)" }}>
            Ouvrir l'app
          </a>
        </nav>
      </div>
    </header>
  );
}