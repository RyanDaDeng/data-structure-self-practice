
function flightReturnPath(arrayA, arrayB, k) {

    let res = [];
    let sum;
    for (let a of arrayA) {
        for (let b of arrayB) {
            sum = a[1] + b[1];

            if (k < sum) {
                continue;
            }
            res.push([a[0], b[0]])

        }
    }

    console.log(res);
    return res;
}


module.exports = flightReturnPath;
