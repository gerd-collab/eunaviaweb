# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Ergänzt die Workspace-Datei `/home/gerd/CLAUDE.md`. Hier stehen nur die Abweichungen und Besonderheiten dieses Repos.

## Was das ist

Statische Marketing-One-Pager-Website der **Dachmarke Eunavia** ("Human Centered" — _Der gute Weg zum gelingenden Leben_). Stellt die Marke und ihre fünf Produkt-Standbeine vor (Arbeitsblätter, Fahrerwohl, StopSmoking, Klar, Leben), die auf eigene Domains verlinken. **Kein** App-Code, keine Daten, kein Backend — reine Präsentationsseite.

> Wording: Eunavia ist aktuell ein Ein-Personen-Unternehmen. Das Wort **„Konzern" bewusst nicht** in der Außendarstellung verwenden — ein Konzern zu werden ist das _Ziel_, nicht der Status. Im Public-Copy „Unternehmen" / „Dachmarke" statt „Konzern".

> **Wording: nicht-medizinische Positionierung (Wellness-Pfad).** Die Apps (besonders KLAR & StopSmoking/Rauchfrei) sind bewusst **Selbsthilfe- und Begleit-Apps aus dem Bereich Lebensstil & Wohlbefinden — kein Medizinprodukt, keine DiGA**. In der Außendarstellung **verboten**: „Medizinprodukt", „digitale Gesundheitsanwendung/DiGA", „Gesundheits-App" (als Produktkategorie), „verhaltenstherapeutisch/Therapie", „Sucht(-frei)", „(Alkohol-)Entzug", „Diagnose/Heilung/Behandlung", sowie Pflicht-Zertifizierungen für Medizinprodukte (**BSI TR-03161, ISO 27001, Wirksamkeitsstudie**). **Erlaubt**: „Selbsthilfe", „Begleitung", „Wohlbefinden", „Rauchstopp", „bewährte (Selbsthilfe-)Methoden", freiwillige Belege (DSGVO-Konformität, Penetrationstest/OWASP-MASVS, optionales TÜV-/ePrivacy-Siegel). **Datenkategorie** „Gesundheitsdaten" (Art. 9 DSGVO, Split-Identity-Tresor) bleibt erlaubt — das ist Datenschutz, kein Produkt-Claim. Funktion und Wording müssen zusammenpassen; Rechtstexte vor Veröffentlichung durch Fachjurist:in prüfen lassen.

Markenarchitektur: Eunavia (Dach) → zwei Säulen **Cyberschooling** (Bildung) und **Vivanova** (Gesundheit, _nur Arbeitstitel, nicht final_).

## Commands

```bash
npm run dev      # Vite Dev-Server, Port 5173, öffnet Browser automatisch
npm run build    # Production-Build nach dist/
npm run preview  # dist/ lokal servieren
```

Keine Tests, kein Linter, kein TypeScript konfiguriert — bewusst minimal gehalten.

## Stack & Architektur

Vite 7 (Multi-Page: `index.html` + `fahrerwohl.html` + `datenschutz.html`) + Vanilla HTML/CSS/JS. Quelldateien mit klarer Rolle:

