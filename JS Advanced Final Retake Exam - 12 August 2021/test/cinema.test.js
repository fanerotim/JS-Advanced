let cinema = require('../cinema');
let expect = require('chai').expect;

describe('Tests cinema object', () => {
    describe('Tests showMovies function', () => {
        it('checks if output is correct', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });

        it('checks if output is correct', () => {
            expect(cinema.showMovies(['King Kong', 'Pulp Fiction'])).to.equal('King Kong, Pulp Fiction');
        });

        it('checks if output is correct', () => {
            expect(cinema.showMovies(['Pulp Fiction'])).to.equal('Pulp Fiction');
        });
    });

    describe('Tests ticktePrice function', () => {
        it('checks if output is correct', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        })

        it('checks if output is correct', () => {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        })

        it('checks if output is correct', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        })

        it('checks if output is correct', () => {
            expect(() => cinema.ticketPrice('Incorrect')).to.throw('Invalid projection type.');
        })

        it('checks if output is correct', () => {
            expect(() => cinema.ticketPrice(5)).to.throw('Invalid projection type.');
        })

        it('checks if output is correct', () => {
            expect(() => cinema.ticketPrice()).to.throw('Invalid projection type.');
        })
    })

    describe('tests swapSeatsInHall function', () => {
        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(1.5, 5)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(5, 2.1)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(-1, 2)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(2, -1)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(21, 1)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(15, 15)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(0, 15)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(15, 0)).to.equal('Unsuccessful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(5, 6)).to.equal('Successful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(5, 20)).to.equal('Successful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(20, 5)).to.equal('Successful change of seats in the hall.');
        })

        it('checks if output is correct', () => {
            expect(cinema.swapSeatsInHall(6)).to.equal('Unsuccessful change of seats in the hall.');
        })
    })
});
