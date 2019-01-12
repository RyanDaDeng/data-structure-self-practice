;
const pairSumLargest = require('./index');

test('pairSumLargest is a function', () => {
    expect(typeof pairSumLargest).toEqual('function');
});

test('pairSumLargest returns number of nodes at widest point', () => {

    let a = [12, 32, 300,32, 199,56, 5, 23, 234, 4, 299,199];
    let b = [324, 235, 6, 198, 546, 53, 76, 299,199,76534];
    const input = a.sort((a, b) => a - b);
    const input2 = b.sort((a, b) => a - b);
    const k = 500;
    expect(pairSumLargest(input, input2, k)).toEqual([[300,199]]);
});

