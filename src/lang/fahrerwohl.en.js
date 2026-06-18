/* ============================================================
   Eunavia — Englisches Wörterbuch der Fahrerwohl-Seite
   Deutsch steht im HTML; hier nur die englischen Entsprechungen.
   Schlüssel = data-i18n / data-i18n-* der fahrerwohl.html.
   "Fahrerwohl" ist Eigenname und bleibt unübersetzt.
   ============================================================ */

export const fahrerwohlEN = {
  // Meta
  'fw.meta.title': 'Fahrerwohl — Wellbeing app for professional drivers | Eunavia',
  'fw.meta.desc':
    'Fahrerwohl is a scientifically grounded wellbeing app for professional drivers: drinking, breaks, movement, nutrition and relaxation — voice-guided on Android Auto, full-featured during the break.',
  'fw.meta.locale': 'en_US',
  'fw.meta.ogTitle': 'Fahrerwohl — Eight hours behind the wheel, and still looking after yourself.',
  'fw.meta.ogDesc':
    'Wellbeing app for professional drivers: seven evidence-based action areas, voice-guided on Android Auto, full-featured during the break.',
  'fw.meta.twTitle': 'Fahrerwohl — Wellbeing app for professional drivers',
  'fw.meta.twDesc':
    'Drinking, breaks, movement, nutrition, relaxation — voice-guided while driving, full-featured during the break.',

  // Header
  'fw.tagline': 'A project by Eunavia',
  'fw.nav.invehicle': 'In the vehicle',
  'fw.nav.fields': 'Action areas',
  'fw.nav.home': 'eunavia.com',
  'fw.nav.pdf': 'Concept PDF',

  // Hero
  'fw.badge': 'Research preview · Android &amp; Android Auto',
  'fw.hero.h1': 'Eight hours behind the wheel — <em>and still looking after yourself.</em>',
  'fw.hero.sub':
    '<strong>Fahrerwohl</strong> is a wellbeing app for professional drivers in freight and passenger transport. ' +
    'It brings drinking, eating, breaks, movement and relaxation into the working day — ' +
    '<strong>voice-guided while driving, full-featured during the break.</strong> ' +
    'Every function is tied to a scientifically proven mechanism of action.',
  'fw.hero.cta1': '▶&#xFE0E;&nbsp;Watch it live in the vehicle',
  'fw.hero.cta2': 'Download the concept as PDF',
  'fw.hero.fact1': '<b>7</b> evidence-based action areas',
  'fw.hero.fact2': '<b>2</b> modes: drive &amp; break',
  'fw.hero.fact3': '<b>≤ 2 s</b> glance time at the wheel',
  'fw.hero.imgAlt':
    'Fahrerwohl app: home screen with shift time, quick break selection and mood check',

  // Store-Verfügbarkeit (Android / iOS)
  'fw.store.android':
    '<svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true"><path d="M47 32C37 37 31 47 31 60v392c0 13 6 23 16 28l228-224L47 32zm301 196L92 4l278 158-22 66zm74 42-62-36-58 58 58 58 62-36c20-12 20-32 0-44zM92 508l256-224 22 66L92 508z"/></svg> Get it on Android',
  'fw.store.ios':
    '<svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true"><path d="M318.7 268c-.4-44 19.9-77.1 60.9-101.5-22.9-32.9-57.6-51-103.4-54.5-43.4-3.4-90.9 25.5-108.3 25.5-18.4 0-60.4-24.3-93.4-24.3C24.5 114 0 168.6 0 233.4c0 32.5 6 66 17.9 100.6 16 45.4 73.7 156.6 133.9 154.7 31.5-.7 53.7-22.3 94.7-22.3 39.8 0 60.4 22.3 93.4 22.3 60.7-.9 113-101.9 128.3-147.4-81.4-38.4-77.4-112.4-77.4-114.6zM256 84c30.9-36.6 28.1-69.9 27.2-81.9-27.3 1.6-58.9 18.6-76.9 39.6-19.8 22.5-31.5 50.3-29 80.8 29.5 2.3 56.4-12.9 78.7-38.5z"/></svg> iOS app in preparation',

  // Evidenz
  'fw.ev.kicker': 'Why this app is needed',
  'fw.ev.h2': "The driver's seat is a health risk.",
  'fw.ev.lead':
    'Prolonged sitting, irregular shifts, poor access to healthy food, time pressure and chronic stress all converge for professional drivers. The figures from research are clear:',
  'fw.ev.s1':
    '<strong>more driving errors</strong> in the simulator under mild dehydration — 101 instead of 47 errors',
  'fw.ev.s2': '<strong>higher accident risk</strong> after just 4–5 hours of sleep',
  'fw.ev.s3':
    '<strong>obesity rate</strong> among long-haul drivers — versus 32.5&#8202;% in the general population',
  'fw.ev.s4':
    "<strong>maximum glance time</strong> per interaction on the driver display — the app's safety budget",
  'fw.ev.note':
    'Figures from the literature cited in the concept (incl. Physiology &amp; Behavior 2015, NHTSA reference values). ' +
    'The obesity figure comes from an Australian sample and serves as an order of magnitude. ' +
    '<a href="/fahrerwohl/Fahrer-Wellbeing-App_Konzept.pdf" download>Concept PDF with full list of sources →</a>',

  // Idee: Zwei Modi
  'fw.idea.kicker': 'The idea behind it',
  'fw.idea.h2': 'Two modes. One data model. Zero distraction.',
  'fw.idea.lead':
    "Health behavior can't be trained 'on the side' at the wheel. That's why Fahrerwohl strictly separates the usage contexts: attention-intensive functions simply don't exist while driving.",
  'fw.idea.driveTag': 'Drive mode · Android Auto',
  'fw.idea.driveH': 'While driving',
  'fw.idea.drive1': '<b>Glanceable cards,</b> voice-guided, high contrast',
  'fw.idea.drive2': 'Only <b>remind, read aloud, confirm, navigate</b>',
  'fw.idea.drive3': 'At most <b>one action per card</b> — single glance ≤ 2 s',
  'fw.idea.drive4': '<b>No typing, no text, no video</b> — the voice leads',
  'fw.idea.pauseTag': 'Break &amp; preparation · Phone',
  'fw.idea.pauseH': 'During the break',
  'fw.idea.pause1': '<b>Full functionality:</b> plan, track, review',
  'fw.idea.pause2': '<b>Recipes &amp; shopping list</b> for the cooler',
  'fw.idea.pause3': '<b>Exercise videos, breathing guides,</b> mood check',
  'fw.idea.pause4': '<b>Wellbeing dashboard</b> with SMART goals',
  'fw.idea.bridge':
    '<b>The EU mandatory break is the natural metronome.</b> Regulation (EC) No 561/2006 requires a 45-minute ' +
    'break after at most 4.5 hours of driving — Fahrerwohl places drinking, eating, movement and relaxation ' +
    'exactly into those windows. Both modes draw on the same profile and the same daily plan: ' +
    'what is prepared in the evening steers what Android Auto offers during the day.',

  // Video
  'fw.video.fallback': 'Your browser cannot play this video.',
  'fw.video.kicker': 'Live in the vehicle',
  'fw.video.h2': 'Already running on Android Auto.',
  'fw.video.lead':
    "No mockup: the video shows the drive-mode prototype on the dashboard display of a van — with shift status, drinking and movement reminders as glanceable cards.",
  'fw.video.p1':
    "<b>Voice output instead of glance time:</b> prompts like “time to drink” are read aloud and confirmed with a tap or a spoken word.",
  'fw.video.p2':
    "<b>One card, one task:</b> shift time, next break, “drink ✓”, “eat ✓” — graspable in under two seconds.",
  'fw.video.p3':
    "<b>Distraction Optimized:</b> compliant with Android Auto's driver-distraction guidelines — when in doubt, drive mode shows less, not more.",

  // Sieben Handlungsfelder
  'fw.fields.kicker': 'What the app covers',
  'fw.fields.h2': 'Seven action areas, one system.',
  'fw.fields.lead':
    'According to systematic reviews, effective interventions for this professional group are multi-component and digital. Fahrerwohl combines seven proven levers into one seamless daily routine:',
  'fw.f1.h': 'To-dos as the bracket',
  'fw.f1.p':
    'Tasks are surfaced context-sensitively: health routines appear in the break window, work to-dos are only read aloud while driving and ticked off by voice.',
  'fw.f2.h': 'Hydration',
  'fw.f2.p':
    'Drink reminders tied to driving time and break rhythm rather than rigid intervals — because even mild dehydration doubles driving errors.',
  'fw.f3.h': 'Nutrition',
  'fw.f3.p':
    'Cooler-friendly recipes, an automatic shopping list and a portion plan for the tour: meal prep instead of bans — what reviews show actually works.',
  'fw.f4.h': 'Breaks &amp; naps',
  'fw.f4.p':
    'Plans 45-minute breaks along Regulation 561/2006, shows the remaining driving time and suggests 20-minute power naps — fatigue doubles the accident risk.',
  'fw.f5.h': 'Relaxation',
  'fw.f5.p':
    'Guided slow breathing against acute stress: purely auditory in the car and stoppable at any time, a longer session with history during the break.',
  'fw.f6.h': 'Movement',
  'fw.f6.p':
    'Active micro-breaks following the 20-8-2 principle: short mobilization and stretching sequences right at the vehicle, matched to the break length — focus on back, neck and hip flexors.',
  'fw.f7.h': 'Restful places',
  'fw.f7.p':
    'Routes breaks not to the nearest parking lot but to quiet, green places within reach — contact with nature is proven to lower cortisol, pulse and blood pressure.',

  // Galerie
  'fw.gallery.kicker': 'A look inside the app',
  'fw.gallery.h2': 'Dark, calm, with big goals.',
  'fw.gallery.lead':
    "The UI follows the driver's day: high contrast for day and night, large touch targets, one piece of information per card — and everything important confirmed with a single tap.",
  'fw.g1.alt':
    'Fahrerwohl screenshot: shift start with mood check and Health Connect integration',
  'fw.g1.cap': 'Shift start with mood check and optional Health Connect integration',
  'fw.g2.alt':
    'Fahrerwohl screenshot: mandatory break per Regulation 561/2006, power-nap suggestion and drinking goal',
  'fw.g2.cap': 'Mandatory break in view, power-nap suggestion and drinking goal with one tap',
  'fw.g3.alt': 'Fahrerwohl screenshot: checklists, meal prep and restful places',
  'fw.g3.cap': 'Checklists for departure and handover, meal prep and restful places',
  'fw.g4.alt':
    'Fahrerwohl screenshot: settings for working hours, reminders and driving time',
  'fw.g4.cap':
    'Working hours, reminder intervals and driving time until the mandatory break — freely adjustable',

  // Sicherheit & Datenschutz
  'fw.trust.kicker': 'Boundaries &amp; principles',
  'fw.trust.h2': 'Safety comes first. Data stays with the driver.',
  'fw.trust.h1a': 'Distraction Optimized',
  'fw.trust.p1':
    "Single glance ≤ 2 seconds, total glance time ≤ 12 seconds per task, one action per screen. All visually demanding content is technically bound to the “parked” vehicle state.",
  'fw.trust.h2b': 'Data minimization (GDPR)',
  'fw.trust.p2':
    'Drinking, mood and movement data remain on the device by default. Any sharing — e.g. with a company doctor or employer — requires active, revocable consent.',
  'fw.trust.h3c': 'No competition with legal duties',
  'fw.trust.p3':
    'The app replaces neither the digital tachograph nor the statutory driving- and rest-time records — it complements them as a wellbeing assistant.',
  'fw.trust.h4d': 'Not a medical device',
  'fw.trust.p4':
    'All recommendations are general health promotion and no substitute for medical advice. Thresholds such as drinking amounts should be calibrated with professionals.',

  // Roadmap
  'fw.road.kicker': 'What comes next',
  'fw.road.h2': 'The route is planned.',
  'fw.road.h1a': 'MVP',
  'fw.road.p1':
    'Context to-dos, hydration coach, break & nap planner and the Android Auto core cards — the safety-relevant base with Distraction-Optimized approval.',
  'fw.road.h2b': 'Expansion',
  'fw.road.p2':
    'Meal prep with shopping list, break workouts, breathing guide, recovery navigation and the wellbeing dashboard — the complete system.',
  'fw.road.h3c': 'Maturation',
  'fw.road.p3':
    'Personalization by shift and temperature, optional wearable and tachograph integration, company-doctor export — and effectiveness measurement on real tours.',

  // Schluss-CTA
  'fw.final.kicker': 'Interested?',
  'fw.final.h2':
    'Safe travels begin <em style="font-style:normal;color:var(--fw-amber)">before you set off.</em>',
  'fw.final.lead':
    "The full concept — scientific basis, feature analysis, UI concept and list of sources — is available as a PDF. For questions, pilot projects or feedback, we'd love to hear from you.",
  'fw.final.cta1': 'Download the concept PDF',

  // Beta-Tester-Anmeldung
  'fw.beta.kicker': 'Beta test',
  'fw.beta.h2': 'Become a test driver.',
  'fw.beta.lead':
    'Fahrerwohl is currently in beta for <strong>Android</strong>. Sign up — ' +
    "we'll approve you and get in touch by email as soon as it's ready.",
  'fw.beta.email': 'Your email',
  'fw.beta.name': 'Name (optional)',
  'fw.beta.submit': 'Sign up as a tester',

  // Footer
  'fw.footer.legal': '© 2026 Eunavia · Fahrerwohl is a concept draft (research preview).',
  'fw.footer.home': 'eunavia.com',
  'fw.footer.contact': 'Contact',
}
