const rgbToHexColor = require('../rgbToHex');
const solve = require('../rgbToHex');
const expect = require('chai').expect;

describe('rgb to hex color', () => {
    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = 100;
        const blue = 95;
        let expectedResult = '#8C645F';
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 0;
        const green = 0;
        const blue = 0;
        let expectedResult = '#000000';
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 255;
        const green = 255;
        const blue = 255;
        let expectedResult = '#FFFFFF';
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = -1;
        const green = 100;
        const blue = 95;
        let expectedResult = undefined;
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 100.23;
        const green = 250;
        const blue = 95;
        let expectedResult = undefined;
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 260;
        const green = 150;
        const blue = 95;
        let expectedResult = undefined;
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = -1;
        const blue = 95;
        let expectedResult = undefined;
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = 15.5;
        const blue = 95;
        let expectedResult = undefined;
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = 300;
        const blue = 95;
        let expectedResult = undefined;
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = 100;
        const blue = -15;
        let expectedResult = '#8C645F';
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = 100;
        const blue = 15.5;
        let expectedResult = '#8C645F';
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = 100;
        const blue = 280;
        let expectedResult = '#8C645F';
        const actualResult = rgbToHexColor(red, green, blue);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = 100;
        const blue = 280;
        let expectedResult = '#8C645F';
        const actualResult = rgbToHexColor(red, green);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = '140';
        const green = 100;
        const blue = 280;
        let expectedResult = undefined;
        const actualResult = rgbToHexColor(red, green);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = '100';
        const blue = 280;
        let expectedResult = undefined;
        const actualResult = rgbToHexColor(red, green);

        expect(expectedResult).to.equal(actualResult);
    })

    it ('should return undefined if arguments are invalid', () => {

        const red = 140;
        const green = 100;
        const blue = '280';
        let expectedResult = undefined;
        const actualResult = rgbToHexColor(red, green);

        expect(expectedResult).to.equal(actualResult);
    })
})