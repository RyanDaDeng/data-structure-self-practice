const mst = require('./index');

test('whiteandblack is a function', () => {
    expect(typeof mst).toEqual('function');
});

// test('whiteandblack returns path', () => {
//
//     const edges = [
//         ['A','B',1],
//         ['B','C',4],
//         ['A','C',5]
//     ];
//
//     const numOfEdges = 3;
//     const vertex = ['A','B','C'];
//     expect(mst(edges,vertex)).toEqual([['A','B',1],['B','C',4]]);
// });

test('whiteandblack returns path', () => {

    const edges = [

    ];

    const numOfEdges = 0;
    const vertex = [];
    expect(mst(edges,vertex)).toEqual([]);
});

test('whiteandblack returns path', () => {

    const edges = [
        ['A','B',1],
        ['B','C',999],
        ['C','D',3],
        ['A','D',2]
    ];

    const numOfEdges = 3;
    const vertex = ['A','B','C','D'];
    expect(mst(edges,vertex)).toEqual([['A','B',1],['A','D',2],['D','C',3]]);
});

//
//
// test('whiteandblack returns path', () => {
//
//
//     const edges = [
//         ['A','B',1],
//         ['B','C',4],
//         ['A','C',5]
//     ];
//     const numOfEdges = 3;
//     const vertex = ['A','B','C'];
//     expect(mst(edges,vertex)).toEqual([['A','B',1],['B','C',4]]);
// });
//
//
// test('whiteandblack returns path', () => {
//
//     const edges = [
//         ['A','B',1],
//         ['B','C',999],
//         ['D','C',3],
//         ['D','A',2],
//     ];
//     const numOfEdges = 4;
//     const vertex = ['A','B','C','D'];
//
//     expect(mst(edges,vertex,'A')).toEqual([['A','B',1],['D','A',2],['D','C',3]]);
// });
