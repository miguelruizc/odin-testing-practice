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

function caesarCipher(string, shiftFactor) {
	let shiftedString = '';

	for (let i = 0; i < string.length; i++) {
		shiftedString += cipherChar(string.charAt(i), shiftFactor);
	}

	return shiftedString;
}

function cipherChar(char, shiftFactor) {
	// Reduce shift factor (e.g. 27 == 1)
	shiftFactor = shiftFactor % 26;

	// Get character unicode
	let charCode = char.charCodeAt(0);

	// RETURN RESULT
	// Wrap lowercase after z
	if (char >= 'a' && char <= 'z') {
		charCode += shiftFactor;
		if (charCode > 122) charCode -= 26;
		return String.fromCharCode(charCode);
	}
	// Wrap uppercase after Z
	else if (char >= 'A' && char <= 'Z') {
		charCode += shiftFactor;
		if (charCode > 90) charCode -= 26;
		return String.fromCharCode(charCode);
	}
	// return unchanged
	return String.fromCharCode(charCode);
}

function analyzeArray(array) {
	return {
        'average': avg(...array),
        'min': Math.min(...array),
        'max': Math.max(...array),
        'length':array.length,
    };
}

function avg(...numbers) {
	const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	return sum / numbers.length;
}

module.exports = { capitalize, reverseString, Calculator, caesarCipher, analyzeArray };
