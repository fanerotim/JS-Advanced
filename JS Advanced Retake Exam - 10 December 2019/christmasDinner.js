class ChristmasDinner {

    constructor(budget) {

        if (budget < 0) {
            throw new Error('The budget cannot be a negative number');
        }

        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {
        let [type, price] = product;
        price = Number(price);

        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`
    }
    
    recipes(recipe) {
        
        let productCounter = 0;
        for (let neededProduct of recipe.productsList) {
            for (let availableProduct of this.products) {
                if (neededProduct === availableProduct) {
                    productCounter++;
                }
            }
        }

        if (productCounter === recipe.productsList.length) {
            this.dishes.push(recipe);
            return `${recipe.recipeName} has been successfully cooked!`;
        }
        throw new Error(`We do not have this product`);
    }

    inviteGuests(name, dish) {

        if (this.guests.hasOwnProperty(name)) {
            throw new Error(`This guest has already been invited`)
        }

        for (let curDish of this.dishes) {
            if (curDish.recipeName === dish) {
                this.guests[name] = dish;
                return `You have successfully invited ${name}!`
            }
        }
        throw new Error(`We do not have this dish`);
    }

    showAttendance() {
        let output = [];

        for (let line in this.guests) {
            let curLine = `${line} will eat ${this.guests[line]}, which consists of `;

            for (let recipe of this.dishes) {
                if (recipe.recipeName === this.guests[line]) {
                    curLine += recipe.productsList.join(', ');
                    output.push(curLine);
                }
            }
        }
        return output.join('\n');
    }
}