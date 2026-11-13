export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-center" style={{ borderTop: "0.5px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="text-xl">🔋</span>
        <span className="font-bold" style={{
          background: "linear-gradient(135deg,#38bdf8,#818cf8)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>BatLife</span>
      </div>
            <div className="flex items-center justify-center gap-5 mb-4 text-sm">
        <a href="https://linktr.ee/batlife.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-green)" }}>Linktree</a>
        <a href="https://www.instagram.com/batlife.app" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent-purple)" }}>Instagram</a>
        <a href="mailto:contact.batlife@gmail.com" style={{ color: "var(--text-secondary)" }}>Contact</a>
      </div>
      <p className="text-xs" style={{ color: "var(--text-muted)" }}>© 2026 Marc P. — Tous droits réservés</p>
    </footer>
  );
}