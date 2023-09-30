const lookupChar = require('../charLookup');
let solve = require('../charLookup');
let expect = require('chai').expect;

describe('lookup character in a string', () => {
    it('should return undefined if first argument is not a string', () => {
        let input = 1;
        let expectedResult = undefined;
        let actualResult = lookupChar(input, 0);

        expect(actualResult).to.equal(expectedResult);
    })

    it('should return undefined if second argument is not an integer', () => {
        let input = 'autumn';
        let index = 'test'
        let expectedResult = undefined;
        let actualResult = lookupChar(input, index);

        expect(actualResult).to.equal(expectedResult);
    })

    it('should return undefined if second argument is not an integer', () => {
        let input = 'autumn';
        let index = '1'
        let expectedResult = undefined;
        let actualResult = lookupChar(input, index);

        expect(actualResult).to.equal(expectedResult);
    })

    it('should return undefined if second argument is not an integer', () => {
        let input = 'autumn';
        let index = 1.5
        let expectedResult = undefined;
        let actualResult = lookupChar(input, index);

        expect(actualResult).to.equal(expectedResult);
    })

    it('should return incorrect index message if second argument is not valid', () => {
        let input = 'autumn';
        let index = -1
        let expectedResult = "Incorrect index";
        let actualResult = lookupChar(input, index);

        expect(actualResult).to.equal(expectedResult);
    })

    it('should return incorrect index message if second argument is not valid', () => {
        let input = 'autumn';
        let index = input.length;
        let expectedResult = "Incorrect index";
        let actualResult = lookupChar(input, index);

        expect(actualResult).to.equal(expectedResult);
    })

    it('should return incorrect index message if second argument is not valid', () => {
        let input = 'autumn';
        let index = input.length + 1;
        let expectedResult = "Incorrect index";
        let actualResult = lookupChar(input, index);

        expect(actualResult).to.equal(expectedResult);
    })

    it('should return the correct character', () => {
        let input = 'autumn';
        let index = 2;
        let expectedResult = 't';
        let actualResult = lookupChar(input, index);

        expect(actualResult).to.equal(expectedResult);
    })
})