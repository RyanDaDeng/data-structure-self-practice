// --- Directions
// Given a string of lowercase alphabets, count all possible substrings (not necessarily distinct) that has exactly k distinct characters.

function distinctString(str, k) {

    let arr = str.split('');

    let map = new Map();

    for (let i = 0; i < ; i++){

    }


    for(let key in arr){


        for(let b in arr)
        if(map.has(char)){
            map.set(char,map.get(char)+1); // increase number of count
        }else{
            map.set(char,1);
        }
    }

    return 0;
}


module.exports = distinctString;
