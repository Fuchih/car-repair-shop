import scrollAnimation from './scrollAnimation'

const home = document.querySelector('#home')
const about = document.querySelector('#about-us')
const service = document.querySelector('#service')
const contact = document.querySelector('#contact')
const items = document.querySelector('#items-container')

const navTargets = { home, about, service, contact, items }

export default function pageNavigation(event) {
  const targetName = event.target?.textContent ?? event

  for (const targetName in navTargets) {
    navTargets[targetName].style.position = 'absolute'
    navTargets[targetName].style.transform = 'translateX(-500vw)'
  }

  navTargets[targetName].style.position = 'static'
  navTargets[targetName].style.transform = 'translateX(0)'

  scrollAnimation()
}
