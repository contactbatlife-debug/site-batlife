# ✅ Corrections SEO — 16 novembre 2026

## Problèmes corrigés

| # | Problème (audit du 16/11) | Correction |
|---|---|---|
| 1 | Toutes les pages servaient une coquille HTML vide de 2,8 Ko (contenu rendu uniquement en JavaScript) | **Pré-rendu statique au build** : chaque page est désormais un vrai fichier HTML complet (12–16 Ko), lisible sans JavaScript |
| 2 | La canonical de chaque article pointait vers l'accueil + mêmes title/description/OG partout | **Métadonnées uniques par page** : title, description, canonical auto-référente, Open Graph, Twitter Card, `article:published_time`, JSON-LD (`WebSite` / `Blog` / `Article`) |
| 3 | Soft 404 : toutes les URL inventées répondaient « 200 OK » | **`dist/404.html`** en `noindex` — Cloudflare Pages (et Netlify) le servent automatiquement avec un vrai statut **404** |
| 4 | Pas de flux RSS, sitemap manuel | **`rss.xml` et `sitemap.xml` générés automatiquement** à chaque build depuis `src/data/articles.js` |

### Bonus corrigés au passage
- **Le composant `SEO.jsx` n'était branché nulle part** → il est maintenant actif dans `App.jsx` et met à jour le `<head>` à chaque navigation (il s'appuie sur `src/lib/seo.js`, la même source que le pré-rendu : jamais de divergence).
- **Bug de date** : `formatDate` affichait la veille pour les visiteurs derrière UTC (ex. « 14 novembre » au lieu du 15). Corrigé avec `T12:00:00`.
- **`.gitignore`** : un caractère BOM invisible en début de fichier empêchait d'ignorer `node_modules/` → réécrit proprement. ⚠️ `node_modules` (81 Mo) est déjà commité dans le dépôt : voir la commande ci-dessous pour le retirer.

## Fichiers modifiés / ajoutés

| Fichier | Changement |
|---|---|
| `scripts/prerender.mjs` | **Nouveau** — pré-rendu des 6 pages + 404 + RSS + sitemap |
| `src/lib/seo.js` | **Nouveau** — métadonnées par route (source unique de vérité) |
| `src/entry-server.jsx` | **Nouveau** — rendu serveur de l'app (StaticRouter) |
| `src/components/SEO.jsx` | Réécrit : utilise `headForRoute`, actif à la navigation |
| `src/App.jsx` | Ajout de `<SEO />` |
| `src/components/ArticleCard.jsx` | Correctif du décalage de date |
| `index.html` | `id="seo-jsonld"` sur le JSON-LD + lien RSS |
| `package.json` | `build` = `vite build && node scripts/prerender.mjs` |
| `.gitignore` | Réécrit sans BOM |

**Aucun changement visuel ni fonctionnel** : mêmes composants, même style, même navigation. Le HTML pré-rendu est simplement remplacé par React au chargement, comme avant.

## Déploiement (depuis votre PC)

1. **Remplacez les fichiers** de votre dossier `site-batlife` par ceux du zip (gardez votre dossier `.git` — le zip n'en contient pas).
2. Dans le dossier du projet :
   ```bash
   git rm -r --cached node_modules     # retire les 81 Mo du dépôt (fichiers conservés sur disque)
   npm install                         # si besoin
   npm run build                       # vérifie que tout passe (6 pages + 404 + RSS + sitemap)
   git add -A
   git commit -m "SEO : pré-rendu statique, métadonnées par article, vrais 404, RSS"
   git push
   ```
3. **Hébergement** : si Cloudflare Pages est connecté au dépôt GitHub, le déploiement est automatique. Vérifiez dans le tableau de bord que :
   - commande de build = **`npm run build`** (pas `vite build` seul !)
   - répertoire de sortie = **`dist`**
   - rien d'autre à configurer : `404.html` est pris en charge nativement.
   *(Si vous êtes chez Netlify : idem, automatique. Autre hébergeur : dites-le-moi.)*

## Vérifications après mise en ligne

- **Clic droit → « Afficher le code source »** sur un article : le texte et le titre de l'article doivent être visibles dans le HTML.
- **Google Search Console** : outil « Inspection d'URL » sur chaque article → « Demander une indexation » ; renvoyez le sitemap (`sitemap.xml`).
- **Aperçus sociaux** : les anciens partages sont en cache. Forcez le re-scraping via le [Sharing Debugger de Facebook](https://developers.facebook.com/tools/debug/) (WhatsApp utilise le même cache) et le [Post Inspector de LinkedIn](https://www.linkedin.com/post-inspector/).
- Testez une URL inventée (ex. `/blog/test-404`) : elle doit afficher « Page introuvable ».

## Pour ajouter un article plus tard

Ajoutez simplement son objet dans `src/data/articles.js` (même format que les 4 existants) :
le build génère automatiquement sa page HTML, ses métadonnées, son entrée sitemap et son entrée RSS. **Rien d'autre à faire.**

## Piste d'amélioration (optionnel, plus tard)

Tous les articles partagent `og-cover.png` comme image de partage. Pour une image unique par article : ajoutez un champ `image` dans les données et générez des visuels 1200×630 — je peux m'en occuper.
