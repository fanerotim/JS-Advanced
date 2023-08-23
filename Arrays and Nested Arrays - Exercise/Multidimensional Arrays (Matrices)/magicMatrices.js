function magicMatrices(input) {

    let sumOfRowNums = input[0].reduce((acc, curNum) => {
        return acc += curNum;
    }, 0);

    let sumOfFirstColumn = 0;
    for (let arr of input) {
        for (let i = 0; i < arr.length; i++) {
            if (i == 0) {
                sumOfFirstColumn += arr[i];
            }
        }
    }

    let isMagic = true;

    input.forEach(arr => {    
        let currentSum = arr.reduce((acc, num) => {
            return acc += num;
        }, 0);
        
        let counter = 1;
        let sumOfCurCol = 0;

        for (let i = 0; i < input.length; i++) {
            sumOfCurCol += input[i][counter];
        }
        counter++;

        if (sumOfRowNums !== currentSum || sumOfFirstColumn !== sumOfCurCol) {
            return isMagic = false;
        }
        sumOfFirstColumn = sumOfCurCol;
    });
    console.log(isMagic);
}

magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);

magicMatrices([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);