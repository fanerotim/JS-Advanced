function heroicInventory(arr) {

    let result = [];

    for (let item of arr) {
        let [heroName, heroLevel, ...heroItems] = item.split(' / ');
        
        let myObj = {
            name: heroName,
            level: Number(heroLevel),
        }

        if (heroItems.length === 0) {
            heroItems = [];
        } else {
            heroItems = heroItems.join('').split(', ');
        }
        
        myObj.items = heroItems;
        result.push(myObj);
    }
    // return JSON.stringify(result);
    console.log(JSON.stringify(result))
}

// heroicInventory([
//     'Isacc / 25 / Apple, GravityGun',
//     'Derek / 12 / BarrelVest, DestructionSword',
//     'Hes / 1 / Desolator, Sentinel, Antara'
// ]);

// heroicInventory([
//     'Jake / 1000 / Gauss, HolidayGrenade'
// ]);

heroicInventory([
    'Jake / 1000'
]);