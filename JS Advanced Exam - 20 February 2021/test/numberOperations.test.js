let numberOperations = require('../numberOperations');
let expect = require('chai').expect;

describe('Tests numberOperations object', function () {

    describe('Tests numberChecker function', function () {
        it('checks if output is correct', function () {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });

        it('checks if output is correct', function () {
            expect(numberOperations.powNumber(6)).to.equal(36);
        });

        it('checks if output is correct', function () {
            expect(numberOperations.powNumber(0)).to.equal(0);
        });

        it('checks if output is correct', function () {
            expect(numberOperations.powNumber(-5)).to.equal(25);
        });
    });

    describe('Tests numberChecker function', () => {
        it('validates input', () => {
            expect(() => numberOperations.numberChecker('incorrect')).to.throw('The input is not a number!');
        })

        it('validates input', () => {
            expect(() => numberOperations.numberChecker('Random')).to.throw('The input is not a number!');
        })

        it('validates input', () => {
            expect(() => numberOperations.numberChecker('[]')).to.throw('The input is not a number!');
        })

        it('validates input', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        })

        it('validates input', () => {
            expect(numberOperations.numberChecker(200)).to.equal('The number is greater or equal to 100!');
        })

        it('validates input', () => {
            expect(numberOperations.numberChecker(0)).to.equal('The number is lower than 100!');
        })

        it('validates input', () => {
            expect(numberOperations.numberChecker(25)).to.equal('The number is lower than 100!');
        })
    })

    describe('Tests the sumArrays function', () => {

        it ('checks if output is correct', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [3, 2, 1])).to.eql([4, 4, 4]);
        })

        it ('checks if output is correct', () => {
            expect(numberOperations.sumArrays([3, 1, 2], [4, 6, 5])).to.eql([7, 7, 7]);
        })

        it ('checks if output is correct', () => {
            expect(numberOperations.sumArrays([3, 1, 2, 4], [4, 6, 5])).to.eql([7, 7, 7, 4]);
        })

        it ('checks if output is correct', () => {
            expect(numberOperations.sumArrays([3, 1, 2], [4, 6, 5, 4])).to.eql([7, 7, 7, 4]);
        })
    })

});
