function calorieObject(arr) {

    let myObj = {};
    let product;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            product = arr[i];
        } else {
            myObj[product] = Number(arr[i]);
        }
    }
    console.log(myObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);