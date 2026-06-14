import './style.css'
import { BRAND } from './config.js'
import { detectLang, applyI18n, localizeRoutes } from './i18n.js'
import { homeEN } from './lang/home.en.js'

const lang = detectLang()

/* ---- Markenname zentral anwenden (Single Source of Truth) ---- */
const setBrand = (key, value) =>
  document.querySelectorAll(`[data-brand="${key}"]`).forEach((el) => { el.textContent = value })
setBrand('name', BRAND.name)
setBrand('claim', BRAND.claim)
setBrand('domain', lang === 'en' ? 'eunavia.com' : 'eunavia.de')
setBrand('tagline', BRAND.tagline)
document.title = `${BRAND.name} – ${BRAND.tagline}`

/* ---- Sprache anwenden (NACH data-brand, damit EN den Claim überschreibt) ---- */
applyI18n(homeEN, lang)
localizeRoutes(lang) // interne Routen englisch (/datenschutz → /privacy)

/* ---- Theme: Persistenz + Toggle (Default Dark) ---- */
const root = document.documentElement
const stored = localStorage.getItem('eunavia-theme')
if (stored === 'light' || stored === 'dark') root.setAttribute('data-theme', stored)

document.getElementById('themeToggle')?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  localStorage.setItem('eunavia-theme', next)
})

/* ---- Header bekommt Linie sobald gescrollt wird ---- */
const header = document.querySelector('.site-header')
const onScroll = () => header?.classList.toggle('is-stuck', window.scrollY > 12)
onScroll()
window.addEventListener('scroll', onScroll, { passive: true })

/* ---- Reveal-on-Scroll ---- */
const reveals = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          io.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.14, rootMargin: '0px 0px -50px 0px' }
  )
  reveals.forEach((el) => io.observe(el))
} else {
  reveals.forEach((el) => el.classList.add('is-visible'))
}

/* ---- Count-up für die Kennzahlen ---- */
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const counters = document.querySelectorAll('.stat__num[data-count]')
const animateCount = (el) => {
  const target = parseInt(el.dataset.count, 10)
  const suffix = el.dataset.suffix || ''
  if (prefersReduced) { el.textContent = target + suffix; return }
  const duration = 1500
  let start = null
  const step = (ts) => {
    if (start === null) start = ts
    const p = Math.min((ts - start) / duration, 1)
    const eased = 1 - Math.pow(1 - p, 3)
    el.textContent = Math.round(target * eased) + suffix
    if (p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}
if ('IntersectionObserver' in window && counters.length) {
  const cio = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { animateCount(entry.target); cio.unobserve(entry.target) }
      })
    },
    { threshold: 0.6 }
  )
  counters.forEach((el) => cio.observe(el))
} else {
  counters.forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || '')))
}

/* ---- Jahr im Footer ---- */
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()
