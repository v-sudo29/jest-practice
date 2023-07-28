function capitalize(string) {
  let text = string
  let firstLetterCapitalized = text.charAt(0).toUpperCase()
  let newString = ''
  for (let i = 0; i < text.length; i++) {
    if (i === 0) newString = newString + firstLetterCapitalized
    else newString = newString + text.charAt(i)
  }
  return newString 
}

function reverse(string) {
  let text = string
  let newString = ''
  for (let i = 0; i < text.length; i++) {
    newString = newString + text.charAt(text.length - 1 - i )
  }
  return newString
}

function caesarCipher(string, shiftNum) {
  let text = string
  let num = shiftNum
  let newString = ''

  for (let i = 0; i < string.length; i++) {
    if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      newString = newString + String.fromCharCode((text.charCodeAt(i) - 97 + shiftNum) % 26 + 97)
    }
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      newString = newString + String.fromCharCode((text.charCodeAt(i) - 65 + shiftNum) % 26 + 65)
    }
  }
  return newString
}

function analyzeArray(arrayNum) {
  // Find average
  const average = arrayNum.reduce((prev, curr) => prev + curr) / arrayNum.length
  
  // Sort numbers
  const sorted = arrayNum.sort((a, b) => a - b)

  return {
    average: average,
    min: sorted[0],
    max: sorted[sorted.length-1],
    length: arrayNum.length
  }

}


export { capitalize, reverse, caesarCipher, analyzeArray }