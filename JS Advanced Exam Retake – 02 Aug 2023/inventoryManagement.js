class InventoryManager {

    constructor(capacity) {
        this.capacity = capacity;
        this.items = [];
        this.outOfStock = [];
    }

    addItem(itemName, quantity) {
        quantity = Number(quantity);

        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        } else if (this.items.length / 2 === this.capacity) {
            throw new Error('The inventory is already full.');
        }

        if (this.items.includes(itemName)) {
            let itemIndex = this.items.indexOf(itemName);
            this.items[itemIndex + 1] += quantity;
        } else {
            this.items.push(itemName);
            this.items.push(quantity);
        }

        return `Added ${quantity} ${itemName}(s) to the inventory.`;
    }

    sellItem(itemName, quantity) {
        quantity = Number(quantity);
        let itemIndex = this.items.indexOf(itemName);

        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.');
        } else if (!this.items.includes(itemName)) {
            throw new Error(`The item ${itemName} is not available in the inventory.`)
        } else if (quantity > this.items[itemIndex + 1]) {
            throw new Error(`Not enough ${itemName}(s) in stock.`)
        } else {
            this.items[itemIndex + 1] -= quantity;
            if (this.items[itemIndex + 1] === 0) {
                let outOfStockItem = this.items.splice(itemIndex, 2);
                this.outOfStock.push(outOfStockItem[0]);
            }
        }

        return `Sold ${quantity} ${itemName}(s) from the inventory.`
    }

    restockItem(itemName, quantity) {
        quantity = Number(quantity);
        let itemIndex = this.items.indexOf(itemName);

        if (quantity <= 0) {
            throw new Error('Quantity must be greater than zero.')
        }

        if (this.items.includes(itemName)) {
            this.items[itemIndex + 1] += quantity;
        } else {
            this.items.push(itemName);
            this.items.push(quantity);

            if (this.outOfStock.includes(itemName)) {
                let itemsToRemove = this.outOfStock.splice(itemIndex, 2);
            }
        }
        return `Restocked ${quantity} ${itemName}(s) in the inventory.`
    }

    getInventorySummary() {
        let output = 'Current Inventory:\n';

        for (let i = 0; i < this.items.length; i += 2) {
            if (i + 2 < this.items.length) {
                output += `${this.items[i]}: ${this.items[i + 1]}\n`
            } else {
                output += `${this.items[i]}: ${this.items[i + 1]}`
            }
        }

        if (this.outOfStock.length > 0) {
            output += '\nOut of Stock:';

            if (this.outOfStock.length > 1) {
                output += ` ${this.outOfStock.join(', ')}`
            } else {
                output += ` ${this.outOfStock[0]}`;
            }
        }
        return output;
    }
}


// const manager = new InventoryManager(2);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Level", 3));

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3)); 
// console.log(manager.sellItem("Paintbrush", 2));

// const manager = new InventoryManager(3);

// console.log(manager.addItem("Drill", 10));
// console.log(manager.addItem("Hammer", 5));
// console.log(manager.addItem("Chisel", 3));
// console.log(manager.sellItem("Drill", 3)); 
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));

const manager = new InventoryManager(3);

console.log(manager.addItem("Drill", 10));
console.log(manager.addItem("Hammer", 5));
console.log(manager.addItem("Chisel", 3));
console.log(manager.sellItem("Chisel", 3));
console.log(manager.addItem("Sword", 3));
// console.log(manager.sellItem("Drill", 3));
// console.log(manager.sellItem("Hammer", 5));
// console.log(manager.restockItem("Drill", 5));
// console.log(manager.restockItem("Paintbrush", 1));
console.log(manager.getInventorySummary());
console.log(manager.restockItem("Chisel", 5));
console.log(manager.getInventorySummary());
console.log(manager.restockItem("Chisel", 5));
console.log(manager.getInventorySummary());



