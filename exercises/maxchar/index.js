// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {};

    let arr = str.split('');

    for (let c of arr) {
        if (map[c]) {
            map[c]++;
        } else {
            map[c] = 1;
        }
    }

    let result = null;
    let char =  null;
    for(let m in map){
        if(!result){
            result = map[m];
            char = m;
        }else{
            if(map[m]>result){
                result = map[m];
                char = m;
            }
        }
    }
    return char;
}

module.exports = maxChar;
