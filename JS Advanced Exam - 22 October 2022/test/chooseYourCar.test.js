let chooseYourCar = require('../chooseYourCar');
let expect = require('chai').expect;

describe("Tests choose your car", () => {

    describe("tests choosingType method", () => {

        it('checking year parameter', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 1800)).to.throw('Invalid Year!')
        });

        it('checking year parameter', () => {
            expect(() => chooseYourCar.choosingType('Sedan', 'red', 2023)).to.throw('Invalid Year!')
        });

        it('checking type parameter', () => {
            expect(() => chooseYourCar.choosingType('Coupe', 'red', 2000)).to.throw('This type of car is not what you are looking for.')
        });

        it('checking type parameter', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2010)).to.equal(`This red Sedan meets the requirements, that you have.`)
        });

        it('checking type parameter', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2015)).to.equal(`This red Sedan meets the requirements, that you have.`)
        });

        it('checking type parameter', () => {
            expect(chooseYourCar.choosingType('Sedan', 'red', 2007)).to.equal(`This Sedan is too old for you, especially with that red color.`)
        });
    });

    describe('checks the brandName method', () => {
        it('checks if input is valid', () => {
            expect(() => chooseYourCar.brandName(['BWM', 'Audi', 'Mercedes'], 'incorrect')).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => chooseYourCar.brandName(['BWM', 'Audi', 'Mercedes'], -1)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => chooseYourCar.brandName(['BWM', 'Audi', 'Mercedes'], 3)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => chooseYourCar.brandName([], 0)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => chooseYourCar.brandName(123, 0)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(() => chooseYourCar.brandName('asd', 0)).to.throw('Invalid Information!');
        })

        it('checks if input is valid', () => {
            expect(chooseYourCar.brandName(['BWM', 'Audi', 'Trabant'], 0)).to.equal('Audi, Trabant');
        })

        it('checks if input is valid', () => {
            expect(chooseYourCar.brandName(['BWM', 'Audi', 'Trabant'], 2)).to.equal('BWM, Audi');
        })
    })

    describe('tests carFuelConsumption', () => {
        it('validates input', () => {
            expect(() => chooseYourCar.carFuelConsumption('123', 15)).to.throw('Invalid Information!');
        })

        it('validates input', () => {
            expect(() => chooseYourCar.carFuelConsumption(15, '15')).to.throw('Invalid Information!');
        })

        it('validates input', () => {
            expect(() => chooseYourCar.carFuelConsumption(-15, 15)).to.throw('Invalid Information!');
        })

        it('validates input', () => {
            expect(() => chooseYourCar.carFuelConsumption(15, -15)).to.throw('Invalid Information!');
        })

        it('validates input', () => {
            expect(chooseYourCar.carFuelConsumption(100, 5)).to.equal('The car is efficient enough, it burns 5.00 liters/100 km.');
        })

        it('validates input', () => {
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal('The car is efficient enough, it burns 7.00 liters/100 km.');
        })

        it('validates input', () => {
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal('The car burns too much fuel - 8.00 liters!');
        })

        it('validates input', () => {
            expect(chooseYourCar.carFuelConsumption(100, 15)).to.equal('The car burns too much fuel - 15.00 liters!');
        })
    })

});
