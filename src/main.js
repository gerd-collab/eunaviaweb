import './style.css'
import { BRAND } from './config.js'

/* ---- Markenname zentral anwenden (Single Source of Truth) ---- */
document.querySelectorAll('[data-brand="name"]').forEach((el) => {
  el.textContent = BRAND.name
})
document.querySelectorAll('[data-brand="claim"]').forEach((el) => {
  el.textContent = BRAND.claim
})
document.querySelectorAll('[data-brand="domain"]').forEach((el) => {
  el.textContent = BRAND.domain
})
document.querySelectorAll('[data-brand="tagline"]').forEach((el) => {
  el.textContent = BRAND.tagline
})
document.title = `${BRAND.name} – ${BRAND.slogan}`

/* ---- Theme: Persistenz + Toggle (Default Dark) ---- */
const root = document.documentElement
const stored = localStorage.getItem('eunavia-theme')
if (stored === 'light' || stored === 'dark') {
  root.setAttribute('data-theme', stored)
}

const toggle = document.getElementById('themeToggle')
toggle?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  root.setAttribute('data-theme', next)
  localStorage.setItem('eunavia-theme', next)
})

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
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )
  reveals.forEach((el) => io.observe(el))
} else {
  reveals.forEach((el) => el.classList.add('is-visible'))
}

/* ---- Jahr im Footer ---- */
const yearEl = document.getElementById('year')
if (yearEl) yearEl.textContent = new Date().getFullYear()
