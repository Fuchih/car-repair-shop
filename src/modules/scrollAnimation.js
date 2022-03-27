export default function scrollAnimation(obj, target) {
  clearInterval(obj.timer)

  obj.timer = setInterval(() => {
    let step = (target - window.pageYOffset) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)

    if (window.pageYOffset === target) {
      clearInterval(obj.timer)
    }

    window.scroll(0, window.pageYOffset + step)
  }, 20)
}
