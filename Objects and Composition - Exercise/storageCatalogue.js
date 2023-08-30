function storageCatalogue(arr) {

    let myObj = {};

    for (let item of arr) {
        let [product, price] = item.split(' : ');
        price = Number(price);
        let groupHeader = product[0];

        if (!myObj.hasOwnProperty(groupHeader)) {
            myObj[groupHeader] = [];
        }
        myObj[groupHeader].push({product, price});
    }

    let sortedObj = Object.entries(myObj).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let curEntry of sortedObj) {
        let sortedEntries = curEntry[1].sort((a, b) => a.product.localeCompare(b.product));
        console.log(curEntry[0]);
        for (let entry of sortedEntries) {
            console.log(`  ${entry.product}: ${entry.price}`);
        }
    }
}

storageCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);