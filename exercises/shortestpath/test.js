const shortestPath = require('./index');

test('levelWidth is a function', () => {
    expect(typeof shortestPath).toEqual('function');
});

test('shortestPath returns path', () => {

    const mat = [
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
        [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
        [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 1, 0, 0, 1]
    ];

    const sorce = [0, 0], destination = [3, 4];

    expect(shortestPath(mat, sorce, destination)).toEqual(11);
});

