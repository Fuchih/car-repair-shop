export default function scrollAnimation(position = 0) {
  let scrollTop = document.documentElement.scrollTop || document.body.scrollTop

  const step = () => {
    const distance = position - scrollTop
    scrollTop = scrollTop + distance / 8

    if (Math.abs(distance) < 1) {
      window.scrollTo(0, position)
    } else {
      window.scrollTo(0, scrollTop)
      requestAnimationFrame(step)
    }
  }
  step()
}
