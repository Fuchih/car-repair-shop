import navAnimation from './modules/navAnimation'
import toggleNavBar from './modules/toggleNavBar'
import pageNavigation from './modules/pageNavigation'
import fetchData from './modules/fetchData'
import emailjs from '@emailjs/browser'
import './css/index.scss'
import MCDatepicker from 'mc-datepicker'

const x = document.querySelector('#dateTimePicker')

const datePicker = MCDatepicker.create({
  el: '#dateTimePicker',
  bodyType: 'modal',
  selectedDate: new Date(),
  dateFormat: 'dddd, dd mmm yy',
})

const formattedDate = datePicker.getFormatedDate()
datePicker.onClose(() => console.log(x.value))

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
const submitForm = document.querySelector('#contact-form')

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

    const itemsData =
      'https://res.cloudinary.com/t19887348/raw/upload/v1648694975/service-items_mgnfpi.json'
    fetchData(itemsData).then((data) => {
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

submitForm.addEventListener('submit', (e) => {
  e.preventDefault()

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
      },
      (err) => {
        alert('An error occurred please try again later.')
        console.log('FAILED...', err)
      },
    )

  submitForm.reset()
})
