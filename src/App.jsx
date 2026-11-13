import { useEffect } from "react";
import { Routes, Route, useLocation, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Article from "./pages/Article";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="text-center py-20 fade-up">
      <div className="text-5xl mb-4">🔍</div>
      <h1 className="text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>Page introuvable</h1>
      <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>Cette page n'existe pas ou a été déplacée.</p>
      <Link to="/" className="px-4 py-2 rounded-xl font-semibold text-sm"
        style={{ background: "linear-gradient(135deg,rgba(56,189,248,0.2),rgba(99,102,241,0.15))", border: "0.5px solid rgba(56,189,248,0.4)", color: "var(--accent-cyan)" }}>
        ← Retour à l'accueil
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="aurora aurora-1" />
        <div className="aurora aurora-2" />
      </div>

      <ScrollToTop />
      <Navbar />
      <main className="relative flex-1 w-full max-w-3xl mx-auto px-4 pt-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}