// --- Directions
// Given a MxN matrix where each element can either be 0 or 1.
// We need to find the shortest path between a given source cell to a destination cell.
// The path can only be created out of a cell if its value is 1.
// You will be provided with start and goal locations

//

function getString(x,y){
    return x.toString()+y.toString();
}

function whiteandblack(matrix) {


    let ROW = matrix.length;
    let COL = matrix[0].length;

    let visited = new Set();
    let num =0;
    for (let i = 0; i < ROW; i++) {
        for (let b = 0; b < COL; b++) {
            if (!visited.has(getString(i,b)) && matrix[i][b] === 1) {
                let regions = bfsTraverse(visited, matrix, i, b);
                // console.log('regions:', regions);
                if(regions.length>1){
                    num++;
                }
            }
        }
    }
    return num;
}


function bfsTraverse(visited, matrix, start_x, start_y) {
    let neighbours = [[-1, 1], [0, 1], [1, 1], [-1, 0], [1, 0], [-1, -1], [0, -1], [1, -1]];
    let queue = [[start_x, start_y]];
    let pixels = [];
    pixels.push([start_x,start_y]);
    visited.has(getString(start_x, start_y));
    matrix[start_x][start_y] = 6
    while (queue.length) {
        const curr = queue.shift();
        let x, y;
        for (let param of neighbours) {
            x = curr[0] + param[0];
            y = curr[1] + param[1];
            // neighbours need to be valid
            // 1. the point needs to be always in threshold, e.g. no less that (0,0), and no greater than (ROW,COL)
            // 2. the point has never be visited
            // 3. only value of 1 can be accessed
            if ((x < matrix.length && y < matrix[0].length && x >= 0 && y >= 0) && visited.has(getString(x, y)) === false) {
                if (matrix[x][y] === 1) {
                    queue.push([x, y]);
                    pixels.push([x, y]);
                    matrix[x][y] = 6
                }
                visited.add(getString(x, y))
            }
        }
    }

    return pixels;

}


module.exports = whiteandblack;
