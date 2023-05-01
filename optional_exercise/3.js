// Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

const hexCode = "#ffffff"
const rgbCode = '255,255,255'

function answer(colorCode) {
    if (colorCode.includes('#')) {
        let convertHex = [];
        for (let i = 1; i < colorCode.length; i += 2) {
            convertHex.push(colorCode.substring(i, i + 2))
        }
        for (let i = 0; i < convertHex.length; i++) {
            convertHex[i] = hexToDec(convertHex[i]);
        }
        return convertHex.join(',');
    } else {
        let convertRGB = rgbCode.split(',');
        for (let i = 0; i < convertRGB.length; i++) {
            convertRGB[i] = decToHex(convertRGB[i]);
        }
        return '#' + convertRGB.join('')
    }
}

function hexToDec(s) {
    var i, j, digits = [0], carry;
    for (i = 0; i < s.length; i += 1) {
        carry = parseInt(s.charAt(i), 16);
        for (j = 0; j < digits.length; j += 1) {
            digits[j] = digits[j] * 16 + carry;
            carry = digits[j] / 10 | 0;
            digits[j] %= 10;
        }
        while (carry > 0) {
            digits.push(carry % 10);
            carry = carry / 10 | 0;
        }
    }
    return digits.reverse().join('');
}

function decToHex(s) {
    return parseInt(s).toString(16)
}

console.log(`HEX ${hexCode} to RGB ${answer(hexCode)}`);
console.log(`RGB ${rgbCode} to HEX ${answer(rgbCode)}`);