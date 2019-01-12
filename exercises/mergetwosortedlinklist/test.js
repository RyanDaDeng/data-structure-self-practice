const mergeLinked = require('./index');

test('mergeLinked is a function', () => {
    expect(typeof mergeLinked).toEqual('function');
});

test('mergeLinked returns path', () => {

    const mat = [
        [0, 0, 1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1]
    ];

    expect(mergeLinked(mat)).toEqual(3);
});
