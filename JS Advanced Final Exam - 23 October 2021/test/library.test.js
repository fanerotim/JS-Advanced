let library = require('../library');
let expect = require('chai').expect;

describe('Tests library object', () => {
    describe('tests calcPriceOfBook', () => {

        it('validates input', () => {
            expect(() => library.calcPriceOfBook(12, 1995)).to.throw('Invalid input');
        });

        it('validates input', () => {
            expect(() => library.calcPriceOfBook('Catch-22', 15.5)).to.throw('Invalid input');
        });

        it('validates input', () => {
            expect(() => library.calcPriceOfBook('Catch-22', 'incorrect')).to.throw('Invalid input');
        });

        it('validates input', () => {
            expect(library.calcPriceOfBook('Catch-22', 1980)).to.equal(`Price of Catch-22 is 10.00`);
        });

        it('validates input', () => {
            expect(library.calcPriceOfBook('Catch-22', 1960)).to.equal(`Price of Catch-22 is 10.00`);
        });

        it('validates input', () => {
            expect(library.calcPriceOfBook('Catch-22', 2000)).to.equal(`Price of Catch-22 is 20.00`);
        });
    });

    describe('tests findBook method', () => {
        it('checks if output is correct', () => {
            expect(() => library.findBook([], 'Catch-22')).to.throw('No books currently available');
        })

        it('checks if output is correct', () => {
            expect(library.findBook(['Catch-22'], 'Catch-22')).to.equal('We found the book you want.');
        })

        it('checks if output is correct', () => {
            expect(library.findBook(['The Godfather'], 'Catch-22')).to.equal('The book you are looking for is not here!');
        })
    });

    describe('tests arrangeBooks method', () => {
        it('validates input', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        })

        it('validates input', () => {
            expect(() => library.arrangeTheBooks(5.8)).to.throw('Invalid input');
        })

        it('validates input', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        })

        it('validates input', () => {
            expect(library.arrangeTheBooks(20)).to.equal('Great job, the books are arranged.');
        })

        it('validates input', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        })

        it('validates input', () => {
            expect(library.arrangeTheBooks(50)).to.equal('Insufficient space, more shelves need to be purchased.');
        })
    })

});
