// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    let reversedStr = '';
    let stringArray = str.split('');
    for (let i = (stringArray.length - 1); i >= 0; i--) {
        reversedStr = reversedStr + stringArray[i]
    }

    return reversedStr;
}

module.exports = reverse;
