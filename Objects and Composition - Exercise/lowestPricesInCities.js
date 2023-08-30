function lowestPrice(arr) {

    let myObj = {};

    for (let el of arr) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        if (!myObj.hasOwnProperty(product)) {
            myObj[product] = {town, price};
        } else {
            if (myObj[product].price > price) {
                myObj[product].price = price;
                myObj[product].town = town;
            }
        }
    }
    
    for (let key in myObj) {
        console.log(`${key} -> ${myObj[key].price} (${myObj[key].town})`);
    }
}

lowestPrice([
    'New York | Sample Product | 1000.1',
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);