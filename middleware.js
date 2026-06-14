/* ============================================================
   Eunavia — Geo-Routing (Vercel Routing Middleware, Edge)
   ------------------------------------------------------------
   Leitet Besucher beim Einstieg auf die zur Herkunft passende
   Domain:
     • deutschsprachige Länder (DE/AT/CH/LI) → eunavia.de  (Deutsch)
     • alle übrigen Länder                    → eunavia.com (Englisch)

   Die eigentliche Sprache hängt allein an der Domain (siehe
   src/i18n.js): .de = Deutsch, .com = Englisch. Diese Middleware
   sorgt nur dafür, dass man auf der richtigen Domain landet.

   Schutz gegen Endlosschleifen & Respekt der Nutzerwahl:
   Nach der ersten Entscheidung wird ein Cookie gesetzt; wer es
   trägt, wird nicht erneut umgeleitet (z. B. wenn jemand bewusst
   die andere Sprachdomain ansteuert).
   ============================================================ */

import { geolocation, next } from '@vercel/functions'

// Nur die einsprachigen HTML-Einstiege abfangen — Assets bleiben außen vor.
export const config = {
  matcher: ['/', '/fahrerwohl', '/datenschutz'],
}

const GERMAN_SPEAKING = new Set(['DE', 'AT', 'CH', 'LI'])
const COOKIE = 'eunavia_geo'
const COOKIE_HEADER = `${COOKIE}=1; Path=/; Max-Age=31536000; SameSite=Lax; Secure`

export default function middleware(request) {
  const url = new URL(request.url)
  const host = url.hostname

  const onGerman = host.endsWith('eunavia.de')
  const onEnglish = host.endsWith('eunavia.com')

  // Außerhalb der Produktionsdomains (localhost, *.vercel.app) nichts tun.
  if (!onGerman && !onEnglish) return next()

  // Bereits einmal entschieden → Nutzerwahl respektieren, keine erneute Umleitung.
  const cookies = request.headers.get('cookie') || ''
  if (cookies.split(';').some((c) => c.trim().startsWith(`${COOKIE}=`))) {
    return next()
  }

  const { country } = geolocation(request)
  const prefersGerman = GERMAN_SPEAKING.has((country || '').toUpperCase())

  // Domain passt schon zur Herkunft → nur Cookie setzen, nicht umleiten.
  if (prefersGerman === onGerman) {
    return next({ headers: { 'set-cookie': COOKIE_HEADER } })
  }

  // Auf die passende Domain umleiten — Pfad und Query bleiben erhalten,
  // ein evtl. www.-Präfix wird beibehalten.
  url.hostname = prefersGerman
    ? host.replace(/eunavia\.com$/, 'eunavia.de')
    : host.replace(/eunavia\.de$/, 'eunavia.com')

  return new Response(null, {
    status: 307,
    headers: {
      Location: url.toString(),
      'set-cookie': COOKIE_HEADER,
    },
  })
}
