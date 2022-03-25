import './css/index.scss'

let navTimer = null

window.addEventListener('scroll', () => {
  const navBar = document.querySelector('.nav')
  const logoContainer = document.querySelector('.logo-container')
  const isMobileScreen = window.matchMedia('(max-width: 700px)').matches

  window.clearTimeout(navTimer)

  if (window.scrollY > 0) {
    logoContainer.style.display = 'none'
    navBar.style.height = `5rem`

    if (isMobileScreen) {
      logoContainer.style.display = 'flex'
    }

    navBar.style.backgroundColor = `rgba(36, 58, 82, 0.8)`
    navBar.style.opacity = 1

    navTimer = setTimeout(() => {
      navBar.style.opacity = 0
      navBar.style.height = 0
    }, 2500)
  } else {
    logoContainer.style.display = 'flex'
    navBar.style.backgroundColor = `rgba(36, 58, 82)`
    navBar.style.height = '10rem'
  }
})

const barMenu = document.querySelector('.bar-container')
const mobileNav = document.querySelector('.mobile-nav')
const closeBtn = document.querySelector('.close')
let isMobileNavOpen = false

barMenu.addEventListener('click', () => {
  isMobileNavOpen = !isMobileNavOpen
  if (isMobileNavOpen) {
    mobileNav.style.transform = 'translateY(0)'
  }
})

closeBtn.addEventListener('click', () => {
  isMobileNavOpen = !isMobileNavOpen
  mobileNav.style.transform = 'translateY(-100vh)'
})
