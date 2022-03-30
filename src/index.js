import navAnimation from './modules/navAnimation'
import toggleNavBar from './modules/toggleNavBar'
import pageNavigation from './modules/pageNavigation'
import './css/index.scss'

const preloader = document.querySelector('#preloader')
const wrap = document.querySelector('#wrap')
const barMenu = document.querySelector('.bar-container')
const homeAnchors = document.querySelectorAll('.home-anchor')
const aboutAnchors = document.querySelectorAll('.about-anchor')
const serviceAnchors = document.querySelectorAll('.service-anchor')
const contactAnchors = document.querySelectorAll('.contact-anchor')
const redirectToService = document.querySelector('#redirect-to-service')
const redirectToMapButton = document.querySelector('#redirect-to-map')
const googleMap = document.querySelector('#google-map')

window.addEventListener('load', () => {
  preloader.style.opacity = 0
  preloader.style.zIndex = '-999'

  setTimeout(() => {
    wrap.style.opacity = 1
  }, 500)
})

window.addEventListener('scroll', () => navAnimation())
barMenu.addEventListener('click', () => toggleNavBar())

const targetAnchors = [
  homeAnchors,
  aboutAnchors,
  serviceAnchors,
  contactAnchors,
]

targetAnchors.forEach((anchors) => {
  anchors.forEach((anchor) =>
    anchor.addEventListener('click', (e) => {
      pageNavigation(e)
    }),
  )
})

redirectToService.addEventListener('click', () => {
  pageNavigation(serviceAnchors[0])
})

redirectToMapButton.addEventListener('click', () => {
  pageNavigation(contactAnchors[0])

  setTimeout(() => {
    window.scrollTo({
      top: googleMap.getBoundingClientRect().top - 100,
      behavior: 'smooth',
    })
  }, 800)
})
