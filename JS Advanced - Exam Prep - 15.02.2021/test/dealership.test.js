let dealership = require('../dealership');
let expect = require('chai').expect;

describe('Tests dealership object', function () {

    describe('tests newCarCost function', function () {

        it('checks if output is correct', function () {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
        });

        it('checks if output is correct', function () {
            expect(dealership.newCarCost('Audi A6 4K', 20000)).to.equal(0);
        });

        it('checks if output is correct', function () {
            expect(dealership.newCarCost('Audi A8 D5', 30000)).to.equal(5000);
        });

        it('checks if output is correct', function () {
            expect(dealership.newCarCost('Audi TT 8J', 30000)).to.equal(16000);
        });

        it('checks if output is correct', function () {
            expect(dealership.newCarCost('BMW', 30000)).to.equal(30000);
        });
    });

    describe('tests carEquipment function', () => {
        it ('checks if output is correct', () => {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'navigation'], [2])).to.eql(['navigation'])
        })

        it ('checks if output is correct', () => {
            expect(dealership.carEquipment([], [])).to.eql([])
        })

        it ('checks if output is correct', () => {
            expect(dealership.carEquipment(['lether seats'], [0])).to.eql(['lether seats'])
        })
    });

    describe('tets euroCategory function', () => {
        it('checks if output is correct', () => {
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
        })

        it('checks if output is correct', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${14250}.`)
        })

        it('checks if output is correct', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: ${14250}.`)
        })

    })
});
