;
const distinctString = require('./index');

test('distinctString is a function', () => {
    expect(typeof distinctString).toEqual('function');
});

test('distinctString returns number of nodes at widest point', () => {

    let str = 'abc';
    const k = 2;
    expect(distinctString(str, k)).toEqual(2);
});



test('distinctString returns number of nodes at widest point', () => {

    let str = 'aba';
    const k = 2;
    expect(distinctString(str, k)).toEqual(3);
});



test('distinctString returns number of nodes at widest point', () => {

    let str = 'aa';
    const k = 2;
    expect(distinctString(str, k)).toEqual(3);
});