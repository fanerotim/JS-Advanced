let testNumbers = require('../testNumbers');
let expect = require('chai').expect;

describe("Tests the testNumbers object", function () {

    describe('tests sumNumbers method', function () {
        it('checks if output is correct', function () {
            expect(testNumbers.sumNumbers('incorrect', 5)).to.equal(undefined);
        });

        it('checks if output is correct', function () {
            expect(testNumbers.sumNumbers(5, 'incorrect')).to.equal(undefined);
        });

        it('checks if output is correct', function () {
            expect(testNumbers.sumNumbers(5, 5)).to.equal('10.00');
        });

        it('checks if output is correct', function () {
            expect(testNumbers.sumNumbers(5.5, 5.2)).to.equal('10.70');
        });

        it('checks if output is correct', function () {
            expect(testNumbers.sumNumbers(5.5, -5.2)).to.equal('0.30');
        });

        it('checks if output is correct', function () {
            expect(testNumbers.sumNumbers(-5.5, -5.2)).to.equal('-10.70');
        });
    });

    describe('tests numberChecker function', () => {
        it('validates input', () => {
            expect(() => testNumbers.numberChecker('incorrect')).to.throw('The input is not a number!')
        })

        it('validates input', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!')
        })

        it('validates input', () => {
            expect(testNumbers.numberChecker(13)).to.equal('The number is odd!')
        })

        it('validates input', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!')
        })

        it('validates input', () => {
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!')
        })

        it('validates input', () => {
            expect(testNumbers.numberChecker(12)).to.equal('The number is even!')
        })
    })

    describe('tests the averageSumArray function', () => {
        it('checks if output is correct', () => {
            expect(testNumbers.averageSumArray([1, 2, 3, 5])).to.equal(2.75)
        })

        it('checks if output is correct', () => {
            expect(testNumbers.averageSumArray([2, 3, 5])).to.equal(3.3333333333333335)
        })

        it('checks if output is correct', () => {
            expect(testNumbers.averageSumArray([1, 5])).to.equal(3)
        })
    })
});
