// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {

    let direction = 1// right, down, left, top
    let x = 0;
    let y = 0;
    let map = [];
    let size = n;
    // init 2-d array


    map = [...Array(n)].map(x=>Array(n).fill(0));

    let counter = 1;
    while (counter <= n*n) {

        console.log(x+' '+y + ' '+counter +' '+ direction)

        if(map[x][y]===0){
            map[x][y] = counter;
        }

        if (direction === 1) {
            if(typeof map[x][y+1]  === 'undefined' || map[x][y+1] > 0){
                direction = 2;
            }else{
                y++;
            }
        }
        if(direction === 2){
            if(typeof map[x+1] === 'undefined' || map[x+1][y] > 0 ){
                direction = 3;
            }else{
                x++;
            }
        }

        if(direction === 3){
            if(typeof map[x][y-1] === 'undefined'|| map[x][y-1] > 0){
                direction = 4;
            }else{
                y--;
            }
        }

        if(direction === 4){
            if(typeof map[x-1] === 'undefined'|| map[x-1][y] > 0){
                direction = 1;
            }else{
                x--;
            }
        }

        counter++;
    }

    console.log(map);

    return map;
}



module.exports = matrix;
