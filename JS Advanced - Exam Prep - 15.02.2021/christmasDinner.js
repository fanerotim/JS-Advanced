class ChristmasDinner {

    constructor(budget) {

        if (budget < 0) {
            throw new Error('The budget cannot be a negative number')
        }

        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(product) {

        let [type, price] = product;

        if (this.budget < price) {
            throw new Error('Not enough money to buy this product');
        }
        this.products.push(type);
        this.budget -= price;
        return `You have successfully bought ${type}!`
    }

    recipes(recipe) {
        
        let productsCounter = 0;

        for (let curProduct of recipe.productsList) {
            if (this.products.includes(curProduct)) {
                productsCounter++;
            }
        }

        if (productsCounter === recipe.productsList.length) {
            this.dishes.push(recipe);
            return `${recipe.recipeName} has been successfully cooked!`
        }
        throw new Error('We do not have this product')
    } 
    
    inviteGuests(name, dish) {

        if (this.guests.hasOwnProperty(name)) {
            throw new Error(`This guest has already been invited`);
        }

        let isFound = false;

        for (let guest of this.dishes) {
            if (guest.recipeName === dish) {
                isFound = true;
            } 
        }
        
        if (isFound === false) {
            throw new Error(`We do not have this dish`)
        }

        this.guests[name] = dish; 
        return `You have successfully invited ${name}!`
    }

    showAttendance() {
        let outputArr = [];

        for (let guest in this.guests) {
            let outputString = '';
            outputString += `${guest} will eat ${this.guests[guest]}, which consists of `;
            for (let dish of this.dishes) {
                if (dish.recipeName === this.guests[guest]) {
                    outputString += `${dish.productsList.join(', ')}`;
                    outputArr.push(outputString);
                    break;
                }
            } 
        }
        return outputArr.join('\n');
    }
}

let dinner = new ChristmasDinner(300);
dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

