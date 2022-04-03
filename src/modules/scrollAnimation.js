export default function scrollAnimation(target = 0) {
  if (window.pageYOffset > 0) {
    window.scrollTo(0, target)
    requestAnimationFrame(scrollAnimation)
  }
}
