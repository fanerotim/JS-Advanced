const expect = require('chai').expect;
const solve = require('../sumOfNumbers');

describe('sum of numbers', () => {
    it('Should return true if all elements of the input array are summed up', () => {

        let numbers = [1, 3, 5];
        let expectedResult = 9;
        let actualResult = sum(numbers);

        expect(actualResult).to.equal(expectedResult);
    });

    it('Should return true if all elements of the input array are summed up', () => {
        let numbers = [1, 2, 1];
        let expectedResult = 4;
        let actualResult = sum(numbers);

        expect(actualResult).to.equal(expectedResult);
    });

    it('Should return true if all elements of the input array are summed up', () => {
        let numbers = [0, 0, 1];
        let expectedResult = 1;
        let actualResult = sum(numbers);

        expect(actualResult).to.equal(expectedResult);
    });
})






