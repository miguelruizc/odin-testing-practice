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

describe('reverseString function', ()=> {
    test('return reversed string', ()=>{
        expect(reverseString('hello')).toBe('olleh');
    });
});