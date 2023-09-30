const createCalculator = require('../addSubtract');
const solve = require('../addSubtract');
const expect = require('chai').expect;

describe('create calculator', () => {

    it ('should return result', () => {
        let myFunc = createCalculator();
        myFunc.add(5);
        const expectedResult = 5;
        const actualResult = myFunc.get();
        expect(actualResult).to.equal(expectedResult);
    })

    it ('should return result', () => {
        let myFunc = createCalculator();
        myFunc.add(5);
        myFunc.subtract(1);
        const expectedResult = 4;
        const actualResult = myFunc.get();
        expect(actualResult).to.equal(expectedResult);
    })

    it ('should return result', () => {
        let myFunc = createCalculator();
        myFunc.add('5');
        const expectedResult = 5;
        const actualResult = myFunc.get();
        expect(actualResult).to.equal(expectedResult);
    })
})