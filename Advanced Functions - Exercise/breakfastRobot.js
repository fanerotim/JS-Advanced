function solution(input) {

    let stock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    let recipies = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }

    return function management(x) {
        let line = x.split(' ');
        let command = line.shift();
        let quantity = Number(line.pop());

        switch (command) {

            case 'restock':
                let microelement = line.shift();
                stock[microelement] += quantity;

                return 'Success';
            case 'prepare':
                let recipe = line.shift();
                let requiredIngridients = {};

                for (let ingredient in recipies[recipe]) {
                    requiredIngridients[ingredient] = recipies[recipe][ingredient] * quantity;

                    if (stock[ingredient] < requiredIngridients[ingredient]) {
                        return `Error: not enough ${ingredient} in stock`
                    }
                }

                for (let ingredientToDeduce in requiredIngridients) {
                    stock[ingredientToDeduce] -= requiredIngridients[ingredientToDeduce];
                }
                return 'Success';
            case 'report':
                return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`

        }

    };
}

// let manager = solution();
// console.log(manager("restock flavour 50")); // Success 
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

// let manager = solution();
// console.log(manager('restock flavour 50')) 
// console.log(manager('prepare lemonade 4'))
// console.log(manager('restock carbohydrate 10'))
// console.log(manager('restock flavour 10'))
// console.log(manager('prepare apple 1'))
// console.log(manager('restock fat 10'))
// console.log(manager('prepare burger 1'))
// console.log(manager('report'));

// let manager = solution();
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock protein 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock carbohydrate 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock fat 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('restock flavour 10'));
// console.log(manager('prepare turkey 1'));
// console.log(manager('report'));

