function autoEngineering(input) {

    let output = {};

    for (let line of input) {
        let [carBrand, carModel, quantity] = line.split(' | ');
        quantity = Number(quantity);
        
        if (!output.hasOwnProperty(carBrand)) {
            output[carBrand] = {};
            output[carBrand][carModel] = quantity;
        } else {
            if (!output[carBrand].hasOwnProperty(carModel)) {
                output[carBrand][carModel] = quantity;
            } else {
                output[carBrand][carModel] += quantity;
            }
        }
    }

    let result = '';
    let counter = 0;
    for (let curBrand in output) {
        counter++;
        if (counter > 1) {
            result += `\n${curBrand}`
        } else {
            result += `${curBrand}`
        }
        for (let curModel in output[curBrand]) {
            result += `\n###${curModel} -> ${output[curBrand][curModel]}`;
        }
    }
    console.log(result);
}

autoEngineering(
    ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);