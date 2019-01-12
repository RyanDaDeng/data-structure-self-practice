const whiteandblack = require('./index');

test('whiteandblack is a function', () => {
    expect(typeof whiteandblack).toEqual('function');
});

test('whiteandblack returns path', () => {

    const mat = [
        [0, 0, 1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1]
    ];

    expect(whiteandblack(mat)).toEqual(3);
});


//
test('whiteandblack returns path', () => {

    const mat = [
        [1, 0, 1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 1, 1]
    ];

    expect(whiteandblack(mat)).toEqual(4);
});
//
//
test('whiteandblack returns path', () => {

    const mat = [
        [1, 0, 1, 0, 1, 1, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 1, 1],
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 1, 1]
    ];

    expect(whiteandblack(mat)).toEqual(3);
});

//
//
test('whiteandblack returns path', () => {

    const mat = [
        [1, 0, 1, 0, 1, 1, 0, 0],
        [1, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0, 0, 1, 1]
    ];

    expect(whiteandblack(mat)).toEqual(3);
});


test('whiteandblack returns path', () => {

    const mat = [
        [1, 0, 1, 0, 1, 1, 0, 0],
        [1, 0, 1, 1, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 1, 0, 1],
        [0, 1, 0, 0, 0, 0, 0, 1],
        [0, 0, 0, 1, 1, 0, 1, 1]
    ];

    expect(whiteandblack(mat)).toEqual(3);
});


