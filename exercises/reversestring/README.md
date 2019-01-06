# Problem

 --- Directions

 Given a string, return a new string with the reversed order of characters

 --- Examples

   reverse('apple') === 'elppa'

   reverse('hello') === 'olleh'

   reverse('Greetings!') === '!sgniteerG'

# My First Solution

- Store string into an array, and reversely loop through the array to generate a reversed string
- O(n)


```javascript

function reverse(str) {

    const reversedStr = '';
    let stringArray = str.split('');
    for (let i = (stringArray.length - 1); i >= 0; i--) {
        reversedStr = reversedStr + stringArray[i]
    }

    return reversedStr;
}

```


# Course Solution

## solution 1

1. use reverse() function which is supported by JS to reverse Array
2. and then use join to convert array to string

```javascript

function reverse(str) {
    return str.split('').reverse().join('');
}

```

## solution 2


```javascript

function reverse(str) {

    let reversedStr = '';

    for(let char of str){
        reversedStr = char + reversedStr;
    }
    return reversedStr;
}

```


## Solution 3

```javascript
function reverse(str) {
    return str.split('').reduce((rev, char) => char + rev, '');
}
```

# Summary & Conclusion

1. Solution 1: think of using more JS built-in functions instead of thinking for loop sometimes
2. Solution 2: use ES new sytax avoid to use traditional for loop, also remember one single loop can handle reversed string by adding new char in front
3. Solution 3: use ES syntax and know Reduce function