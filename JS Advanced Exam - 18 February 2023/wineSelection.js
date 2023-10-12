class WineSelection {

    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {

        if (this.wines.length === this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        let curBottle = {
            wineName,
            wineType,
            price,
            paid: false
        }

        this.wines.push(curBottle);

        return `You reserved a bottle of ${curBottle.wineName} ${curBottle.wineType} wine.`
    }

    payWineBottle(wineName, price) {
        let isFound = false;
        for (let bottle of this.wines) {
            if (bottle.wineName === wineName) {
                isFound = true;
                if (bottle.paid === true) {
                    throw new Error(`${wineName} has already been paid.`)
                }
                bottle.paid = true;
                this.bill += price;
                return `You bought a ${wineName} for a ${price}$.`
            }
        }

        if (isFound === false) {
            throw new Error(`${wineName} is not in the cellar.`)
        }
    }

    openBottle(wineName) {
        let isFound = false;
        for (let curBottle of this.wines) {
            if (curBottle.wineName === wineName) {
                isFound = true;

                if (curBottle.paid === false) {
                    throw new Error(`${wineName} need to be paid before open the bottle.`)
                } else if (curBottle.paid === true) {
                    let bottleIndex = this.wines.indexOf(curBottle);
                    let drankBottle = this.wines.splice(bottleIndex, 1);
                    return `You drank a bottle of ${wineName}.`
                }
            }
        }

        if (isFound === false) {
            throw new Error("The wine, you're looking for, is not found.")
        }
    }

    cellarRevision(wineType) {
        if (wineType === undefined) {
            let output = '';
            output += `You have space for ${this.space - this.wines.length} bottles more.\n`
            output += `You paid ${this.bill}$ for the wine.\n`

            let sortedWines = this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            let wineBottlesArr = [];
            let paid = '';
            for (let wine of sortedWines) {
                if (wine.paid === true) {
                    paid = 'Has Paid';
                } else if (wine.paid === false) {
                    paid = 'Not Paid';
                }
                wineBottlesArr.push(`${wine.wineName} > ${wine.wineType} - ${paid}.`);
            }
            output += wineBottlesArr.join('\n');
            return output;
        } else {
            let isFound = false;
            for (let bottle of this.wines) {
                if (bottle.wineType === wineType) {
                    isFound = true;
                    if (bottle.paid === true) {
                        return `${bottle.wineName} > ${wineType} - Has Paid.`
                    } else {
                        return `${bottle.wineName} > ${wineType} - Not Paid.`
                    }
                }
            }

            if (isFound === false) {
                throw new Error(`There is no ${wineType} in the cellar.`)
            }
        }
    }
}

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White',50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144)); 
// console.log(selection.cellarRevision('Rose'));

const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());
