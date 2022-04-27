export function generateVerificationCode() {
  const randomCode = document.querySelector('.verification-code')

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const uppercase = lowercase.map(letter => letter.toUpperCase())
  const codeArray = lowercase.concat(uppercase).concat(numbers).concat(numbers)

  return function() {
    let code = ''
    for (let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random() * (codeArray.length - i) + i)
      code += codeArray[num]
    }

    randomCode.innerText = code
  }
}

export function isVerificationCodeCorrect(code) {
  let inputCode = document.querySelector('.verification-input').value

  if (code !== inputCode) {
    inputCode = ''
    return false
  } else {
    return true
  }
}