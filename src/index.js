import navAnimation from './modules/navAnimation'
import scrollAnimation from './modules/scrollAnimation'
import './css/index.scss'

window.addEventListener('scroll', () => navAnimation())

const barMenu = document.querySelector('.bar-container')
const mobileNav = document.querySelector('.mobile-nav')
const mobileLink = document.querySelector('.mobile-links')
const closeBtn = document.querySelector('.close')
let isMobileNavOpen = false

function closeNavBanner() {
  isMobileNavOpen = !isMobileNavOpen
  mobileNav.style.transform = 'translateY(-100vh)'
}

barMenu.addEventListener('click', () => {
  isMobileNavOpen = !isMobileNavOpen
  if (isMobileNavOpen) {
    mobileNav.style.transform = 'translateY(0)'
  }
})

closeBtn.addEventListener('click', () => closeNavBanner())

const homeAnchors = document.querySelectorAll('.home-anchor')
const aboutAnchors = document.querySelectorAll('.about-anchor')
const serviceAnchors = document.querySelectorAll('.service-anchor')
const contactAnchors = document.querySelectorAll('.contact-anchor')
const navBars = document.querySelectorAll('.nav-bar')
const home = document.querySelector('#home')
const aboutUs = document.querySelector('#about-us')

const navTargets = [home, aboutUs]

mobileLink.addEventListener('click', (e) => {
  const target = e.target
  if (target.nodeName === 'A') closeNavBanner()
})

homeAnchors.forEach((homeAnchor) => {
  homeAnchor.addEventListener('click', () => {
    navTargets.forEach((target) => {
      target.style.position = 'absolute'
      target.style.transform = 'translateX(-500vw)'
    })

    home.style.position = 'static'
    home.style.transform = 'translateX(0)'
    scrollAnimation(window, 0)
  })
})

aboutAnchors.forEach((aboutAnchor) => {
  aboutAnchor.addEventListener('click', () => {
    navTargets.forEach((target) => {
      target.style.position = 'absolute'
      target.style.transform = 'translateX(-500vw)'
    })

    aboutUs.style.position = 'static'
    aboutUs.style.transform = 'translateX(0)'
    scrollAnimation(window, 0)
  })
})
