# Reverse Int

## Problem

````javascript
// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

````

## My Solution

````javascript

function reverseInt(n) {
    let result = parseInt(n.toString().split('').reverse().join(''));
    return Math.sign(n) * result;
}

````

## Course Solution


### Solution 1
````javascript

// same as mine

````


## Conclusion

remember Math.sign()