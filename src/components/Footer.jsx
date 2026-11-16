export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-center" style={{ borderTop: "0.5px solid rgba(255,255,255,0.08)" }}>
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="text-xl">🔋</span>
        <span className="font-bold" style={{
          background: "linear-gradient(135deg,#38bdf8,#818cf8)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
        }}>BatLife</span>
        {/* ✅ Compatibilité appareils */}
<div className="mx-auto mt-6 max-w-2xl rounded-xl border border-sky-400/20 bg-sky-400/5 px-4 py-3 text-center">
    <p className="text-xs leading-relaxed text-slate-300">
    📱 <span className="font-semibold text-sky-300">Compatible iPhone, Android & ordinateur</span>
    {" "}— BatLife est une application web (PWA). Sur iPhone : Safari → « Ajouter à l'écran d'accueil ». Sur Android : Chrome → « Installer l'application » (ou Play Store). Sur ordinateur : Chrome/Edge. Données 100 % locales, gratuit et sans pub.
  </p>
</div>
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