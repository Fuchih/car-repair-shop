import scrollAnimation from './scrollAnimation'

const home = document.querySelector('#home')
const about = document.querySelector('#about-us')
const service = document.querySelector('#service')
const contact = document.querySelector('#contact')

const navTargets = { home, about, service, contact }

export default function pageNavigation(pageAnchor) {
  return pageAnchor.addEventListener('click', (e) => {
    const targetName = e.target.textContent

    for (const targetName in navTargets) {
      navTargets[targetName].style.position = 'absolute'
      navTargets[targetName].style.transform = 'translateX(-500vw)'
    }

    navTargets[targetName].style.position = 'static'
    navTargets[targetName].style.transform = 'translateX(0)'

    scrollAnimation()
  })
}
