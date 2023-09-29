let solve = require('../checkForSymmetry');
let expect = require('chai').expect;

describe('check for symmetry', () => {

    it('checks if the array is symmetrical', () => {

        let testArr = [1, 2, 1];
        let expectedResult = true;
        let actualResult = isSymmetric(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = [1, 2, 3];
        let expectedResult = false;
        let actualResult = isSymmetric(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = ['a', 'b', 'a'];
        let expectedResult = true;
        let actualResult = isSymmetric(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = ['b', 'b', 'a'];
        let expectedResult = false;
        let actualResult = isSymmetric(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = {};
        let expectedResult = false;
        let actualResult = isSymmetric(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = 1;
        let expectedResult = false;
        let actualResult = isSymmetric(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = 'string';
        let expectedResult = false;
        let actualResult = isSymmetric(testArr);

        expect(actualResult).to.equal(expectedResult);
    });

    it('checks if the array is symmetrical', () => {

        let testArr = [];
        let expectedResult = true;
        let actualResult = isSymmetric(testArr);

        expect(actualResult).to.equal(expectedResult);
    });
})
