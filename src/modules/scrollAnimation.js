let step = 0

export default function scrollAnimation() {
  if (window.pageYOffset > 0) {
    step -= 10
    window.scroll(0, window.pageYOffset + step)
    requestAnimationFrame(scrollAnimation)
  } else {
    step = 0
  }
}
