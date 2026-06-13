# Eunavia

> Der gute Weg zum gelingenden Leben.

Marketing-Website der Dachmarke **Eunavia** — für Bildung und Lebensqualität über die ganze Lebensspanne. Unter dem Dach liegen zwei Säulen:

- **Cyberschooling** — globales digitales Bildungssystem (Lern-Apps, Voice-Tutoring, Lehrpläne für 197 Länder)
- **Vivanova** *(Arbeitstitel)* — digitale Gesundheit & Lebensqualität für Erwachsene (Bewegung, Gewicht, Entwöhnung, Quality-of-Life)

## Stack

- **Vite 7** + Vanilla HTML/CSS/JS
- Dark Mode als Default, umschaltbar via `[data-theme]` (Persistenz über `localStorage`)
- Marken-Verlauf Teal → Smaragd → Mint
- Skalierbares SVG-Logo (`public/logo-mark.svg`), funktioniert auf hellem und dunklem Grund

## Entwicklung

```bash
npm install
npm run dev      # Dev-Server auf Port 5173
npm run build    # Production-Build nach dist/
npm run preview  # Build lokal testen
```

## Deployment

Vercel (SPA-Hosting). Domain: **eunavia.com** / eunavia.de

---

© 2026 Eunavia
