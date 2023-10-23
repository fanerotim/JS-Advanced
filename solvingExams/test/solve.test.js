let onlineStore = require('../solve');
let expect = require('chai').expect;

describe("Tests onlineStore object", function () {
    describe("tests isProductAvailable function", function () {

        it("validates input", function () {
            expect(() => onlineStore.isProductAvailable(5, 5)).to.throw('Invalid input.')
        });

        it("validates input", function () {
            expect(() => onlineStore.isProductAvailable('apple', 'incorrect')).to.throw('Invalid input.')
        });

        it("validates input", function () {
            expect(onlineStore.isProductAvailable('apple', 0)).to.equal('Sorry, apple is currently out of stock.')
        });

        it("validates input", function () {
            expect(onlineStore.isProductAvailable('apple', -1)).to.equal('Sorry, apple is currently out of stock.')
        });

        it("validates input", function () {
            expect(onlineStore.isProductAvailable('apple', 10)).to.equal('Great! apple is available for purchase.')
        });
    });

    describe('tests canAffordProduct function', () => {
        it('validates input', () => {
            expect(() => onlineStore.canAffordProduct('incorrect', 5)).to.throw('Invalid input.')
        })

        it('validates input', () => {
            expect(() => onlineStore.canAffordProduct(5, 'incorrect')).to.throw('Invalid input.')
        })

        it('validates input', () => {
            expect(onlineStore.canAffordProduct(5, 15)).to.equal(`Product purchased. Your remaining balance is $${10}.`)
        })

        it('validates input', () => {
            expect(onlineStore.canAffordProduct(5, 5)).to.equal(`Product purchased. Your remaining balance is $${0}.`)
        })

        it('validates input', () => {
            expect(onlineStore.canAffordProduct(5, 4)).to.equal(`You don't have sufficient funds to buy this product.`)
        })
    });

    describe('tests getRecommendedProducts', () => {

        it('validates input', () => {
            expect(() => onlineStore.getRecommendedProducts('incorrect', 'Technology')).to.throw('Invalid input.');
        })

        it('validates input', () => {
            expect(() => onlineStore.getRecommendedProducts([{name: 'Laptop', category: 'Technology'}], 23)).to.throw('Invalid input.');
        })

        it('checks if output is correct', () => {
            expect(onlineStore.getRecommendedProducts([{name: 'Laptop', category: 'Technology'}], 'Technology')).to.equal(`Recommended products in the Technology category: Laptop`);
        })

        it('checks if output is correct', () => {
            expect(onlineStore.getRecommendedProducts([{name: 'Laptop', category: 'Technology'}, {name: 'Watch', category: 'Technology'}, {name: 'Apple', category: 'Food'}], 'Technology')).to.equal(`Recommended products in the Technology category: Laptop, Watch`);
        })

        it('checks if output is correct', () => {
            expect(onlineStore.getRecommendedProducts([{name: 'Laptop', category: 'Technology'}, {name: 'Watch', category: 'Technology'}, {name: 'Apple', category: 'Food'}], 'Sports')).to.equal(`Sorry, we currently have no recommended products in the Sports category.`);
        })
    })
});
