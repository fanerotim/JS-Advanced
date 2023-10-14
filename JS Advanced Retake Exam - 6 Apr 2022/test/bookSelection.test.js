let bookSelection = require('../bookSelection');
let expect = require('chai').expect;

describe("Tests for bookSelection exercise", () => {

    describe('tests for isGenreSuitable method', () => {

        it('checks if output is correct', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 12)).to.equal(`Books with Thriller genre are not suitable for kids at 12 age`);
        });

        it('checks if output is correct', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 9)).to.equal(`Books with Thriller genre are not suitable for kids at 9 age`);
        });

        it('checks if output is correct', () => {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal(`Books with Horror genre are not suitable for kids at 12 age`);
        });

        it('checks if output is correct', () => {
            expect(bookSelection.isGenreSuitable('Horror', 9)).to.equal(`Books with Horror genre are not suitable for kids at 9 age`);
        });

        it('checks if output is correct', () => {
            expect(bookSelection.isGenreSuitable('Horror', 17)).to.equal(`Those books are suitable`);
        });

        it('checks if output is correct', () => {
            expect(bookSelection.isGenreSuitable('Thriller', 17)).to.equal(`Those books are suitable`);
        });

        it('checks if output is correct', () => {
            expect(bookSelection.isGenreSuitable('Comedy', 10)).to.equal(`Those books are suitable`);
        });

        it('checks if output is correct', () => {
            expect(bookSelection.isGenreSuitable('Cartoon', 6)).to.equal(`Those books are suitable`);
        });
    });

    describe('Tests the isItAffordable method', () => {
        
        it('validates input', () => {
            expect(() => bookSelection.isItAffordable('incorrect', 20)).to.throw('Invalid input');
        })

        it('validates input', () => {
            expect(() => bookSelection.isItAffordable(20, 'incorrect')).to.throw('Invalid input');
        })

        it('checks if output is correct', () => {
            expect(bookSelection.isItAffordable(20, 30)).to.equal('Book bought. You have 10$ left');
        })

        it('checks if output is correct', () => {
            expect(bookSelection.isItAffordable(20, 20)).to.equal('Book bought. You have 0$ left');
        })

        it('checks if output is correct', () => {
            expect(bookSelection.isItAffordable(20, 18)).to.equal(`You don't have enough money`);
        })
    })

    describe('tests the suitableTitles method', () => {

        it('validates input', () => {
            expect(() => bookSelection.suitableTitles('incorrect', 'Horror')).to.throw('Invalid input');
        })

        it('validates input', () => {
            expect(() => bookSelection.suitableTitles(['Crime and Punishment', 'Catch-22'], 25)).to.throw('Invalid input');
        })

        it('checks if output is correct', () => {
            expect(bookSelection.suitableTitles([{title: 'Crime and Punishment', genre: 'Russian literature'}, {title: 'Catch-22', genre: 'American Literature'}], 'Russian literature')).to.eql(['Crime and Punishment']);
        })

        it('checks if output is correct', () => {
            expect(bookSelection.suitableTitles([{title: 'Crime and Punishment', genre: 'Russian literature'}, {title: 'Roadside Picnic', genre: 'Russian literature'}, {title: 'Catch-22', genre: 'American Literature'}], 'Russian literature')).to.eql(['Crime and Punishment', 'Roadside Picnic']);
        })
    })
});
