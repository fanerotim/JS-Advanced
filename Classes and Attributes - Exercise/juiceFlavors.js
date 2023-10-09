function juiceFlavour(input) {

    let bottles = {};
    let juices = {};

    for (let item of input) {
        let [juice, quantity] = item.split(' => ');
        quantity = Number(quantity);

        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = quantity;
        } else {
            juices[juice] += quantity;
        }

        if (juices[juice] >= 1000) {
            let curJuice = juices[juice] % 1000;
            let curBottles = juices[juice] - curJuice;
            curBottles /= 1000;
            
            
            if (!bottles.hasOwnProperty[juice]) {
                bottles[juice] = curBottles;
            } else {
                bottles[juice] += curBottles;
            }
            curBottles = 0;
        }
    }
    for (let currentJuice in bottles) {
        console.log(`${currentJuice} => ${bottles[currentJuice]}`);
    }
}

juiceFlavour([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);

juiceFlavour([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);