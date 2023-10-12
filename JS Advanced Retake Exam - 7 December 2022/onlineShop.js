class OnlineShop {
    
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        
        if (this.warehouseSpace - spaceRequired >= 0) {
            let curProduct = {product, quantity};
            this.products.push(curProduct);
            this.warehouseSpace -= spaceRequired;
            return `The ${product} has been successfully delivered in the warehouse.`
        } else {
            throw new Error('Not enough space in the warehouse.')
        }
    }

    quantityCheck(product, minimalQuantity) {

        let isFound = false;

        if (minimalQuantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        for (let curProduct of this.products) {
            if (curProduct.product === product) {
                if (minimalQuantity <= curProduct.quantity) {
                    return `You have enough from product ${product}.` 
                } else {
                    let difference = minimalQuantity - curProduct.quantity;
                    curProduct.quantity = minimalQuantity;
                    return `You added ${difference} more from the ${product} products.`
                }
            }
        }

        if (isFound === false) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
    }

    sellProduct(product) {
        let isFound = false;

        for (let currentProduct of this.products) {
            if (currentProduct.product === product) {
                isFound = true;

                currentProduct.quantity -= 1;
                let soldProduct = {product, quantity: 1};
                this.sales.push(soldProduct);
                return `The ${product} has been successfully sold.`
            }
        }

        if (isFound === false) {
            throw new Error(`There is no ${product} in the warehouse.`)
        }
    }

    revision() {
        let output = '';
        if (this.sales.length === 0) {
            throw new Error('There are no sales today!');
        }
        output += `You sold ${this.sales.length} products today!\nProducts in the warehouse:\n`

        let availableProducts = [];

        for (let currProduct of this.products) {
            availableProducts.push(`${currProduct.product}-${currProduct.quantity} more left`);
        }
        output += `${availableProducts.join('\n')}`;
        return output;
    }
}

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));
// console.log(myOnlineShop.loadingStore('TV', 40, 500));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));
// console.log(myOnlineShop.quantityCheck('TV', 40,));

// const myOnlineShop = new OnlineShop(500)
// console.log(myOnlineShop.loadingStore('headphones', 10, 200));
// console.log(myOnlineShop.loadingStore('laptop', 5, 200));

// console.log(myOnlineShop.quantityCheck('headphones', 10));
// console.log(myOnlineShop.quantityCheck('laptop', 10));

// console.log(myOnlineShop.sellProduct('headphones'));
// console.log(myOnlineShop.sellProduct('laptop'));
// console.log(myOnlineShop.sellProduct('keyboard'));

const myOnlineShop = new OnlineShop(500)
console.log(myOnlineShop.loadingStore('headphones', 10, 200));
console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));
console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));
console.log(myOnlineShop.sellProduct('laptop'));
console.log(myOnlineShop.revision());

