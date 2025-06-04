const { Capitalize, reverseString, Calculator, caesarCipher, analyzeArray } = require('./index');

test('Capitalize function', () => {
    expect(Capitalize('hello')).toBe('Hello');
    expect(Capitalize('world')).toBe('World');
});

test ('Captalize function throw errors', () =>{
    expect(() => Capitalize(123)).toThrow(TypeError);
    expect(() => Capitalize(null)).toThrow(TypeError);
});

test('Reverse string function', ()=> {
    expect(reverseString('Ola')).toBe('alO');
    expect(reverseString('João')).toBe('oãoJ');
});

test('Reverse string function throw erros', ()=> {
    expect(() => reverseString(123)).toThrow(TypeError);
    expect(() => reverseString(null)).toThrow(TypeError);
});


test('Calculator function add', ()=> {
    const calculadora = new Calculator();
    expect(calculadora.add(1, 2)).toBe(3);
    expect(calculadora.add(-1, 12)).toBe(11);
});

test('Calculator function subtract', () => {
    const calculadora = new Calculator();
    expect(calculadora.subtract(5, 1)).toBe(4);
    expect(calculadora.subtract(5, 10)).toBe(-5);
});

test('Calculator function multiply', () => {
    const calculadora = new Calculator();
    expect(calculadora.multiply(5, 5)).toBe(25);
    expect(calculadora.multiply(10, -1)).toBe(-10);
});

test('Calculator function divide', () => {
    const calculadora = new Calculator();
    expect(calculadora.divide(10, 2)).toBe(5);
    expect(calculadora.divide(5, 2)).toBeCloseTo(2.5);
});

test('Calculator function divide for zero', () => {
    const calculadora = new Calculator();
    expect(() => calculadora.divide(10, 0)).toThrow(Error);
});

test('Caesar Cipher function', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('Caesar Cipher function', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Caesar Cipher function', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
});

test('Analyze Array function', () => {
    const object = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6});
})

test('Analyze Array function', () => {
    const object = analyzeArray([-2, 0, 5, -10, 8, 3]);
    expect(object).toEqual({
        average: expect.closeTo(0.6666667, 5), 
        min: -10,
        max: 8,
        length: 6
    });
})

test('Analyze Array function', () => {
    const object = analyzeArray([-2, 0, 5, -10, 8, 3]);
    expect(object.average).toBeCloseTo(0.6666667);
})
test('Analyze Array function', () => {
    const object = analyzeArray([-2, 0, 5, -10, 8, 3]);
    expect(object.min).toBe(-10);
})

test('analyzeArray function throws error for non-array input - string', () => {
  expect(() => analyzeArray('not an array')).toThrow(TypeError);
  expect(() => analyzeArray('not an array')).toThrow('Invalid input: Expected an array of numbers.');
});

test('analyzeArray function throws error for non-array input - null', () => {
    expect(() => analyzeArray(null)).toThrow(TypeError);
});