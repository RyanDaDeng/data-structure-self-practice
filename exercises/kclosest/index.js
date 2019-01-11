// --- Directions
// Top K closest numbers

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
    }).splice(0,k);

    for (let s of sorted) {
        res.push(distance[s][0])
    }
    return res;
}

function getEuclideanDist(x1, y1, x2, y2) {
    return Math.round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)));
}

module.exports = kClosest;
