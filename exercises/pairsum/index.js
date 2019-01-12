// --- Directions
// Top K closest numbers



function pairSumLargest(arrayA, arrayB, k) {

    let res = [];
    let max = 0, sum;
    for (let a of arrayA) {
        for (let b of arrayB) {
            sum = a + b;
            if (k < sum) {
                continue;
            }
            if (sum > max) {
                res = [];
                max = sum;
            }

            if (sum === max) {
                res.push([a, b])
            }
        }
    }

    return res;
}


module.exports = pairSumLargest;
