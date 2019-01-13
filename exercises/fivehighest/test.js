;
const fivehighest = require('./index');

test('levelWidth is a function', () => {
    expect(typeof fivehighest).toEqual('function');
});

test('levelWidth returns number of nodes at widest point', () => {

    const listProduct = [
        {
            id: 1,
            value: 1.2
        },
        {
            id: 2,
            value: 1.2
        },
        {
            id: 2,
            value: 5.6
        },
        {
            id: 1,
            value: 2
        },
        {
            id: 3,
            value: 2.1
        },
        {
            id: 1,
            value: 1.2
        },
        {
            id: 2,
            value: 2.2
        },
    ];
    const k = 5;
    expect(fivehighest(listProduct, 2)).toEqual([[2, 1], [3, 2]]);
});

