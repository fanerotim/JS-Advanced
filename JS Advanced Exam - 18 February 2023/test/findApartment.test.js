let findNewApartment = require('../findApartment');
let expect = require('chai').expect;

describe('tests find new apartment', () => {
    
    describe('tests isGoodLocation method', () => {
        it('validates input', () => {
            expect(() => findNewApartment.isGoodLocation(123, true)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => findNewApartment.isGoodLocation('Sofia', 'true')).to.throw('Invalid input!');
        })

        it('checks city parameter', () => {
            expect(findNewApartment.isGoodLocation('Burgas', true)).to.equal('This location is not suitable for you.');
        })

        it('checks city parameter with false transportation', () => {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal('There is no public transport in area.');
        })

        it('checks city parameter with false transportation', () => {
            expect(findNewApartment.isGoodLocation('Plovdiv', false)).to.equal('There is no public transport in area.');
        })

        it('checks city parameter with false transportation', () => {
            expect(findNewApartment.isGoodLocation('Varna', false)).to.equal('There is no public transport in area.');
        })

        it('checks city parameter with false transportation', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        })

        it('checks city parameter with false transportation', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        })

        it('checks city parameter with false transportation', () => {
            expect(findNewApartment.isGoodLocation('Varna', true)).to.equal('You can go on home tour!');
        })
    })

    describe('tests isLargeEnough method', () => {
        it('checks if input is valid', () => {
            expect(() => findNewApartment.isLargeEnough([], 123)).to.throw('Invalid input!');
        })

        it('checks if input is valid', () => {
            expect(() => findNewApartment.isLargeEnough(123, 123)).to.throw('Invalid input!');
        })

        it('checks if input is valid', () => {
            expect(() => findNewApartment.isLargeEnough([50, 60, 40], 'incorrect')).to.throw('Invalid input!');
        })

        it('checks apartment is large enough', () => {
            expect(findNewApartment.isLargeEnough([50, 60, 40], 60)).to.equal('60');
        })

        it('checks apartment is large enough', () => {
            expect(findNewApartment.isLargeEnough([50, 60, 40, 70], 60)).to.equal('60, 70');
        })

        it('checks apartment is large enough', () => {
            expect(findNewApartment.isLargeEnough([50, 60, 40, 80], 70)).to.equal('80');
        })
    })

    describe('tests isItAffordable method', () => {
        it('validates the input', () => {
            expect(() => findNewApartment.isItAffordable(0, 15)).to.throw('Invalid input!');
        })

        it('validates the input', () => {
            expect(() => findNewApartment.isItAffordable(15, 0)).to.throw('Invalid input!');
        })

        it('validates the input', () => {
            expect(() => findNewApartment.isItAffordable(-15, 200)).to.throw('Invalid input!');
        })

        it('validates the input', () => {
            expect(() => findNewApartment.isItAffordable(200, -15)).to.throw('Invalid input!');
        })

        it('validates the input', () => {
            expect(() => findNewApartment.isItAffordable('200', -15)).to.throw('Invalid input!');
        })

        it('validates the input', () => {
            expect(() => findNewApartment.isItAffordable(200, '150')).to.throw('Invalid input!');
        })

        it('validates the input', () => {
            expect(findNewApartment.isItAffordable(200000, 150000)).to.equal("You don't have enough money for this house!");
        })

        it('validates the input', () => {
            expect(findNewApartment.isItAffordable(200000, 250000)).to.equal('You can afford this home!');
        })

        it('validates the input', () => {
            expect(findNewApartment.isItAffordable(200000, 200000)).to.equal('You can afford this home!');
        })
    })
})