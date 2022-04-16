import navAnimation from './modules/navAnimation'
import toggleNavBar from './modules/toggleNavBar'
import scrollAnimation from './modules/scrollAnimation'
import pageNavigation from './modules/pageNavigation'
import fetchData from './modules/fetchData'
import setSummary from './modules/summary'
import emailjs from '@emailjs/browser'
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
const toItemsButtons = document.querySelectorAll('.redirect-items')
const googleMap = document.querySelector('#google-map')
const submitContactForm = document.querySelector('#contact-form')
const itemsList = document.querySelector('.items')
const backButton = document.querySelector('#back-button')
const confirmBooking = document.querySelector('#confirm-form')
const loading = document.querySelector('.loading-mask')

window.addEventListener('load', () => {
  preloader.style.opacity = 0
  preloader.style.zIndex = '-999'

  wrap.style.opacity = 1
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

toServiceButton.addEventListener('click', () => pageNavigation('service'))

toMapButton.addEventListener('click', () => {
  pageNavigation('contact')

  setTimeout(() => {
    scrollAnimation(googleMap.getBoundingClientRect().top - 45)
  }, 800)
})

toItemsButtons.forEach((button) =>
  button.addEventListener('click', () => {
    pageNavigation('items')

    loading.style.display = 'flex'

    const itemsData =
      'https://res.cloudinary.com/t19887348/raw/upload/v1648694975/service-items_mgnfpi.json'

    setTimeout(() => {
      fetchData(itemsData)
        .then((data) => {
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
          loading.style.display = 'none'
        })
        .catch(() => {
          alert('An error occurred please try again later.')
          pageNavigation('home')
          loading.style.display = 'none'
        })
    }, 1000)
  }),
)

submitContactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  loading.style.display = 'flex'

  emailjs
    .sendForm(
      'service_0jti1ia',
      'template_ijv8ccf',
      '#contact-form',
      'cm2n-IR-_xcXVmrHC',
    )
    .then(
      (response) => {
        alert('Your message has been submitted.')
        console.log('SUCCESS!', response.status, response.text)
        loading.style.display = 'none'
      },
      (err) => {
        alert('An error occurred please try again later.')
        console.log('FAILED...', err)
        loading.style.display = 'none'
      },
    )

  submitContactForm.reset()
})

itemsList.addEventListener('click', (e) => {
  const itemTitle = document.querySelector('.booking-item-title')
  const summaryPrice = document.querySelector('.summary-detail-price')

  let target = e.target
  if (target.nodeName === 'BUTTON') pageNavigation('summary')
  else return

  const selectedItem =
    target.previousElementSibling.previousElementSibling.textContent
  const selectedItemPrice = target.previousElementSibling.textContent

  itemTitle.innerText = selectedItem
  summaryPrice.innerText = selectedItemPrice

  setSummary()
})

backButton.addEventListener('click', () => pageNavigation('summary'))

confirmBooking.addEventListener('submit', (e) => {
  e.preventDefault()
  loading.style.display = 'flex'

  emailjs
    .sendForm(
      'service_0jti1ia',
      'template_9uh82nt',
      '#confirm-form',
      'cm2n-IR-_xcXVmrHC',
    )
    .then(
      (response) => {
        alert(
          'Your booking request has been sent. \n We will get back to you ASAP!',
        )
        console.log('SUCCESS!', response.status, response.text)
        loading.style.display = 'none'
      },
      (err) => {
        alert('An error occurred please try again later.')
        console.log('FAILED...', err)
        loading.style.display = 'none'
      },
    )
})
