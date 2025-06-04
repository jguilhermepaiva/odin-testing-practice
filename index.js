function Capitalize(str)  {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.split('').reverse().join('');
}

class Calculator {
    constructor() {
        this.add = function (a, b) {
            return a + b;
        };
        this.subtract = function (a, b) {
            return a - b;
        };
        this.multiply = function (a, b) {
            return a * b;
        };
        this.divide = function (a, b) {
            if (b === 0) {
                throw new Error('Cannot divide by zero');
            }
            return a / b;
        };
    }
}

function caesarCipher(str, shift) {
    if (typeof str !== 'string' || typeof shift !== 'number') {
        throw new TypeError('Invalid input');
    }
    const normalizedShift = shift < 0 ? (shift % 26) + 26 : shift % 26;

    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            const base = char.toLowerCase() === char ? 97 : 65;
            return String.fromCharCode(((code - base + normalizedShift) % 26) + base);
        }
        return char;
    }).join('');
}

function analyzeArray(arr) {
  if (!Array.isArray(arr) || arr.some(isNaN) || arr.length === 0) {
    if (arr.length === 0) {
        return {
            average: NaN, 
            min: undefined, 
            max: undefined, 
            length: 0
        };
    }
    throw new TypeError('Invalid input: Expected an array of numbers.');
  }

  const length = arr.length;
  const sum = arr.reduce((acc, current) => acc + current, 0);
  const average = sum / length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average: average,
    min: min,
    max: max,
    length: length
  };
}

console.log(analyzeArray([1,8,3,4,2,6]))

module.exports = {
  Capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray
};