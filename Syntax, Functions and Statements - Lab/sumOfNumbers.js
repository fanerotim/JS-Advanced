function sumOfNums(numOne, numTwo) {

    numOne = Number(numOne);
    numTwo = Number(numTwo);

    let sum = 0;

    for (let i = numOne; i <= numTwo; i++) {
        sum += i;
    }
    return sum;
}

sumOfNums('1', '5');
sumOfNums('-8', '20');