/* ============================================================
   Eunavia — i18n-Engine (sprachabhängige Auslieferung)
   ------------------------------------------------------------
   Deutsch ist im HTML hartkodiert (Fallback / SSR-loser Erstinhalt).
   Für Englisch ersetzt diese Engine zur Laufzeit alle markierten
   Stellen aus einem Wörterbuch.

   Sprache wird AUTOMATISCH bestimmt:
     • Host endet auf ".com"  → Englisch
     • Host endet auf ".de"   → Deutsch
     • alles andere (localhost, *.vercel.app) → Deutsch (Default)
   Zum Testen lässt sich die Sprache mit ?lang=en / ?lang=de erzwingen.

   Markup-Konventionen (analog zu data-brand):
     • data-i18n="key"            → ersetzt innerHTML (HTML in Werten erlaubt)
     • data-i18n-alt="key"        → ersetzt das alt-Attribut
     • data-i18n-label="key"      → ersetzt aria-label
     • data-i18n-title="key"      → ersetzt das title-Attribut
     • data-i18n-content="key"    → ersetzt content (Meta-Tags)
   ============================================================ */

const ATTR_MAP = {
  'data-i18n-alt': 'alt',
  'data-i18n-label': 'aria-label',
  'data-i18n-title': 'title',
  'data-i18n-content': 'content',
}

/** Ermittelt die aktive Sprache aus Query-Param-Override oder Host. */
export function detectLang() {
  const override = new URLSearchParams(location.search).get('lang')
  if (override === 'de' || override === 'en') return override

  const host = location.hostname
  if (host.endsWith('.com')) return 'en'
  if (host.endsWith('.de')) return 'de'
  return 'de'
}

/**
 * Wendet ein Wörterbuch an. Deutsch ist No-Op (HTML ist bereits deutsch),
 * setzt aber dennoch das lang-Attribut korrekt.
 * @param {Record<string,string>} dict  Schlüssel → Zielsprachen-Text/HTML
 * @param {string} [lang]               Sprache; default: detectLang()
 */
export function applyI18n(dict, lang = detectLang()) {
  document.documentElement.lang = lang
  if (lang === 'de') return

  // Textinhalte (HTML erlaubt — Werte stammen ausschließlich aus eigenem Wörterbuch)
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const val = dict[el.getAttribute('data-i18n')]
    if (val != null) el.innerHTML = val
  })

  // Attribute (alt, aria-label, title, meta-content)
  for (const [dataAttr, realAttr] of Object.entries(ATTR_MAP)) {
    document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
      const val = dict[el.getAttribute(dataAttr)]
      if (val != null) el.setAttribute(realAttr, val)
    })
  }
}
