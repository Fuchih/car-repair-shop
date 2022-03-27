const mobileNav = document.querySelector('.mobile-nav')
const mobileLink = document.querySelector('.mobile-links')

let isNavBarClose = true

mobileLink.addEventListener('click', (e) => {
  const target = e.target
  if (target.nodeName === 'A') toggleNavBar()
})

export default function toggleNavBar() {
  isNavBarClose
    ? (mobileNav.style.transform = 'translateY(0)')
    : (mobileNav.style.transform = 'translateY(-100vh)')
  isNavBarClose = !isNavBarClose
}