- **`index.html`** — der gesamte Seiteninhalt der Startseite, hartkodiert auf **Deutsch** (Hero mit Video, Manifest, 5 Produkt-`<article>`, Stats, Prinzipien, CTA, Footer). Inhaltliche Änderungen passieren hier. Englisch kommt aus dem Wörterbuch (siehe i18n).
- **`fahrerwohl.html`** — eigenständige Produkt-Unterseite (`/fahrerwohl`), komplett standalone: eigenes inline-`<style>`, eigenes inline reveal-`<script>`, eigene Fonts (Barlow). Nutzt **nicht** `main.js`/`style.css`.
- **`src/config.js`** — `BRAND`-Objekt als **Single Source of Truth** für Markenname, Tagline, Claim, Domain, Kontakt, Sparten.
- **`src/main.js`** — schlanke Verhaltensschicht der Startseite (kein Framework). Wendet `data-brand` an und ruft die i18n-Engine auf.
- **`src/i18n.js`** — gemeinsame i18n-Engine: `detectLang()` (Domain/`?lang=`) + `applyI18n(dict)`.
- **`src/lang/home.en.js`** / **`src/lang/fahrerwohl.en.js`** — englische Wörterbücher je Seite.
- **`src/fahrerwohl.js`** — Modul-Entry der Produktseite, bindet Engine + Fahrerwohl-Wörterbuch ein.
- **`src/style.css`** — komplettes Designsystem der Startseite via CSS Custom Properties.
- **`datenschutz.html`** + **`src/datenschutz.js`** + **`src/lang/datenschutz.en.js`** — Datenschutz-Erklärseite (`/datenschutz`). Teilt **`style.css`** und die i18n-Engine mit der Startseite (anders als die standalone `fahrerwohl.html`). Bietet ein bereinigtes Public-PDF zum Download (`public/eunavia-datenschutz-konzept.pdf` / `eunavia-privacy-concept.pdf`), Quelle in `whitepaper/`.

### Zentrale Konventionen (wichtig vor dem Editieren)

1. **Markenname nie direkt in HTML schreiben.** `main.js` schreibt `BRAND`-Werte zur Laufzeit in alle Elemente mit `data-brand="name|claim|domain|tagline"`. Markenname/Claim/Tagline ändert man ausschließlich in `src/config.js`. Die festen Strings im HTML sind nur Fallback/SSR-loser Erstinhalt.

2. **Theme: Dark ist Default** (`<html data-theme="dark">`). Toggle-Button `#themeToggle` schaltet `data-theme` um und persistiert in `localStorage` unter Key `eunavia-theme`. Helles und dunkles Theme definieren je eigene CSS-Variablen unter `[data-theme="dark"]` / `[data-theme="light"]` in `style.css` — Farbänderungen dort, nicht inline.

3. **Designtokens** stehen in `:root` (Palette Teal/Smaragd/Mint + Champagner-Gold, Gradients `--grad`/`--grad-gold`, Fonts `--serif` Fraunces / `--sans` Hanken Grotesk, `--radius`, `--maxw`, Easings). Neue Werte als Token anlegen, nicht hartkodieren.

4. **JS-gesteuerte Effekte** in `main.js`, alle an CSS-Klassen/`data-`-Attribute gekoppelt:
   - Reveal-on-Scroll: Elemente mit `.reveal` bekommen via IntersectionObserver `.is-visible`.
   - Count-up der Kennzahlen: `.stat__num[data-count][data-suffix]`.
   - Header-Linie ab Scroll > 12px (`.is-stuck`), Hero-Staffelanimation (`.stagger[data-d]`), Footer-Jahr (`#year`).
   - Alle Animationen respektieren `prefers-reduced-motion`.

5. **Produkt-Sektionen**: je ein `<article class="product">` mit inline `style="--accent:#..."` für die Akzentfarbe; jedes zweite trägt `.product--reverse` (gespiegeltes Layout). Bilder liegen in `public/products/`.

