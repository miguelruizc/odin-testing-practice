function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
	return string.split('').reverse().join('');
}

class Calculator {
	add(a, b) {
		return a + b;
	}

	subtract(a, b) {
		return a - b;
	}

	divide(a, b) {
		return a / b;
	}

	multiply(a, b) {
		return a * b;
	}
}

function caesarCipher(string, shift) {}

function analyzeArray(array) {}

module.exports = { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
