let { Repository } = require('../Repository');
let expect = require('chai').expect;

describe('Tests repository class', function () {

    describe("checks if class is instantiated properly", function () {
        it('checks if output is correct', function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            }
            expect(testClass.add(testEntity)).to.equal(0);
            expect(testClass.count).to.equal(1);
        });

        it('checks if output is correct', function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            }
            expect(testClass.count).to.equal(0);
        });

        it('checks if output is correct', function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                age: 22,
                birthday: new Date(1998, 0, 7)
            }
            expect(() => testClass.add(testEntity)).to.throw('Property name is missing from the entity!')  
        });

        it('checks if output is correct', function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Ivan',
                birthday: new Date(1998, 0, 7)
            }
            expect(() => testClass.add(testEntity)).to.throw('Property age is missing from the entity!')  
        });

        it('checks if output is correct', function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Ivan',
                age: 22,
            }
            expect(() => testClass.add(testEntity)).to.throw('Property birthday is missing from the entity!')  
        });

        it('checks if output is correct', function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 23,
                age: 22,
                birthday: new Date(1998, 0, 7)
            }
            expect(() => testClass.add(testEntity)).to.throw('Property name is not of correct type!')  
        });

        it('checks if output is correct', function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Ivan',
                age: 'incorrect',
                birthday: new Date(1998, 0, 7)
            }
            expect(() => testClass.add(testEntity)).to.throw('Property age is not of correct type!')  
        });

        it('checks if output is correct', function () {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Ivan',
                age: 23,
                birthday: 'incorrect'
            }
            expect(() => testClass.add(testEntity)).to.throw('Property birthday is not of correct type!')  
        });
    });

    describe('checks getId function', () => {
        it('checks if output is correct', () => {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            expect(() => testClass.getId(0)).to.throw(`Entity with id: 0 does not exist!`)
        })

        it('checks if output is correct', () => {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let entity = {
                name: "Pesho",
                age: 22,
                birthday: new Date(1998, 0, 7)
            };

            let testClass = new Repository(properties)
            testClass.add(entity);
            expect(testClass.getId(0)).to.equal(entity)
        })

        it('checks if output is correct', () => {

            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            expect(() => testClass.getId(-1)).to.throw(`Entity with id: -1 does not exist!`)
        })
    })

    describe('checks the update function', () => {
        it ('validates id', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            }

            let newEntity = {
                name: 'Ivan',
                age: 35,
                birthday: new Date(1988, 0, 7)
            }
            expect(testClass.add(testEntity)).to.equal(0);
            expect(() => testClass.update(2, newEntity)).to.throw(`Entity with id: 2 does not exist!`)
        })

        it ('validates id', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            }

            let newEntity = {
                name: 0,
                age: 35,
                birthday: new Date(1988, 0, 7)
            }
            expect(testClass.add(testEntity)).to.equal(0);
            expect(() => testClass.update(0, newEntity)).to.throw(Error);
            
        })
    })

    describe('tests the del function', () => {
        it ('validates id', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            }

            let newEntity = {
                name: 'Ivan',
                age: 35,
                birthday: new Date(1988, 0, 7)
            }
            expect(testClass.add(testEntity)).to.equal(0);
            expect(() => testClass.del(2)).to.throw(`Entity with id: 2 does not exist!`)
        })

        it ('validates id', () => {
            let properties = {
                name: "string",
                age: "number",
                birthday: "object"
            };

            let testClass = new Repository(properties)
            let testEntity = {
                name: 'Pesho',
                age: 22,
                birthday: new Date(1998, 0, 7)
            }

            let newEntity = {
                name: 'Ivan',
                age: 35,
                birthday: new Date(1988, 0, 7)
            }
            expect(testClass.add(testEntity));
            expect(testClass.add(testEntity));
            expect(testClass.del(1))
            expect(testClass.data.has(1)).to.equal(false)
        })
    })  
});