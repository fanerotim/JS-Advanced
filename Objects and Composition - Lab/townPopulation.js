function townPopulation(arr) {

    let towns = {};

    arr.forEach(el => {
        let [town, population] = el.split(' <-> ');
        population = Number(population);

        if (towns.hasOwnProperty(town)) {
            towns[town] += population;
        } else {
            towns[town] = population;
        }
    });
    Object.keys(towns).forEach(el => console.log(`${el} : ${towns[el]}`));
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']);

// townPopulation([
//     'Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']);