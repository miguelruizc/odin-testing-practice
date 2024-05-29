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
