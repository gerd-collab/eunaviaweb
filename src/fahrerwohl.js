/* ============================================================
   Eunavia — Sprachumschaltung der Fahrerwohl-Produktseite
   Bindet die gemeinsame i18n-Engine an das Fahrerwohl-Wörterbuch.
   (Die Reveal-Animationen bleiben im Inline-Script der Seite.)
   ============================================================ */

import { applyI18n } from './i18n.js'
import { fahrerwohlEN } from './lang/fahrerwohl.en.js'

applyI18n(fahrerwohlEN)
