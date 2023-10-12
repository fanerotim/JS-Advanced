let motorcycleRider = require('../motorcycleRider');
let expect = require('chai').expect;

describe("Tests for Motorcycle Rider", () => {
    describe("tests for licenseRestriction method", () => {
        it("checks if input is valid", () => {
            expect(() => motorcycleRider.licenseRestriction('B')).to.throw('Invalid Information!')
        });

        it("checks if input is valid", () => {
            expect(motorcycleRider.licenseRestriction('AM')).to.equal('Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.')
        });

        it("checks if input is valid", () => {
            expect(motorcycleRider.licenseRestriction('A1')).to.equal('Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.')
        });

        it("checks if input is valid", () => {
            expect(motorcycleRider.licenseRestriction('A2')).to.equal('Motorcycles with maximum power of 35KW. and the minimum age is 18.')
        });

        it("checks if input is valid", () => {
            expect(motorcycleRider.licenseRestriction('A')).to.equal('No motorcycle restrictions, and the minimum age is 24.')
        });
    });

    describe('Tests motorcycleShowroom method', () => {
        it('checks if input is valid', () => {
            expect(() => motorcycleRider.motorcycleShowroom('incorrect', 50)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => motorcycleRider.motorcycleShowroom([50, 70, 100], 'incorrect')).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => motorcycleRider.motorcycleShowroom([], 80)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => motorcycleRider.motorcycleShowroom([60, 90], 40)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(motorcycleRider.motorcycleShowroom([300, 200], 250)).to.equal(`There are ${1} available motorcycles matching your criteria!`);
        })

        it('checks if output is valid', () => {
            expect(motorcycleRider.motorcycleShowroom([300, 200], 350)).to.equal(`There are ${2} available motorcycles matching your criteria!`);
        })

        it('checks if output is valid', () => {
            expect(motorcycleRider.motorcycleShowroom([300, 200], 150)).to.equal(`There are ${0} available motorcycles matching your criteria!`);
        })
    })

    describe('tests otherSpendings() method', () => {
        it('checks if input is valid', () => {
            expect(() => motorcycleRider.otherSpendings(123, ['oil', 'fuel'], true)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => motorcycleRider.otherSpendings(['oil', 'fuel'], 123, true)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => motorcycleRider.otherSpendings(['oil', 'fuel'], ['helmet', 'brakes'], 'incorrect')).to.throw('Invalid Information!');
        });

        it('checks if output is valid', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], false)).to.equal(`You spend $${(270).toFixed(2)} for equipment and consumables!`);
        });

        it('checks if output is valid', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['engine oil'], true)).to.equal(`You spend $${(243).toFixed(2)} for equipment and consumables with 10% discount!`);
        });

        it('checks if output is valid', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], false)).to.equal(`You spend $${(230).toFixed(2)} for equipment and consumables!`);
        });

        it('checks if output is valid', () => {
            expect(motorcycleRider.otherSpendings(['helmet'], ['oil filter'], true)).to.equal(`You spend $${(207).toFixed(2)} for equipment and consumables with 10% discount!`);
        });

        it('checks if output is valid', () => {
            expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], false)).to.equal(`You spend $${(370).toFixed(2)} for equipment and consumables!`);
        });

        it('checks if output is valid', () => {
            expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], false)).to.equal(`You spend $${(330).toFixed(2)} for equipment and consumables!`);
        });

        it('checks if output is valid', () => {
            expect(motorcycleRider.otherSpendings(['jacked'], ['engine oil'], true)).to.equal(`You spend $${(333).toFixed(2)} for equipment and consumables with 10% discount!`);
        });

        it('checks if output is valid', () => {
            expect(motorcycleRider.otherSpendings(['jacked'], ['oil filter'], true)).to.equal(`You spend $${(297).toFixed(2)} for equipment and consumables with 10% discount!`);
        });
    })
});
