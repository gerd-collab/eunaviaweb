/* ============================================================
   Eunavia — Verhaltensschicht der Datenschutz-Seite
   Teilt Design (style.css), Marke (config.js) und i18n-Engine
   mit der Startseite. Kein Count-up/Hero-Video hier nötig.
   ============================================================ */

import './style.css'
import { BRAND } from './config.js'
import { detectLang, applyI18n } from './i18n.js'
import { datenschutzEN } from './lang/datenschutz.en.js'

const lang = detectLang()

/* ---- Markenname zentral anwenden (Single Source of Truth) ---- */
const setBrand = (key, value) =>
  document.querySelectorAll(`[data-brand="${key}"]`).forEach((el) => { el.textContent = value })
setBrand('name', BRAND.name)
setBrand('claim', BRAND.claim)
setBrand('domain', lang === 'en' ? 'eunavia.com' : 'eunavia.de')
setBrand('tagline', BRAND.tagline)

/* ---- Sprache anwenden (Deutsch = No-Op via HTML, Englisch ersetzt) ---- */
applyI18n(datenschutzEN, lang)
if (lang === 'en') document.title = datenschutzEN['ds.meta.title']

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

/* ---- Jahr im Footer ---- */
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()
