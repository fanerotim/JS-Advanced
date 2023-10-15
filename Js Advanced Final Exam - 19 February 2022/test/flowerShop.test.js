let flowerShop = require('../flowerShop');
let expect = require('chai').expect;


describe('Tests flower shop object', function () {

    describe('tests calcPriceOfFlowers method', function () {
        it('validates input', () => {
            expect(() => flowerShop.calcPriceOfFlowers(55, 5, 2)).to.throw('Invalid input!');
        });

        it('validates input', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 'incorrect', 2)).to.throw('Invalid input!');
        });

        it('validates input', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 6.8, 2)).to.throw('Invalid input!');
        });

        it('validates input', () => {
            expect(() => flowerShop.calcPriceOfFlowers('Rose', 5, 3.7)).to.throw('Invalid input!');
        });

        it('validates output', () => {
            expect(flowerShop.calcPriceOfFlowers('Rose', 5, 3)).to.equal('You need $15.00 to buy Rose!');
        });
    });

    describe('tests the checkFlowersAvailable method', () => {
        it('checks if output is correct', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Tulip', 'Lily'])).to.equal(`The Rose are available!`)
        })

        it('checks if output is correct', () => {
            expect(flowerShop.checkFlowersAvailable('Orchid', ['Rose', 'Tulip', 'Lily'])).to.equal(`The Orchid are sold! You need to purchase more!`)
        })

        it('checks if output is correct', () => {
            expect(flowerShop.checkFlowersAvailable('Orchid', [])).to.equal(`The Orchid are sold! You need to purchase more!`)
        })
    })

    describe('tests sellFlowers', () => {
        it('validates input', () => {
            expect(() => flowerShop.sellFlowers('incorrect', 15)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => flowerShop.sellFlowers(['Rose', 'Tulip', 'Orchid'], 15.5)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => flowerShop.sellFlowers(['Rose', 'Tulip', 'Orchid'], -5)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => flowerShop.sellFlowers(['Rose', 'Tulip', 'Orchid'], 3)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => flowerShop.sellFlowers(['Rose', 'Tulip', 'Orchid'], 4)).to.throw('Invalid input!');
        })

        it('validates output', () => {
            expect(flowerShop.sellFlowers(['Rose', 'Tulip', 'Orchid'], 0)).to.equal('Tulip / Orchid');
        })

        it('validates output', () => {
            expect(flowerShop.sellFlowers(['Rose'], 0)).to.equal('');
        })
    })
});
