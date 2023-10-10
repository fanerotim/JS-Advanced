const isOddOrEven = require('../evenOrOdd');
// const solve = require('../evenOrOdd');
const expect = require('chai').expect;

describe('even or odd', () => {
    it('checks if result is undefined', () => {
        let input = 1;
        let expectedResult = undefined;
        let actualResult = isOddOrEven(input);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks is length is even', () => {
        let input = 'autumn';
        let expectedResult = 'even';
        let actualResult = isOddOrEven(input);

        expect(actualResult).to.equal(expectedResult);
    })

    it('checks if length is odd', () => {
        let input = 'sunny';
        let expectedResult = 'odd';
        let actualResult = isOddOrEven(input);

        expect(actualResult).to.equal(expectedResult);
    })
})