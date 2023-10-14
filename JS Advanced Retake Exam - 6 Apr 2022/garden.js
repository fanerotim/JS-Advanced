class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {

        if (this.spaceAvailable < spaceRequired) {
            throw new Error("Not enough space in the garden.");
        }

        let currentPlant = {
            plantName,
            spaceRequired,
            ripe: false,
            quantity: 0
        }
        this.plants.push(currentPlant);
        this.spaceAvailable -= spaceRequired;
        return `The ${plantName} has been successfully planted in the garden.`
    }

    ripenPlant(plantName, quantity) {

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.')
        }

        for (let plant of this.plants) {
            if (plant.plantName === plantName) {
                if (plant.ripe === true) {
                    throw new Error(`The ${plantName} is already ripe.`)
                }
                plant.ripe = true;
                plant.quantity += quantity;

                if (quantity === 1) {
                    return `${quantity} ${plantName} has successfully ripened.`
                }
                return `${quantity} ${plantName}s have successfully ripened.`
            }
        }

        throw new Error(`There is no ${plantName} in the garden.`)
    }

    harvestPlant(plantName) {

        let plantIndex;

        for (let currentPlant of this.plants) {
            if (currentPlant.plantName === plantName)
                plantIndex = this.plants.indexOf(currentPlant);
        }

        for (let curPlant of this.plants) {
            if (curPlant.plantName === plantName) {
                if (curPlant.ripe === false) {
                    throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
                }
                let harvestedPlant = this.plants.splice(plantIndex, 1);
                harvestedPlant = harvestedPlant.shift();
                this.storage.push({ plantName: harvestedPlant.plantName, quantity: harvestedPlant.quantity });
                this.spaceAvailable += harvestedPlant.spaceRequired;
                return `The ${plantName} has been successfully harvested.`
            }
        }
        throw new Error(`There is no ${plantName} in the garden.`)
    }

    generateReport() {
        
        let output = '';
        output += `The garden has ${this.spaceAvailable} free space left.\n`
        
        let sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let plantNames = [];    
        
        sortedPlants.forEach(plantInfo => {
            plantNames.push(plantInfo.plantName);
        });

        output += `Plants in the garden: ${plantNames.join(', ')}\n`;
        
        let plantsInStorage = [];

        if (this.storage.length === 0) {
            output += 'Plants in storage: The storage is empty.'
        } else {
            this.storage.forEach(plant => {
                plantsInStorage.push(`${plant.plantName} (${plant.quantity})`);
            })
            output += `Plants in storage: ${plantsInStorage.join(', ')}`;
        }
        return output;
    }
}

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('olive', 50));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('orange', 4));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 100));
// console.log(myGarden.addPlant('cucumber', 30));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.ripenPlant('olive', 30));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('olive'));

// const myGarden = new Garden(250)
// console.log(myGarden.addPlant('apple', 20));
// console.log(myGarden.addPlant('orange', 200));
// console.log(myGarden.addPlant('raspberry', 10));
// console.log(myGarden.ripenPlant('apple', 10));
// console.log(myGarden.ripenPlant('orange', 1));
// console.log(myGarden.harvestPlant('apple'));
// console.log(myGarden.harvestPlant('raspberry'));

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

