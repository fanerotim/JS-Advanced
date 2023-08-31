var numbers = [42.696552, 23.32601, 39.913818, 116.363625, 43.0757, 25.6172, 34.50, 56.11];

for (let num of numbers) {
    // console.log(num.toPrecision(5));
    // console.log(Math.round((num + Number.EPSILON) * 100) / 100);
    console.log(Math.round(num * 100) / 100)
}
