let navTimer = null

export default function navAnimation() {
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

    navBar.style.backgroundColor = `rgba(34, 34, 34, 0.5)`
    navBar.style.opacity = 1

    navTimer = setTimeout(() => {
      navBar.style.opacity = 0
      navBar.style.height = 0
    }, 2500)
  } else {
    logoContainer.style.display = 'flex'
    navBar.style.backgroundColor = `rgba(34, 34, 34, 0.8)`
    navBar.style.height = '10rem'
  }
}
