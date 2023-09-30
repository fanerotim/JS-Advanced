const mathEnforcer = require('../mathEnforcer');
const expect = require('chai').expect;

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined if parameter is not a number', () => {
            let input = '1';
            let expectedResult = undefined;
            let actualResult = mathEnforcer.addFive(input);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return correct result', () => {
            let input = 1;
            let expectedResult = 6;
            let actualResult = mathEnforcer.addFive(input);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return correct result, testing with a floting point number', () => {
            let input = 1.5;
            let expectedResult = 6.5;
            let actualResult = mathEnforcer.addFive(input);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return correct result, testing with negative number', () => {
            let input = -1;
            let expectedResult = 4;
            let actualResult = mathEnforcer.addFive(input);

            expect(actualResult).to.equal(expectedResult);
        })
    })

    describe('subtractTen', () => {
        it('should return undefined as parameter is not a number', () => {
            let input = '10';
            let expectedResult = undefined;
            let actualResult = mathEnforcer.subtractTen(input);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return correct result with a non-number parameter', () => {
            let input = 10;
            let expectedResult = 0;
            let actualResult = mathEnforcer.subtractTen(input);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return correct result with a non-number parameter', () => {
            let input = 20;
            let expectedResult = 10;
            let actualResult = mathEnforcer.subtractTen(input);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return correct result with a non-number parameter', () => {
            let input = 0;
            let expectedResult = -10;
            let actualResult = mathEnforcer.subtractTen(input);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return correct result, testing with a negative number', () => {
            let input = -5;
            let expectedResult = -15;
            let actualResult = mathEnforcer.subtractTen(input);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return correct result, testing with a negative number', () => {
            let input = 15.1;
            let expectedResult = 5.1;
            let actualResult = mathEnforcer.subtractTen(input);

            expect(actualResult).to.equal(expectedResult);
        })
    })

    describe('sum', () => {
        it('should return undefined as first parameter is not a number', () => {
            let firstArg = '5';
            let secondArg = 5;
            let expectedResult = undefined;
            let actualResult = mathEnforcer.sum(firstArg, secondArg);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return undefined as second parameter is not a number', () => {
            let firstArg = 5;
            let secondArg = '5';
            let expectedResult = undefined;
            let actualResult = mathEnforcer.sum(firstArg, secondArg);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return the sum of two arguments', () => {
            let firstArg = 5;
            let secondArg = 5;
            let expectedResult = 10;
            let actualResult = mathEnforcer.sum(firstArg, secondArg);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return the sum of two arguments', () => {
            let firstArg = -5;
            let secondArg = 5;
            let expectedResult = 0;
            let actualResult = mathEnforcer.sum(firstArg, secondArg);

            expect(actualResult).to.equal(expectedResult);
        })

        it('should return the sum of two arguments', () => {
            let firstArg = 2.2;
            let secondArg = 1.1;
            let expectedResult = 3.3;
            let actualResult = mathEnforcer.sum(firstArg, secondArg);

            expect(actualResult).to.be.closeTo(expectedResult, 0.01);
        })
    })
})