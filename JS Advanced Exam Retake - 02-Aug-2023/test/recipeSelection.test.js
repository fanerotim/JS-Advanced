let recipeSelection = require('../recipeSelection');
let expect = require('chai').expect;

describe('recipe selecton', () => {

    describe('testing the isTypeSuitable() method', () => {

        it('tests the isTypeSuitable() function by providing arguments different than string', () => {
            expect(() => recipeSelection.isTypeSuitable(123, 123)).to.throw('Invalid input');
        })

        it('tests the isTypeSuitable() function by providing arguments different than string', () => {
            expect(() => recipeSelection.isTypeSuitable('123', 123)).to.throw('Invalid input');
        })

        it('tests the isTypeSuitable() function by providing arguments different than string', () => {
            expect(() => recipeSelection.isTypeSuitable(123, '123')).to.throw('Invalid input');
        })

        it('tests the isTypeSuitable() function by providing correct input', () => {
            let expectedResult = 'This recipe is not suitable for vegetarians';
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal(expectedResult);
        })

        it('tests the isTypeSuitable() function by providing correct input', () => {
            let expectedResult = 'This recipe is not suitable for vegans';
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal(expectedResult);
        })

        it('tests the isTypeSuitable() function by providing correct input', () => {
            let expectedResult = 'This recipe is not suitable for vegans';
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal(expectedResult);
        })

        it('tests the isTypeSuitable() function by providing correct input', () => {
            let expectedResult = 'This recipe is suitable for your dietary restriction';
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegetarian')).to.equal(expectedResult);
        })
    })

    describe('testing the isItAffordable() method', () => {

        it('checks if input to isItAffordable is valid', () => {
            expect(() => recipeSelection.isItAffordable('123', 123)).to.throw('Invalid input')
        })

        it('checks if input to isItAffordable is valid', () => {
            expect(() => recipeSelection.isItAffordable(123, '123')).to.throw('Invalid input')
        })

        it('checks if input to isItAffordable is valid', () => {
            expect(() => recipeSelection.isItAffordable('123', '123')).to.throw('Invalid input')
        })

        it('checks if input to isItAffordable is valid', () => {
            expect(() => recipeSelection.isItAffordable(123, 123)).to.not.throw('Invalid input')
        })

        it('checks if input to isItAffordable is valid', () => {
            expect(() => recipeSelection.isItAffordable(123.5, 123.7)).to.not.throw('Invalid input')
        })

        it('checks if input to isItAffordable is valid', () => {
            expect(() => recipeSelection.isItAffordable(0, 0)).to.not.throw('Invalid input')
        })

        it('checks if input to isItAffordable is valid', () => {
            let expectedResult = "You don't have enough budget to afford this recipe";
            expect(recipeSelection.isItAffordable(20, 15)).to.equal(expectedResult)
        })

        it('checks if input to isItAffordable is valid', () => {
            let expectedResult = "You don't have enough budget to afford this recipe";
            expect(recipeSelection.isItAffordable(15, 20)).to.equal(`Recipe ingredients bought. You have ${20 - 15}$ left`)
        })
    })

    describe('tests getRecipiesByCategory() method', () => {
        it('checks if input to getRecipiesByCategory() method is valid', () => {
            expect(() => recipeSelection.getRecipesByCategory(123, 'bulgarian')).to.throw('Invalid input');
        })

        it('checks if input to getRecipiesByCategory() method is valid', () => {
            expect(() => recipeSelection.getRecipesByCategory([], 123)).to.throw('Invalid input');
        })

        it('checks if input to getRecipiesByCategory() method is valid', () => {
            expect(() => recipeSelection.getRecipesByCategory([], 'bulgarian')).to.not.throw('Invalid input');
        })

        it('checks if input to getRecipiesByCategory() method is valid', () => {
            let recipies = [
                {title: 'Some asian dish', category: 'Asian'}, 
                {title: 'Another asian dish', category: 'Asian'},
                {title: 'Bulgarian dish', category: 'Bulgarian'}
            ];
            let expectedResult = ['Bulgarian dish']
            expect(recipeSelection.getRecipesByCategory(recipies, 'Bulgarian')).to.eql(expectedResult);
        })

        it('checks if input to getRecipiesByCategory() method is valid', () => {
            let recipies = [
                {title: 'Some asian dish', category: 'Asian'}, 
                {title: 'Another asian dish', category: 'Asian'},
                {title: 'Bulgarian dish', category: 'Bulgarian'}
            ];
            let expectedResult = ['Some asian dish', 'Another asian dish'];
            expect(recipeSelection.getRecipesByCategory(recipies, 'Asian')).to.eql(expectedResult);
        })
    })
})