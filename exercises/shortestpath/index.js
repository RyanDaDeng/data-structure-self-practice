// --- Directions
// Given a MxN matrix where each element can either be 0 or 1.
// We need to find the shortest path between a given source cell to a destination cell.
// The path can only be created out of a cell if its value is 1.
// You will be provided with start and goal locations

//
function shortestPath(matrix, start, goal) {

    const ROW = matrix.length;
    const COL = matrix[0].length;

    // init a set of visited list and put first root as first element
    let visited = new Set();
    visited.add(start);
    let queue = [[start[0], start[1], 0]]; // [x,y,dist]

    let neighboursParam = [[0, 1], [0, -1], [-1, 0], [1, 0]]; // this is used to calculate neighbours

    while (queue.length) {

        const curr = queue.shift(); // return first element and remove it

        // if the point arrives at goal point
        if (curr[0] === goal[0] && curr[1] === goal[1]) {
            return curr[2]; // return dist
        }

        // check its 4 neighbours, top, bottom, left and right
        let x, y;
        for (let param of neighboursParam) {
            x = curr[0] + param[0];
            y = curr[1] + param[1];

            // neighbours need to be valid
            // 1. the point needs to be always in threshold, e.g. no less that (0,0), and no greater than (ROW,COL)
            // 2. the point has never be visited
            // 3. only value of 1 can be accessed
            if ((x < ROW && y < COL && x >= 0 && y >= 0) && visited.has([x, y]) === false && matrix[x][y] === 1) {
                visited.add([x, y]);
                queue.push([x, y, curr[2] + 1]);
            }

        }
    }
    return 0;
}


module.exports = shortestPath;
