let companyAdministration = require('../companyAdministration');
let expect = require('chai').expect;

describe("Tests company administration object", () => {

    describe('Tests hiringEmployee method', () => {
        it("checks if output is correct", () => {
            expect(() => companyAdministration.hiringEmployee('Pesho', 'support', 8)).to.throw('We are not looking for workers for this position.');
        });

        it("checks if output is correct", () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 3)).to.equal('Pesho was successfully hired for the position Programmer.');
        });

        it("checks if output is correct", () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 5)).to.equal('Pesho was successfully hired for the position Programmer.');
        });

        it("checks if output is correct", () => {
            expect(companyAdministration.hiringEmployee('Pesho', 'Programmer', 2)).to.equal('Pesho is not approved for this position.');
        });
    });

    describe('tests the calculateSalary method', () => {
        it('validates input', () => {
            expect(() => companyAdministration.calculateSalary(-5)).to.throw('Invalid hours');
        })

        it('validates input', () => {
            expect(() => companyAdministration.calculateSalary('incorrect')).to.throw('Invalid hours');
        })

        it('validates input', () => {
            expect(companyAdministration.calculateSalary(8.5)).to.equal(127.5);
        })

        it('validates input', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        })

        it('validates input', () => {
            expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        })

        it('validates input', () => {
            expect(companyAdministration.calculateSalary(161.5)).to.equal(3422.5);
        })
    })

    describe('tests fireEmployee method', () => {

        it('validates input', () => {
            expect(() => companyAdministration.firedEmployee(['Pesho', 'Maria', 'Rado', 'Ben'], 1.5)).to.throw('Invalid input');
        })

        it('validates input', () => {
            expect(companyAdministration.firedEmployee(['Pesho', 'Maria', 'Rado', 'Ben'], 0)).to.equal('Maria, Rado, Ben');
        })

        it('validates input', () => {
            expect(companyAdministration.firedEmployee(['Pesho', 'Maria', 'Rado', 'Ben'], 3)).to.equal('Pesho, Maria, Rado');
        }) 

        it('validates input', () => {
            expect(() => companyAdministration.firedEmployee(['Pesho', 'Maria', 'Rado', 'Ben'], -1)).to.throw('Invalid input');
        })
    })
});
