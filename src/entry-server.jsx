// Point d'entrée pour le pré-rendu statique (utilisé par scripts/prerender.mjs).
// Rend l'application en HTML pour une URL donnée, sans navigateur.
import { renderToStaticMarkup } from "react-dom/server";
import { StaticRouter } from "react-router";
import App from "./App";

export function render(url) {
  return renderToStaticMarkup(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
