let movieTheater = require('../movieTheater');
let expect = require('chai').expect;

describe('Tests for moviaTheater exercise', () => {

    describe('Tests for ageRestrictions method', () => {

        it("Checks the 'G' parameter", () => {
            expect(movieTheater.ageRestrictions('G')).to.equal('All ages admitted to watch the movie');
        });

        it("Checks the 'PG' parameter", () => {
            expect(movieTheater.ageRestrictions('PG')).to.equal('Parental guidance suggested! Some material may not be suitable for pre-teenagers');
        });

        it("Checks the 'R' parameter", () => {
            expect(movieTheater.ageRestrictions('R')).to.equal('Restricted! Under 17 requires accompanying parent or adult guardian');
        });

        it("Checks the 'NC-17' parameter", () => {
            expect(movieTheater.ageRestrictions('NC-17')).to.equal('No one under 17 admitted to watch the movie');
        });

        it("Checks the output if no parameter is met", () => {
            expect(movieTheater.ageRestrictions('test')).to.equal('There are no age restrictions for this movie');
        });
    });

    describe('checks the moneySpent method', () => {
        it('checks if input is valid', () => {
            expect(() => movieTheater.moneySpent('incorrect', ['Nachos'], ['Soda'])).to.throw('Invalid input');
        })

        it('checks if input is valid', () => {
            expect(() => movieTheater.moneySpent(15, 'incorrect', ['Soda'])).to.throw('Invalid input');
        })

        it('checks if input is valid', () => {
            expect(() => movieTheater.moneySpent(15, ['Soda'], 'incorrect')).to.throw('Invalid input');
        })

        it('checks if input is valid', () => {
            expect(movieTheater.moneySpent(2, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase is 38.50`);
        })

        it('checks if input is valid', () => {
            expect(movieTheater.moneySpent(2, ['Nachos'], ['Water'])).to.equal(`The total cost for the purchase is 37.50`);
        })

        it('checks if input is valid', () => {
            expect(movieTheater.moneySpent(2, ['Popcorn'], ['Soda'])).to.equal(`The total cost for the purchase is 37.00`);
        })

        it('checks if input is valid', () => {
            expect(movieTheater.moneySpent(2, ['Popcorn'], ['Water'])).to.equal(`The total cost for the purchase is 36.00`);
        })

        it('checks if input is valid', () => {
            expect(movieTheater.moneySpent(3, ['Nachos'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 42.80`);
        })

        it('checks if input is valid', () => {
            expect(movieTheater.moneySpent(3, ['Nachos'], ['Water'])).to.equal(`The total cost for the purchase with applied discount is 42.00`);
        })

        it('checks if input is valid', () => {
            expect(movieTheater.moneySpent(3, ['Popcorn'], ['Soda'])).to.equal(`The total cost for the purchase with applied discount is 41.60`);
        })

        it('checks if input is valid', () => {
            expect(movieTheater.moneySpent(3, ['Popcorn'], ['Water'])).to.equal(`The total cost for the purchase with applied discount is 40.80`);
        })
    })

    describe('tests revervation method', () => {
        it ('validates input', () => {
            expect(() => movieTheater.reservation('incorrect', 15)).to.throw('Invalid input');
        })

        it ('validates input', () => {
            expect(() => movieTheater.reservation([{rowNumber: 1, freeSeats: 15}], 'incorrect')).to.throw('Invalid input');
        })

        it ('validates input', () => {
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 15}, {rowNumber: 3, freeSeats: 25}], 15)).to.equal(3);
        })

        it ('validates input', () => {
            expect(movieTheater.reservation([{rowNumber: 1, freeSeats: 25}, {rowNumber: 3, freeSeats: 25}], 15)).to.equal(3);
        })
    })
});
