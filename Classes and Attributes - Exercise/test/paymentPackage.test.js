const PaymentPackage = require('../paymentPackage');
let paymentPackage = require('../paymentPackage');
const expect = require('chai').expect;

describe('payment package tests', () => {

    describe('tests for name property', () => {
        it('checks if name property is string', () => {
            expect(() => new PaymentPackage(123, 123)).to.throw('Name must be a non-empty string');
        });

        it('checks if name property is string', () => {
            expect(() => new PaymentPackage([123], 123)).to.throw('Name must be a non-empty string');
        });

        it('checks if name property is string', () => {
            expect(() => new PaymentPackage(['str'], 123)).to.throw('Name must be a non-empty string');
        });
    
        it('checks if name property has length more than 1', () => {
            expect(() => new PaymentPackage('', 123)).to.throw('Name must be a non-empty string');
        });
    
        it('name property is returned correctly', () => {
            expect(() => new PaymentPackage('HR Services', 123)).not.to.throw('Name must be a non-empty string');
        });
    })

    describe('tests for value property', () => {
        it('checks if value property is number', () => {
            expect(() => new PaymentPackage('HR Services', '123')).to.throw('Value must be a non-negative number');
        });

        it('checks if value property is number', () => {
            expect(() => new PaymentPackage('HR Services', '123.76')).to.throw('Value must be a non-negative number');
        });
    
        it('checks if value property is < 0', () => {
            expect(() => new PaymentPackage('HR Services', -5)).to.throw('Value must be a non-negative number');
        });

        it('checks if value property is < 0', () => {
            expect(() => new PaymentPackage('HR Services', [5, 15])).to.throw('Value must be a non-negative number');
        });
    
        it('checks if value property is returned correctly', () => {
            expect(() => new PaymentPackage('HR Services', 123)).not.to.throw('Value must be a non-negative number');
        });
        

        it('checks if value property is returned correctly', () => {
            expect(() => new PaymentPackage('HR Services', 0)).not.to.throw('Value must be a non-negative number');
        });
    });

    describe('tests for the VAT property', () => {
        it('checks if VAT property is a number', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.VAT = '123').to.throw('VAT must be a non-negative number');
        });

        it('checks if VAT property is a positive number', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.VAT = -5).to.throw('VAT must be a non-negative number');
        });

        it('checks if VAT property is a positive number', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.VAT = -5.8).to.throw('VAT must be a non-negative number');
        });

        it('checks if VAT property is a positive number', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.VAT = [5.8, 12]).to.throw('VAT must be a non-negative number');
        });

        it('checks if VAT property is returned correctly', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.VAT = 5).not.to.throw('VAT must be a non-negative number');
        }); 
        
        it('checks if VAT property is returned correctly', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.VAT = 5.5).not.to.throw('VAT must be a non-negative number');
        });  

        it('checks if VAT property is returned correctly', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.VAT = 0).not.to.throw('VAT must be a non-negative number');
        }); 
    });
    
    describe('tests for the active property', () => {
        it('checks if active property is a boolean', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = 'abv').to.throw('Active status must be a boolean');
        }); 

        it('checks if active property is a boolean', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = 10).to.throw('Active status must be a boolean');
        }); 

        it('checks if active property is a boolean', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = 10.5).to.throw('Active status must be a boolean');
        }); 

        it('checks if active property is a boolean', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = 0).to.throw('Active status must be a boolean');
        }); 

        it('checks if active property is a boolean', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = -10).to.throw('Active status must be a boolean');
        }); 

        it('checks if active property is a boolean', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = 'true').to.throw('Active status must be a boolean');
        }); 

        it('checks if active property is a boolean', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = 'false').to.throw('Active status must be a boolean');
        });  

        it('checks if active property is a boolean', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = 'boolean').to.throw('Active status must be a boolean');
        }); 

        it('checks if active property is returned correctly', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = true).not.to.throw('Active status must be a boolean');
        }); 

        it('checks if active property is returned correctly', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            expect(() => testClass.active = false).not.to.throw('Active status must be a boolean');
        }); 
    }); 
    
    describe('tests for the toString method', () => {
        it('checks if the output is a string', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            let output = [
                `Package: HR Services`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(testClass.toString()).to.equal(output.join('\n'));
        }); 

        it('checks if the output is a string', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            testClass.active = true;
            let output = [
                `Package: HR Services`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(testClass.toString()).to.equal(output.join('\n'));
        }); 

        it('checks if when the active property is false, the result is correct', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            testClass.active = false;
            let output = [
                `Package: HR Services (inactive)`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 20%): 147.6`
            ]
            expect(testClass.toString()).to.equal(output.join('\n'));
        });

        it('checks if when the active property is false, the result is correct', () => {
            let testClass = new PaymentPackage('HR Services', 123.5);
            testClass.active = false;
            let output = [
                `Package: HR Services (inactive)`,
                `- Value (excl. VAT): 123.5`,
                `- Value (VAT 20%): 148.2`
            ]
            expect(testClass.toString()).to.equal(output.join('\n'));
        });

        it('checks if when we change VAT result will still be correct', () => {
            let testClass = new PaymentPackage('HR Services', 123);
            testClass.VAT = 30;
            let output = [
                `Package: HR Services`,
                `- Value (excl. VAT): 123`,
                `- Value (VAT 30%): 159.9`
            ]
            expect(testClass.toString()).to.equal(output.join('\n'));
        });

        it('checks if when we change VAT result will still be correct', () => {
            let testClass = new PaymentPackage('HR Services', 123.5);
            testClass.VAT = 30;
            let output = [
                `Package: HR Services`,
                `- Value (excl. VAT): 123.5`,
                `- Value (VAT 30%): 160.55`
            ]
            expect(testClass.toString()).to.equal(output.join('\n'));
        });

        it('checks if when VAT is 0 result will still be correct', () => {
            let testClass = new PaymentPackage('HR Services', 123.5);
            testClass.VAT = 0;
            let output = [
                `Package: HR Services`,
                `- Value (excl. VAT): 123.5`,
                `- Value (VAT 0%): 123.5`
            ]
            expect(testClass.toString()).to.equal(output.join('\n'));
        });

        it('checks if when VAT is floating-point number result will still be correct', () => {
            let testClass = new PaymentPackage('HR Services', 123.5);
            testClass.VAT = 20.5;
            let output = [
                `Package: HR Services`,
                `- Value (excl. VAT): 123.5`,
                `- Value (VAT 20.5%): 148.8175`
            ]
            expect(testClass.toString()).to.equal(output.join('\n'));
        });

        it('checks if when VAT is floating-point number result will still be correct', () => {
            let testClass = new PaymentPackage('HR Services', 123.5);
            expect(testClass.VAT).to.equal(20);
        });

        it('checks if when VAT is floating-point number result will still be correct', () => {
            let testClass = new PaymentPackage('HR Services', 123.5);
            expect(testClass.active).to.equal(true);
        });
    });
});
