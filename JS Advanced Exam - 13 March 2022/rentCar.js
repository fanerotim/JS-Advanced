class CarDealership {

    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {

        if (model === '' || Number.isInteger(horsepower) === false ||
            horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        let currentCar = {
            model,
            horsepower,
            mileage,
            price
        }
        this.availableCars.push(currentCar);
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {

        for (let car of this.availableCars) {

            if (car.model === model) {

                let mileageDifference = car.mileage - desiredMileage;

                if (mileageDifference <= 40000 && mileageDifference > 0) {
                    car.price *= 0.95;
                } else if (mileageDifference > 40000 && mileageDifference > 0) {
                    car.price *= 0.90;
                }

                let soldCarIndex = this.availableCars.indexOf(car);
                let soldCarArr = this.availableCars.splice(soldCarIndex, 1);
                let soldCar = soldCarArr.pop();

                this.soldCars.push({
                    model: soldCar.model,
                    horsepower: soldCar.horsepower,
                    soldPrice: soldCar.price
                });

                this.totalIncome += soldCar.price;
                return `${model} was sold for ${soldCar.price.toFixed(2)}$`
            }
        }
        throw new Error(`${model} was not found!`)
    }

    currentCar() {

        let currentState = '-Available cars:\n';

        if (this.availableCars.length === 0) {
            return `There are no available cars`;
        }

        let availableCarsArr = [];

        this.availableCars.forEach(car => {
            availableCarsArr.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`)
        })

        currentState += availableCarsArr.join('\n');
        return currentState;
    }

    salesReport(criteria) {

        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error(`Invalid criteria!`)
        }

        switch (criteria) {
            case 'horsepower':
                this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
                break;
            case 'model':
                this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
                break;
        }

        let output = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n`
        output += `-${this.soldCars.length} cars sold:\n`

        let soldCarsArr = [];

        this.soldCars.forEach(car => {
            soldCarsArr.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`)
        });

        output += soldCarsArr.join('\n');
        return output;
    }
}

// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

