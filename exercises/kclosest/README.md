# K-Closet
We are given an array of n points in the plane, and the problem is to find out the top k closest pair of points in the array.

## My Solution

````javascript

   let arr = [root];
   let result = [1];
    while(arr.length){
        let allChildrenSize = 0;
        for(let n of arr){
            allChildrenSize += n.children.length;
        }
        if(allChildrenSize>0){
            result.push(allChildrenSize);
        }

        let temp = [];
        for(let n of arr){
            temp.push(...n.children);
        }
        arr = temp;
    }
    return result;

````
## Course Solution

````javascript

function levelWidth(root) {

    let counters = [0];
    let arr = [root,'s'];

    while(arr.length > 1){
        const node = arr.shift();

        if(node === 's'){
            counters.push(0);
            arr.push('s');
        }else{
            arr.push(...node.children);
            counters[counters.length-1]++;
        }
    }

    return counters;
}


````
## Conclusion

Remember to use one array as buffer to make more memory usage