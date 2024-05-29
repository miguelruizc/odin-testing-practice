const {
	capitalize,
	reverseString,
	Calculator,
	caesarCipher,
	analyzeArray,
} = require('./testing-practice.js');

describe('capitalize function', () => {
	test('return string with first letter capitalized', () => {
		expect(capitalize('hello')).toBe('Hello');
	});
});

describe('reverseString function', () => {
	test('return reversed string', () => {
		expect(reverseString('hello')).toBe('olleh');
	});
});

describe('Calculator methods', () => {
	let calculator = new Calculator();

	test('add() returns sum of two numbers', () => {
		expect(calculator.add(1, 2)).toBe(3);
	});

	test('subtract() returns difference of two numbers', () => {
		expect(calculator.subtract(1, 2)).toBe(-1);
	});

	test('divide() returns quotient of two numbers', () => {
		expect(calculator.divide(1, 2)).toBe(0.5);
	});

    test('multiply() returns product of two numbers', ()=> {
        expect(calculator.multiply(3, 4)).toBe(12);
    });
});

describe('caesarCipher function', ()=>{
    test('return shifted string', ()=> {
        expect(caesarCipher('abc', 1)).toBe('bcd');
    });

    test('return wrapped characters after z/Z', ()=>{
        expect(caesarCipher('xYz', 3)).toBe('aBc');
    });

    test('preserve non-alphabetical characters', ()=>{
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
});

describe('analyzeArray function', ()=>{
    test('contains object with average of numbers', ()=>{
        expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({'average': 4});
    });

    test('contains object with min of numbers', ()=>{
        expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({'min': 1});
    });

    test('contains object with max of numbers', ()=>{
        expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({'max': 8});
    });

    test('contains object with length of array', ()=>{
        expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({'length': 6});
    });
});

