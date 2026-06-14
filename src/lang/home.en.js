/* ============================================================
   Eunavia — Englisches Wörterbuch der Startseite (index.html)
   Deutsch steht im HTML; hier nur die englischen Entsprechungen.
   Schlüssel = data-i18n / data-i18n-* der index.html.
   Werte dürfen Inline-HTML enthalten (werden als innerHTML gesetzt).
   ============================================================ */

export const homeEN = {
  // Meta
  'meta.desc':
    'Eunavia – the good path to a life well lived. A human-centered company for education and quality of life: printable worksheets, Fahrerwohl, StopSmoking, Klar and Leben.',
  'meta.ogDesc':
    'A human-centered company for education and quality of life. Five products, one promise: helping people grow.',

  // Skip-Link & Navigation
  'skip': 'Skip to content',
  'nav.philosophy': 'Philosophy',
  'nav.products': 'Products',
  'nav.principles': 'Principles',
  'nav.privacy': 'Privacy',
  'nav.contact': 'Contact',
  'nav.cta': 'Request a conversation',
  'theme.label': 'Toggle light/dark mode',
  'theme.title': 'Light/dark mode',

  // Hero
  'hero.kicker':
    '<span class="hero__kicker-rule"></span> Education & quality of life · worldwide',
  'hero.t1': 'The good path',
  'hero.t2': 'to a <em>thriving</em>',
  'hero.t3': 'life.',
  'hero.lead':
    'Eunavia is a human-centered company for development across the entire lifespan — from children learning to adults living well. One family of software, one promise.',
  'hero.ctaPrimary': 'Experience the products',
  'hero.ctaSecondary': 'What drives us',
  'hero.scroll': 'Continue',

  // Laufband
  'marquee':
    '<span>Learning</span><i>✦</i><span>Movement</span><i>✦</i><span>Changing habits</span><i>✦</i>' +
    '<span>Living mindfully</span><i>✦</i><span>Quality of Life</span><i>✦</i><span>Prevention</span><i>✦</i>' +
    '<span>Learning</span><i>✦</i><span>Movement</span><i>✦</i><span>Changing habits</span><i>✦</i>' +
    '<span>Living mindfully</span><i>✦</i><span>Quality of Life</span><i>✦</i><span>Prevention</span><i>✦</i>',

  // Manifest / Philosophie
  'manifest.eyebrow': 'Philosophy',
  'manifest.quote':
    'Not school. Not clinic. <em>The person</em> who wants to grow.',
  'manifest.lead':
    "What unites our products isn't a field of expertise but a moment: the instant when someone wants to change something. A child learning. A driver holding on. Someone letting go.",
  'manifest.body':
    'Eunavia gives that idea a home — serious, commercial and global. Every tool we build begins with the person and carries them a little further along their path.',

  // Produkte – Kopf
  'products.eyebrow': 'Our pillars',
  'products.title': 'Five products,<br /><em>one promise.</em>',
  'products.lead':
    'From the school desk to the steering wheel, from quitting smoking to a clear head — every Eunavia product accompanies people at a real turning point.',

  // 01 · Printable Worksheets
  'p1.alt': 'Printable worksheets from Cyberschooling',
  'p1.cat': 'Education · Cyberschooling',
  'p1.name': 'Printable Worksheets',
  'p1.desc':
    'Tailor-made practice sheets as PDF — matched to the curriculum. Choose country, school type, grade and subject, ready to print. Learning that saves teachers hours.',
  'p1.li1': 'Curriculum-accurate for 197 countries',
  'p1.li2': 'As a clean PDF to print',
  'p1.li3': 'Created in seconds',
  'p1.link': 'Create worksheets <span>→</span>',

  // 02 · Fahrerwohl (Eigenname bleibt)
  'p2.alt': 'Fahrerwohl – wellbeing app for professional drivers',
  'p2.cat': 'Workplace wellbeing',
  'p2.desc':
    'Eight hours behind the wheel — and still looking after yourself. Voice-guided micro-exercises for professional drivers during breaks: breathing, movement, eyes and nutrition. Wellbeing that fits in the cab.',
  'p2.li1': 'Voice-based during the break',
  'p2.li2': 'Scientifically grounded',
  'p2.li3': 'For professional & field staff',
  'p2.link': 'View Fahrerwohl <span>→</span>',

  // 03 · StopSmoking (Eigenname bleibt)
  'p3.alt': 'StopSmoking – self-help for quitting smoking',
  'p3.cat': 'Quitting smoking · self-help',
  'p3.desc':
    "You don't have to do this alone. Support for quitting smoking built on proven self-help methods — instant help in the right moment, honest and without wagging a finger.",
  'p3.li1': 'Proven self-help methods',
  'p3.li2': 'Instant help for acute cravings',
  'p3.li3': 'Accompanies rather than lectures',
  'p3.link': 'Become smoke-free <span>→</span>',

  // Produkt-Markennamen & Links (sprachabhängig: .com nutzt EN-Namen + .com-Subdomains)
  'brand.klar': 'Clear',
  'brand.leben': 'Life',
  'url.stopsmoking': 'https://stopsmoking.eunavia.com/',
  'url.klar': 'https://clear.eunavia.com/',
  'url.leben': 'https://life.eunavia.com/welcome',

  // 04 · Clear (Klar)
  'p4.alt': 'Clear – support for letting go of alcohol',
  'p4.cat': 'Alcohol · self-help',
  'p4.desc':
    'Become free. And stay free. Klar accompanies you on the way to a life without alcohol — calm, anonymous and right there when it gets hard. No pressure, no shame.',
  'p4.li1': 'Anonymous & in everyday life',
  'p4.li2': 'Instant help when it gets hard',
  'p4.li3': 'At your own pace',
  'p4.link': 'Get clear <span>→</span>',

  // 05 · Life (Leben)
  'p5.alt': 'Life – platform for quality of life',
  'p5.desc':
    'Your life, stabilized step by step. A calm, integrated companion for wellbeing, education and life stability — small levers with great effect.',
  'p5.li1': 'Wellbeing, education & stability',
  'p5.li2': 'Small levers, great effect',
  'p5.li3': 'Gentle & integrated',
  'p5.link': 'Discover Life <span>→</span>',

  // Kennzahlen
  'stats.reach': 'targeted global reach',
  'stats.countries': 'countries in the education model',
  'stats.langs': 'supported languages',
  'stats.products': 'products under one roof',

  // Prinzipien
  'principles.eyebrow': 'Our principles',
  'principles.title': 'What holds Eunavia <em>together.</em>',
  'pr1.h': 'Lifespan, not life stage',
  'pr1.p':
    'A company that accompanies people from their first learning into adulthood — no product ends where the next need begins.',
  'pr2.h': 'Thought globally',
  'pr2.p':
    'Multilingual, RTL-capable and culturally adaptable. Built for 95% of the world — not just one market.',
  'pr3.h': 'AI at the core',
  'pr3.p':
    'Voice assistance, adaptive tutoring and intelligent guidance as the foundation — technology that adapts to the human.',
  'pr4.h': 'Evidence & impact',
  'pr4.p':
    'Changing behavior means measuring what works. Progress becomes visible, honest and without wagging a finger.',

  // CTA
  'cta.title': 'Learn. Live. <em>Grow.</em>',
  'cta.lead':
    "Eunavia is at the very beginning. If you'd like to become a partner, investor or fellow traveler, let's talk.",
  'cta.btn': 'Get in touch',

  // Footer
  'footer.claim': 'The good path to a life well lived.',
  'footer.products': 'Products',
  'footer.worksheets': 'Worksheets',
  'footer.company': 'Company',
}
