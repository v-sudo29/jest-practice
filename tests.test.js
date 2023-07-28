import { capitalize, reverse, caesarCipher, analyzeArray } from "./functions"

test('take a string, returns string with first char capitalize', () => {
  expect(capitalize('hi there')).toMatch('Hi there')
})

test('take a string, returns reversed', () => {
  expect(reverse('abcdefg')).toMatch('gfedcba')
})

test('calculator object returns correct calculations', () => {
  const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b
  }

  expect(calculator.add(4, 5)).toBe(9)
  expect(calculator.subtract(10, 5)).toBe(5)
  expect(calculator.divide(10, 5)).toBe(2)
  expect(calculator.multiply(4, 5)).toBe(20)
})

// Caesar Cipher
test('takes a string and a shift factor and returns it with each character shifted', () => {
  expect(caesarCipher('abc', 1)).toMatch('bcd')
  expect(caesarCipher('hello', 2)).toMatch('jgnnq')
  expect(caesarCipher('xyz', 5)).toMatch('cde')
  expect(caesarCipher('ABC', 1)).toMatch('BCD')
})

// Analyze array
test('takes an array of numbers and returns an object with the following properties: average, min, max, and length', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
})