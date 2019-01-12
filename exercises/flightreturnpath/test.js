;
const flightReturnPath = require('./index');

test('flightReturnPath is a function', () => {
    expect(typeof flightReturnPath).toEqual('function');
});

test('flightReturnPath returns number of nodes at widest point', () => {

    let a = [[1, 2000], [2, 5000]];
    let b = [[1, 5000], [2, 2000], [3, 8000]];

    const k = 9999;
    expect(flightReturnPath(a, b, k)).toEqual([[1, 1], [1, 2], [2, 2]]);
});

