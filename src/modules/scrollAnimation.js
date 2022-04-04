export default function scrollAnimation(target = 0) {
  clearInterval(window.timer)

  window.timer = setInterval(() => {
    let step = (target - window.pageYOffset) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)

    if (window.pageYOffset === target) {
      clearInterval(window.timer)
    }

    window.scroll(0, window.pageYOffset + step)
  }, 15)
}
