class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {

        let newlyAddedVegetables = [];

        for (let vegetableInfo of vegetables) {
            let isFound = false;
            let [type, quantity, price] = vegetableInfo.split(' ');
            quantity = Number(quantity);
            price = Number(price);

            for (let curVegetable of this.availableProducts) {
                if (curVegetable.type === type) {
                    isFound = true;
                    curVegetable.quantity += quantity;
                    if (curVegetable.price < price) {
                        curVegetable.price = price;
                    }
                }
            }
            if (isFound === false) {
                this.availableProducts.push({ type, quantity, price });
            }

            if (!newlyAddedVegetables.includes(type)) {
                newlyAddedVegetables.push(type);
            }
        }
        return `Successfully added ${newlyAddedVegetables.join(', ')}`
    }

    buyingVegetables(selectedProducts) {

        let totalPrice = 0;

        for (let info of selectedProducts) {
            let isFound = false;
            let [curType, curQty] = info.split(' ');
            curQty = Number(curQty);

            for (let vegetable of this.availableProducts) {
                if (vegetable.type === curType) {
                    isFound = true;
                    if (vegetable.quantity < curQty) {
                        throw new Error(`The quantity ${curQty} for the vegetable ${curType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                    }
                    let curCost = vegetable.price * curQty;
                    vegetable.quantity -= curQty;
                    totalPrice += curCost;
                }
            }

            if (isFound === false) {
                throw new Error(`${curType} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {

        for (let curType of this.availableProducts) {
            if (curType.type === type) {
                if (curType.quantity < quantity) {
                    curType.quantity = 0;
                    return `The entire quantity of the ${type} has been removed.`
                }
                curType.quantity -= quantity;
                return `Some quantity of the ${type} has been removed.`
            }
        }
        throw new Error(`${type} is not available in the store.`)
    }

    revision() {
        let output = `Available vegetables:\n`
        let outputVegerablesArr = [];

        this.availableProducts.sort((a, b) => a.price - b.price);

        for (let curProduct of this.availableProducts) {
            outputVegerablesArr.push(`${curProduct.type}-${curProduct.quantity}-$${curProduct.price}`);
        }
        output += `${outputVegerablesArr.join('\n')}\n`;
        output += `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        return output;
    }
}

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Pupesh 1"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
// console.log(vegStore.revision());

