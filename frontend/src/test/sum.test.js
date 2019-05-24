const sumA = require('./sum');
const sinon = require('sinon');

sinon.stub(sumA, 'sum').callsFake(function fakeFn(a, b) {
    let c = 5;
    return a + b + c;
});

test('adds 1 + 2 to equal 4', () => {
    expect(sumA.sum(1, 2)).toBe(8);
});