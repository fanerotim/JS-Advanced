let weddingDay = require('../weddingDay');
let expect = require('chai').expect;

describe('Wedding day', () => {

    describe('tests pick venue method', () => {

        it('checks if input is valid', () => {
            expect(() => weddingDay.pickVenue('test', 1, 'correct')).to.throw('Invalid Information!');
        });

        it('checks if input is valid', () => {
            expect(() => weddingDay.pickVenue(55, 'incorrect', 'correct')).to.throw('Invalid Information!');
        });

        it('checks if input is valid', () => {
            expect(() => weddingDay.pickVenue(55, 23, 16)).to.throw('Invalid Information!');
        });

        it('checks if input is valid', () => {
            expect(() => weddingDay.pickVenue('', 23, 16)).to.throw('Invalid Information!');
        });

        it('checks if input is valid', () => {
            expect(() => weddingDay.pickVenue(55, '', 16)).to.throw('Invalid Information!');
        });

        it('checks if input is valid', () => {
            expect(() => weddingDay.pickVenue(55, 23, '')).to.throw('Invalid Information!');
        });

        it('checks if input is valid', () => {
            expect(() => weddingDay.pickVenue(55, 23, 'Plovdiv')).to.throw('The location of this venue is not in the correct area!');
        });

        it('checks if input is valid', () => {
            expect(() => weddingDay.pickVenue(55, 23, 'Varna')).to.not.throw('The location of this venue is not in the correct area!');
        });

        it('checks if input is valid', () => {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal(`This venue meets the requirements, with capacity of ${150} guests and ${120}$ cover.`);
        });

        it('checks if input is valid', () => {
            expect(weddingDay.pickVenue(170, 100, 'Varna')).to.equal(`This venue meets the requirements, with capacity of ${170} guests and ${100}$ cover.`);
        });

        it('checks if input is valid', () => {
            expect(weddingDay.pickVenue(70, 110, 'Varna')).to.equal('This venue does not meet your requirements!');
        });

        it('checks if input is valid', () => {
            expect(weddingDay.pickVenue(180, 150, 'Varna')).to.equal('This venue does not meet your requirements!');
        });

        it('checks if input is valid', () => {
            expect(weddingDay.pickVenue(100, 150, 'Varna')).to.equal('This venue does not meet your requirements!');
        });
    });

    describe('tests otherSpendings method', () => {

        it('checks if input is correct', () => {
            expect(() => weddingDay.otherSpendings(12, [], true)).to.throw('Invalid Information!');
        })

        it('checks if input is correct', () => {
            expect(() => weddingDay.otherSpendings(['something', 'second'], 15, false)).to.throw('Invalid Information!');
        })

        it('checks if input is correct', () => {
            expect(() => weddingDay.otherSpendings(['something', 'second'], [53, 69], 'incorrect')).to.throw('Invalid Information!');
        })

        it('checks if input is correct', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], true)).to.equal(`You spend ${1020}$ for wedding decoration and photography with 15% discount!`);
        })

        it('checks if input is correct', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal(`You spend ${1200}$ for wedding decoration and photography!`);
        })

        it('checks if input is correct', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['video'], true)).to.equal(`You spend ${1530}$ for wedding decoration and photography with 15% discount!`);
        })

        it('checks if input is correct', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['video'], false)).to.equal(`You spend ${1800}$ for wedding decoration and photography!`);
        })

        it('checks if input is correct', () => {
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['pictures'], true)).to.equal(`You spend ${935}$ for wedding decoration and photography with 15% discount!`);
        })

        it('checks if input is correct', () => {
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['pictures'], false)).to.equal(`You spend ${1100}$ for wedding decoration and photography!`);
        })

        it('checks if input is correct', () => {
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], true)).to.equal(`You spend ${1445}$ for wedding decoration and photography with 15% discount!`);
        })

        it('checks if input is correct', () => {
            expect(weddingDay.otherSpendings(['Fabric drapes and curtains'], ['video'], false)).to.equal(`You spend ${1700}$ for wedding decoration and photography!`);
        })
    })

    describe('tests tableDistribution method', () => {
        it('validates input', () => {
            expect(() => weddingDay.tableDistribution(-5, 15)).to.throw('Invalid Information!');
        })

        it('validates input', () => {
            expect(() => weddingDay.tableDistribution(10, -5)).to.throw('Invalid Information!');
        })

        it('validates input', () => {
            expect(() => weddingDay.tableDistribution('incorrect', 12)).to.throw('Invalid Information!');
        })

        it('validates input', () => {
            expect(() => weddingDay.tableDistribution(14, 'incorrect')).to.throw('Invalid Information!');
        })

        it('validates input', () => {
            expect(weddingDay.tableDistribution(6, 2)).to.equal(`There is only ${3} people on every table, you can join some tables.`);
        })

        it('validates input', () => {
            expect(weddingDay.tableDistribution(6.2, 2)).to.equal(`There is only ${3} people on every table, you can join some tables.`);
        })

        it('validates input', () => {
            expect(weddingDay.tableDistribution(6.7, 2)).to.equal(`There is only ${3} people on every table, you can join some tables.`);
        })

        it('validates input', () => {
            expect(weddingDay.tableDistribution(6, 1)).to.equal(`You have ${1} tables with ${6} guests on table.`);
        })

        it('validates input', () => {
            expect(weddingDay.tableDistribution(14, 2)).to.equal(`You have ${2} tables with ${7} guests on table.`);
        });
    })

});
