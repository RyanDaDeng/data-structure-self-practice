# Problem

 --- Directions

 Given a string, return a new string with the reversed order of characters

 --- Examples

   reverse('apple') === 'elppa'

   reverse('hello') === 'olleh'

   reverse('Greetings!') === '!sgniteerG'

# My first Solution

- Store string into an array, and reversely loop through the array to generate a reversed string
- O(n)

-
```javascript

function reverse(str) {

    let reversedStr = '';
    let stringArray = str.split('');
    for (let i = (stringArray.length - 1); i >= 0; i--) {
        reversedStr = reversedStr + stringArray[i]
    }

    return reversedStr;
}

```