6. **Zweisprachigkeit (de/en) — analog zu `data-brand`.** Deutsch steht hartkodiert im HTML (Fallback); Englisch ersetzt die i18n-Engine zur Laufzeit aus dem Wörterbuch. Markup-Konvention:
   - `data-i18n="key"` → ersetzt `innerHTML` (Inline-HTML wie `<em>`/`<b>` im Wert erlaubt).
   - `data-i18n-alt|label|title|content="key"` → ersetzt `alt` / `aria-label` / `title` / `content` (Meta-Tags).
   - `data-i18n-href="key"` → ersetzt `href` (sprachabhängige Links). Auf **.com** tragen die Produkte **englische Markennamen + .com-Subdomains**: Klar→**Clear** (`clear.eunavia.com`), Leben→**Life** (`life.eunavia.com`), StopSmoking bleibt (`stopsmoking.eunavia.com`); `Fahrerwohl` bleibt deutsch + interne Route `/fahrerwohl`. Markennamen via `brand.klar`/`brand.leben`, URLs via `url.stopsmoking`/`url.klar`/`url.leben` (in **beiden** Wörterbüchern home + datenschutz gepflegt). DE bleibt hartkodiert „Klar"/„Leben" mit `.de`-Links.
   - **Neuen Text immer mit Key versehen UND beide Wörterbücher pflegen** — sonst bleibt die Stelle auf Englisch deutsch. Konsistenz prüfbar mit dem Key-Abgleich-Skript (HTML-Keys ↔ Wörterbuch-Keys; siehe Git-Historie dieser Aufgabe).
   - Sprache wird **automatisch** bestimmt (`src/i18n.js` → `detectLang()`): Host endet auf `.com` → `en`, auf `.de` → `de`, sonst `de`. Zum Testen erzwingbar mit `?lang=en` / `?lang=de`. **Kein** sichtbarer Sprachumschalter.
   - Reihenfolge in `main.js`: erst `setBrand(...)`, dann `applyI18n(...)`, damit Englisch den per `data-brand` gesetzten Claim überschreiben kann. Die Footer-Domain wird sprachabhängig gesetzt (`eunavia.de`/`eunavia.com`).

### Assets

`public/` enthält Logo (`logo-mark.svg`), Favicon-Set, Hintergrundvideo (`hero-bg.mp4` + `hero-bg-poster.jpg`) und Produktbilder. `vite.config.js` setzt `assetsInlineLimit: 0` — Assets werden nie ins Bundle inlined, bleiben eigene Dateien.

## Deployment

Vercel (`vercel.json`: framework `vite`). Rewrites: `/fahrerwohl` → `/fahrerwohl.html`, `/datenschutz` **und** `/privacy` → `/datenschutz.html`, alle übrigen Routen auf `/index.html` (Reihenfolge zählt — saubere Routen **vor** dem Catch-all). Domains: **eunavia.com** (Englisch) / **eunavia.de** (Deutsch) — dieselbe Codebase auf beiden Domains; die Sprache hängt **allein an der Domain**.

**Sichtbare Seitenpfade sind sprachabhängig.** Deutsche Routen haben eine englische Entsprechung (`/datenschutz` → `/privacy`), gepflegt in `ROUTE_EN` in `src/i18n.js`. `localizeRoutes(lang)` schreibt bei Englisch alle internen `<a href>` um (Aufruf nach `applyI18n` in `main.js`/`datenschutz.js`). **Beide** Pfade brauchen ein Rewrite in `vercel.json` auf dieselbe HTML-Datei — kein Redirect (der würde auf beiden Domains greifen und `.de` brechen). Neue Route mit deutschem Namen → Eintrag in `ROUTE_EN` **und** zweites Rewrite ergänzen.

**Kein Geo-Routing.** `.de` ist immer Deutsch, `.com` immer Englisch — unabhängig vom Standort des Besuchers. Es gibt **keine** standortbasierte Umleitung (kein `middleware.js`, keine `@vercel/functions`-Abhängigkeit). Wer eine bestimmte Sprache will, ruft die passende Domain auf; zum Testen erzwingbar mit `?lang=en` / `?lang=de`.

Produkte verlinken auf eigene Subdomains (`stopsmoking.eunavia.de`, `klar.eunavia.de`, `leben.eunavia.de`) bzw. `cyberschooling.eu`.

## Abweichungen von Workspace-Konventionen

- **Zwei Sprachen, domainbasiert.** `de` (eunavia.de) + `en` (eunavia.com), keine sichtbare Sprachwahl, kein 6-Sprachen-Stack wie die Plattform-Projekte. Default ist Deutsch.
- **Andere Markenfarben.** Hier gilt die Eunavia-Palette (Teal→Smaragd→Mint + Gold), nicht das Cyberschooling-Cyan `#00BCD4`.
