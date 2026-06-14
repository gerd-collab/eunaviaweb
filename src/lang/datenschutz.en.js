/* ============================================================
   Eunavia — English dictionary of the privacy page (datenschutz.html)
   German is hardcoded in the HTML; here only the English equivalents.
   Keys = data-i18n / data-i18n-* of datenschutz.html.
   Values may contain inline HTML (set as innerHTML).
   ============================================================ */

export const datenschutzEN = {
  // Meta
  'ds.meta.title': 'Privacy – Eunavia',
  'ds.meta.desc':
    'Privacy at Eunavia – explained plainly. Anonymous from the start, data on your device, separate vaults, no data trade. Trust you can verify.',
  'ds.meta.ogDesc':
    'How Eunavia protects your most sensitive data: anonymous, encrypted, on your device — and independently verifiable.',

  // Skip-Link & Navigation (shared keys with the homepage)
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
  'ds.hero.eyebrow': 'Privacy &amp; trust',
  'ds.hero.title': 'Your data <em>belongs to you.</em>',
  'ds.hero.lead':
    'Our apps accompany people through deeply personal moments — quitting smoking, letting go, questions about their own health. This is the most sensitive data there is. That is why privacy at Eunavia is not an afterthought but the foundation everything rests on.',

  // Tenet
  'ds.tenet.eyebrow': 'Our promise',
  'ds.tenet.quote': 'Trust is not a feature. <em>It is the foundation.</em>',
  'ds.tenet.body':
    'What you entrust to our apps never becomes a product. We have built privacy in from the very first line of code — not as a checkbox for the legal department, but as a stance. <strong>You should be able to be supported without having to explain yourself.</strong> The promises below are not a declaration of intent but firmly anchored in the technology of our products.',

  // Promises
  'ds.promise.eyebrow': 'Eight promises',
  'ds.promise.title': 'How we <em>protect</em> your data.',
  'ds.p1.h': 'Anonymous from the start',
  'ds.p1.p':
    'No account, no email, no real name. Our apps work without you having to identify yourself. It is about your path — not your identity.',
  'ds.p2.h': 'At home on your device',
  'ds.p2.p':
    'Your sensitive data is created and stays encrypted on your device. We only use a cloud if you want one — and then encrypted in such a way that even we can never see the content.',
  'ds.p3.h': 'Two separate vaults',
  'ds.p3.p':
    'Who you are and what you record about your health are never stored together. The two halves are linked only by an anonymous tag that reveals nothing on its own.',
  'ds.p4.h': 'One fortress per app',
  'ds.p4.p':
    'Every product has its own sealed-off data world with its own keys. There is no shared profile across the apps — what you do in one app stays there.',
  'ds.p5.h': 'Encrypted — and truly erasable',
  'ds.p5.p':
    'Everything is encrypted. And when you delete, we destroy the key: your data becomes irretrievably unreadable — in every backup too. With us, deleting means really deleted.',
  'ds.p6.h': 'Emergencies without a network',
  'ds.p6.p':
    'Instant help in critical moments works completely offline and without an account. Privacy must never slow down life-saving help — on the contrary, it makes it faster.',
  'ds.p7.h': 'No data trade, no trackers',
  'ds.p7.p':
    'Zero ad networks, zero third-party analytics. We do not sell your data and we do not pass it on. Our business is your recovery — not your attention.',
  'ds.p8.h': 'Independently audited',
  'ds.p8.p':
    'Trust you can verify: we have our apps independently certified — from the TÜV quality seal to the strict security standards for digital health applications.',

  // Split-Identity
  'ds.split.eyebrow': 'How it works',
  'ds.split.title': 'Two vaults that <em>do not know each other.</em>',
  'ds.split.lead':
    'It sounds technical, but the idea is simple. Instead of gathering everything about you in one place, we keep it in two strictly separated vaults — and neither knows the contents of the other.',
  'ds.split.vault1.tag': 'Identity vault',
  'ds.split.vault1.name': 'Who you are',
  'ds.split.vault1.p':
    'Knows — if anything at all — only an anonymous way in, such as your device’s fingerprint or face unlock. <strong>No health data.</strong> No name, no email needed.',
  'ds.split.token': 'links the two — reveals nothing alone',
  'ds.split.vault2.tag': 'Health vault',
  'ds.split.vault2.name': 'What you record',
  'ds.split.vault2.p':
    'Stores your entries, progress and history — but <strong>without knowing who you are.</strong> No name, no email, no device. Just the content, detached from the person.',
  'ds.split.note':
    'Only both halves together would form a complete picture — and that is exactly what we prevent by keeping them apart. <strong>Anyone who got hold of one half would hold only a meaningless half.</strong> If you lose your device, a personal recovery key brings everything back — entirely without an email address.',

  // Never
  'ds.never.eyebrow': 'Clear boundaries',
  'ds.never.title': 'What we <em>never</em> do.',
  'ds.never.1': 'Sell your data or pass it to third parties.',
  'ds.never.2': 'Build advertising or tracking services into our apps.',
  'ds.never.3': 'Create a shared profile across all apps.',
  'ds.never.4': 'Force you to provide an email address or a login.',
  'ds.never.5': 'Make life-saving help depend on an internet connection.',

  // Certification
  'ds.cert.eyebrow': 'Verifiable',
  'ds.cert.title': 'Trust you can <em>verify.</em>',
  'ds.cert.lead':
    'We don’t just want to say your data is safe — we have it independently confirmed. These are the seals and standards we align our health apps with.',
  'ds.cert1.kicker': 'Quality seal',
  'ds.cert1.name': 'TÜV-certified app',
  'ds.cert1.p':
    'A manufacturer-independent seal that checks usability, legal compliance and data security — the same mark of approval you know from trusted brands.',
  'ds.cert2.kicker': 'Security standard',
  'ds.cert2.name': 'BSI TR-03161',
  'ds.cert2.p':
    'The technical guideline of Germany’s Federal Office for Information Security for health apps — the benchmark for app, server and data transfer.',
  'ds.cert3.kicker': 'Information security',
  'ds.cert3.name': 'ISO 27001',
  'ds.cert3.p':
    'The international standard for well-considered information-security management — clear rules and responsibilities in how data is handled.',
  'ds.cert.note':
    'Eunavia is at the beginning of this journey. We build privacy in from the very first line of code and pursue the certifications step by step — starting where the data is most sensitive.',

  // CTA
  'ds.cta.title': 'Questions about your data?',
  'ds.cta.lead':
    'Transparency does not end with this page. If you would like to know how we handle your data, write to us — we answer honestly.',
  'ds.cta.btn': 'Get in touch',

  // Footer (shared keys)
  'footer.claim': 'The good path to a life well lived.',
  'footer.products': 'Products',
  'footer.worksheets': 'Worksheets',
  'footer.company': 'Company',
}
