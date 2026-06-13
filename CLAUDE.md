# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

> Ergänzt die Workspace-Datei `/home/gerd/CLAUDE.md`. Hier stehen nur die Abweichungen und Besonderheiten dieses Repos.

## Was das ist

Statische Marketing-One-Pager-Website des **Dachkonzerns Eunavia** ("Human Centered" — _Der gute Weg zum gelingenden Leben_). Stellt den Konzern und seine fünf Produkt-Standbeine vor (Arbeitsblätter, Fahrerwohl, StopSmoking, Klar, Leben), die auf eigene Domains verlinken. **Kein** App-Code, keine Daten, kein Backend — reine Präsentationsseite.

Markenarchitektur: Eunavia (Dach) → zwei Säulen **Cyberschooling** (Bildung) und **Vivanova** (Gesundheit, _nur Arbeitstitel, nicht final_).

## Commands

```bash
npm run dev      # Vite Dev-Server, Port 5173, öffnet Browser automatisch
npm run build    # Production-Build nach dist/
npm run preview  # dist/ lokal servieren
```

Keine Tests, kein Linter, kein TypeScript konfiguriert — bewusst minimal gehalten.

## Stack & Architektur

Vite 7 + Vanilla HTML/CSS/JS. Genau vier Quelldateien, jede mit klarer Rolle:

- **`index.html`** — der gesamte Seiteninhalt, hartkodiert (Hero mit Video, Manifest, 5 Produkt-`<article>`, Stats, Prinzipien, CTA, Footer). Inhaltliche Änderungen passieren hier.
- **`src/config.js`** — `BRAND`-Objekt als **Single Source of Truth** für Markenname, Tagline, Claim, Domain, Kontakt, Sparten.
- **`src/main.js`** — schlanke Verhaltensschicht (kein Framework, ~80 Zeilen).
- **`src/style.css`** — komplettes Designsystem via CSS Custom Properties.

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

### Assets

`public/` enthält Logo (`logo-mark.svg`), Favicon-Set, Hintergrundvideo (`hero-bg.mp4` + `hero-bg-poster.jpg`) und Produktbilder. `vite.config.js` setzt `assetsInlineLimit: 0` — Assets werden nie ins Bundle inlined, bleiben eigene Dateien.

## Deployment

Vercel (`vercel.json`: framework `vite`, SPA-Rewrite aller Routen auf `/index.html`). Domains: **eunavia.com** / eunavia.de. Produkte verlinken auf eigene Subdomains (`stopsmoking.eunavia.de`, `klar.eunavia.de`, `leben.eunavia.de`) bzw. `cyberschooling.eu`.

## Abweichungen von Workspace-Konventionen

- **Nur Deutsch.** Anders als die übrigen Ecosystem-Projekte hat diese Seite **keine** i18n/Mehrsprachigkeit — Inhalt ist deutsch und hartkodiert.
- **Andere Markenfarben.** Hier gilt die Eunavia-Palette (Teal→Smaragd→Mint + Gold), nicht das Cyberschooling-Cyan `#00BCD4`.
