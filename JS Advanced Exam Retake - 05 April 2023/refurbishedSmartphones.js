class RefurbishedSmartphones {

    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {

        if (model === '' || storage < 0 || Number.isInteger(storage) === false
            || price < 0 || condition === '') {
            throw new Error('Invalid smartphone!')
        }

        let currentPhone = { model, storage, price, condition };
        this.availableSmartphones.push(currentPhone);
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`
    }

    sellSmartphone(model, desiredStorage) {
        let isFound = false;
        for (let i = 0; i < this.availableSmartphones.length; i++) {
            let curPhone = this.availableSmartphones[i];

            if (curPhone.model === model) {
                isFound = true;

                if (curPhone.storage >= desiredStorage) {
                    curPhone.storage = curPhone.storage;
                } else if (desiredStorage - curPhone.storage <= 128) {
                    curPhone.price *= 0.90;
                } else if (desiredStorage - curPhone.storage > 128) {
                    curPhone.price *= 0.80;
                }

                let curSoldPhone = this.availableSmartphones.splice(i, 1);
                let soldPhone = curSoldPhone.shift();

                let soldPhoneToAdd = {
                    model: soldPhone.model,
                    storage: soldPhone.storage,
                    soldPrice: soldPhone.price
                };

                this.soldSmartphones.push(soldPhoneToAdd);

                this.revenue += soldPhoneToAdd.soldPrice;
                return `${model} was sold for ${soldPhoneToAdd.soldPrice.toFixed(2)}$`
            }
        }
        if (isFound === false) {
            throw new Error(`${model} was not found!`)
        }
    }

    upgradePhones() {

        if (this.availableSmartphones.length === 0) {
            throw new Error('There are no available smartphones!');
        }

        let upgradedPhones = [];

        for (let phone of this.availableSmartphones) {
            phone.storage *= 2;
            upgradedPhones.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
        }
        
        let output = 'Upgraded Smartphones:\n'
        output += upgradedPhones.join('\n');
        return output;
    }

    salesJournal(criteria) {

        let result;

        if (criteria === 'storage') {
            result = this.soldSmartphones.sort((a, b) => b.storage - a.storage);
        } else if (criteria === 'model') {
            result = this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            throw new Error('Invalid criteria!');
        }

        let finalOutput = `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n`
        finalOutput += `${this.soldSmartphones.length} smartphones sold:\n`;

        let soldPhonesArray = [];

        for (let soldPhone of this.soldSmartphones) {
            soldPhonesArray.push(`${soldPhone.model} / ${soldPhone.storage} GB / ${soldPhone.soldPrice.toFixed(2)}$`)
        }
        finalOutput += soldPhonesArray.join('\n');
        return finalOutput;
    }
}

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
// console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));