import navAnimation from './modules/navAnimation'
import toggleNavBar from './modules/toggleNavBar'
import pageNavigation from './modules/pageNavigation'
import fetchItemsData from './modules/fetchItems'
import './css/index.scss'

const preloader = document.querySelector('#preloader')
const wrap = document.querySelector('#wrap')
const barMenu = document.querySelector('.bar-container')
const homeAnchors = document.querySelectorAll('.home-anchor')
const aboutAnchors = document.querySelectorAll('.about-anchor')
const serviceAnchors = document.querySelectorAll('.service-anchor')
const contactAnchors = document.querySelectorAll('.contact-anchor')
const toServiceButton = document.querySelector('#redirect-to-service')
const toMapButton = document.querySelector('#redirect-to-map')
const toItemsButton = document.querySelectorAll('.redirect-items')
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

toServiceButton.addEventListener('click', () => {
  pageNavigation('service')
})

toMapButton.addEventListener('click', () => {
  pageNavigation('contact')

  setTimeout(() => {
    window.scrollTo({
      top: googleMap.getBoundingClientRect().top - 45,
      behavior: 'smooth',
    })
  }, 800)
})

toItemsButton.forEach((button) =>
  button.addEventListener('click', () => {
    pageNavigation('items')

    fetchItemsData().then((data) => {
      const items = document.querySelector('.items')

      const itemList = data
        .map((item) => {
          return `
            <li class="item">
              <img
                class="item-img"
                src=${item.img}
                alt=${item.title}
              />
              <h2 class="item-title">${item.title}</h2>
              <div class="item-price">$${item.price}</div>
              <button class="item-book">book now</button>
            </li>
          `
        })
        .join('')

      items.innerHTML = itemList
    })
  }),
)
