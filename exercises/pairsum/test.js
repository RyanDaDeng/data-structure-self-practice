;
const kClosest = require('./index');

test('levelWidth is a function', () => {
    expect(typeof kClosest).toEqual('function');
});

test('levelWidth returns number of nodes at widest point', () => {

    const input = [[6, 3], [2, 1], [5, 2], [3, 2], [9, 0]];
    const k = 2;
    expect(kClosest(input,k)).toEqual([[2,1],[3,2]]);
});

