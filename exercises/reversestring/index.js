// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}

function my(str) {
    let reversedStr = '';
    let stringArray = str.split('');
    for (let i = (stringArray.length - 1); i >= 0; i--) {
        reversedStr = reversedStr + stringArray[i]
    }
    return reversedStr;
}

function reverse1(str) {
    return str.split('').reverse().join('');
}


function reverse2(str) {

    let reversedStr = '';

    for (let char of str) {
        reversedStr = char + reversedStr;
    }
    return reversedStr;
}

module.exports = reverse;
