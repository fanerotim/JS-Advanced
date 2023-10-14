let carService = require('../carService');
let expect = require('chai').expect;

describe('Tests car service exercise', () => {
    describe('tests isItExpensive method', () => {

        it('testing output', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });

        it('testing output', () => {
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`);
        });

        it('testing output', () => {
            expect(carService.isItExpensive('tires')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe('tests discount method', () => {
        it('valites input', () => {
            expect(() => carService.discount('incorrect', 5)).to.throw('Invalid input');
        })

        it('valites input', () => {
            expect(() => carService.discount(5, 'incorrect')).to.throw('Invalid input');
        })

        it('valites input', () => {
            expect(carService.discount(2, 5)).to.equal('You cannot apply a discount');
        })

        it('valites input', () => {
            expect(carService.discount(1, 5)).to.equal('You cannot apply a discount');
        })

        it('valites input', () => {
            expect(carService.discount(0, 5)).to.equal('You cannot apply a discount');
        })

        it('valites input', () => {
            expect(carService.discount(3, 100)).to.equal('Discount applied! You saved 15$');
        })

        it('valites input', () => {
            expect(carService.discount(7, 100)).to.equal('Discount applied! You saved 15$');
        })

        it('valites input', () => {
            expect(carService.discount(10, 100)).to.equal('Discount applied! You saved 30$');
        })
    })

    describe('tests parts to buy', () => {
        it('validates input', () => {
            expect(() => carService.partsToBuy([], [])).to.not.throw('Invalid input');
        })

        it('validates input', () => {
            expect(() => carService.partsToBuy('incorrect', ['some part', 'and other one for color'])).to.throw('Invalid input');
        })

        it('validates input', () => {
            expect(() => carService.partsToBuy(['some part', 'and other one for color'], 'incorrect')).to.throw('Invalid input');
        })

        it('validates input', () => {
            expect(carService.partsToBuy([{part: 'air filter', price: 100}, {part: 'oil filter', price: 150}], ['oil filter'])).to.equal(150);
        })

        it('validates input', () => {
            expect(carService.partsToBuy([{part: 'air filter', price: 100}, {part: 'oil filter', price: 150}], ['oil filter', 'air filter'])).to.equal(250);
        })

        it('validates input', () => {
            expect(carService.partsToBuy([], ['oil filter', 'air filter'])).to.equal(0);
        })
    })
});
