// --- Directions
// Top K closest numbers


function minHeapify(array, index, heapSize) {
    console.log("check index index, value is array[index]");
    while (true) {

        let leftChildIndex = index * 2 + 1;
        let rightChildIndex = index * 2 + 2;
        let minValueIndex = index; // set current index as max value pointer

        // if left child less than min, then assign left to min
        if (leftChildIndex < heapSize && array[leftChildIndex] < array[index]) {
            minValueIndex = leftChildIndex;
        }

        // if right child less than min, then assign right to min
        if (rightChildIndex < heapSize && array[rightChildIndex] < array[minValueIndex]) {
            minValueIndex = rightChildIndex;
        }

        if (minValueIndex === index) {
            console.log("min minValueIndex equal to index index");
            // if there is no more data less than current index
            break;
        } else {

            console.log("parent greater than child for index index, swap it with min index minValueIndex");
            // swap the node
            let temp = array[index];
            array[index] = array[minValueIndex];
            array[minValueIndex] = temp;
            index = minValueIndex;
        }
    }
}


function buildMinHeap(array) {
    let length = array.length;
    let start = Math.floor(length / 2 - 1);

    for (let i = start; i >= 0; i--) {
        minHeapify(array, i, length);
    }
}


function fivehighest(products, k) {

    let hashList = {};

    for (const product of products) {
        if (!hashList[product.id]) {
            hashList[product.id] = [];
        }
        if (hashList[product.id].length < k) {
            hashList[product.id].push(product.value);
        } else {
            hashList[product.id].push(product.value)
            hashList[product.id] = hashList[product.id].sort(function (a, b) {
                return b - a;
            }).splice(0,k);
            // buildMinHeap(hashList[product.id]);
            // if (product.value > hashList[product.id][0]) {
            //     hashList[product.id][0] = product.value;
            //     buildMinHeap(hashList[product.id]);
            // }
        }
    }

    console.log(hashList);

    let res = [];
    for(const key in hashList){
        if (hashList.hasOwnProperty(key)) {
            res.push({
                id : key,
                value: hashList[key].reduce((a,b)=>a+b) /2
            })
        }
    }
    console.log(res);

}

function kClosest(array, k) {

    const origin = [0, 0];
    let distance = [];
    let dist, sorted, res = [];
    for (let p of array) {
        dist = getEuclideanDist(origin[0], origin[1], p[0], p[1]);
        distance.push([p, dist]);
    }
    sorted = Object.keys(distance).sort(function (a, b) {
        return distance[a][1] - distance[b][1];
    }).splice(0, k);

    for (let s of sorted) {
        res.push(distance[s][0])
    }
    return res;
}

function getEuclideanDist(x1, y1, x2, y2) {
    return Math.round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
}

module.exports = fivehighest;
