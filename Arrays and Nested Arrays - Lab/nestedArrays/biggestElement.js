function biggestElement(input) {

    let biggestNum = input[0][0]

    for (let arr of input) {
        for (let num of arr) {
            if (num > biggestNum) {
                biggestNum = num;
            }
        }
    }
    console.log(biggestNum);
}

biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]);

biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);