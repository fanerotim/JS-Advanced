let rentCar = require('../rentCar');
let expect = require('chai').expect;

describe("Tests the rentCar object", () => {

    describe('tests searchCar method', () => {
        it('validates input', function () {
            expect(() => rentCar.searchCar('incorrect', 'BWM')).to.throw('Invalid input!');
        });

        it('validates input', function () {
            expect(() => rentCar.searchCar(['BMW', 'Audi', 'Volvo'], 123)).to.throw('Invalid input!');
        });

        it('validates input', function () {
            expect(() => rentCar.searchCar(['BMW', 'Audi', 'Volvo'], 'Trabant')).to.throw('There are no such models in the catalog!');
        });

        it('validates input', function () {
            expect(rentCar.searchCar(['BMW', 'Audi', 'Volvo'], 'Volvo')).to.equal('There is 1 car of model Volvo in the catalog!');
        });

        it('validates input', function () {
            expect(rentCar.searchCar(['BMW', 'Audi', 'Volvo', 'Volvo'], 'Volvo')).to.equal('There is 2 car of model Volvo in the catalog!');
        });
    });

    describe('tests the calculatePriceOfCar method', () => {
        it('validates input', () => {
            expect(() => rentCar.calculatePriceOfCar(55, 5)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => rentCar.calculatePriceOfCar('BMW', 'incorrect')).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => rentCar.calculatePriceOfCar('Trabant', 5)).to.throw('No such model in the catalog!');
        })

        it('validates input', () => {
            expect(rentCar.calculatePriceOfCar('BMW', 2)).to.equal('You choose BMW and it will cost $90!');
        })

        it('validates input', () => {
            expect(rentCar.calculatePriceOfCar('Toyota', 2)).to.equal('You choose Toyota and it will cost $80!');
        })
    })

    describe('tests checkBudget method', () => {
        it('validates input', () => {
            expect(() => rentCar.checkBudget('incorrect', 10, 20)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => rentCar.checkBudget(15, 'incorrect', 20)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => rentCar.checkBudget(15, 20, 'incorrect')).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => rentCar.checkBudget(15.7, 20, 18)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => rentCar.checkBudget(15, 20.9, 18)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(() => rentCar.checkBudget(15, 20, 18.60)).to.throw('Invalid input!');
        })

        it('validates input', () => {
            expect(rentCar.checkBudget(50, 3, 200)).to.equal('You rent a car!');
        })

        it('validates input', () => {
            expect(rentCar.checkBudget(50, 3, 150)).to.equal('You rent a car!');
        })

        it('validates input', () => {
            expect(rentCar.checkBudget(50, 3, 100)).to.equal('You need a bigger budget!');
        })
    }) 
});
