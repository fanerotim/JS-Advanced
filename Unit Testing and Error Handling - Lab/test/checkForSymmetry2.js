let solve = require('../checkForSymmetry');
let expect = require('chai').expect;

describe('check for symmetry', () => {

    it('checks if the array is symmetrical', () => {

        let testArr = [1, 2, 1];
        let expectedResult = true;
        let actualResult = solve(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = [1, 2, 3];
        let expectedResult = false;
        let actualResult = solve(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = 1;
        let expectedResult = false;
        let actualResult = solve(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = [];
        let expectedResult = true;
        let actualResult = solve(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = [0];
        let expectedResult = true;
        let actualResult = solve(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = [1, 2, '1'];
        let expectedResult = false;
        let actualResult = solve(testArr);

        expect(actualResult).to.equal(expectedResult);
    });
})
