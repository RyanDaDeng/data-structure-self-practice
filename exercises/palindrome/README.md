# Palindrome

## Problem

````javascript
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
````

## My Solution

````javascript
function palindrome(str) {

    let afterReverse = str.split('').reverse().join('');
    return afterReverse === str;
}
````

## Course Solution


### Solution 1
````javascript

// same as mine

````

### Solution 2
````javascript

function palindrome(str) {

    return str.split('').every((val, index) => val === str[str.length - index - 1]);

}

````

## Conclusion

remember every usage, solution 2 is doing comparision twice, just in mind.