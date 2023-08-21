function diagonalSum(input) {
    
    let leftDiagonal = [];
    let rightDiagonal = [];
    let counter = -1;
    let rightElementIndex = input[0].length - 1;

    for (let arr of input) {
        counter++;
        for (let i = 0; i < arr.length; i++) {
            if (leftDiagonal.length === i && counter === leftDiagonal.length) {
                leftDiagonal.push(arr[i]);
            }
            if (i === rightElementIndex && counter === rightDiagonal.length) {
                rightDiagonal.push(arr[i]);
                rightElementIndex--;
            }
        }
    }
    let leftSum = leftDiagonal.reduce((acc, num) => acc += num, 0);
    let rightSum = rightDiagonal.reduce((acc, num) => acc += num, 0);
    console.log(leftSum, rightSum);    
}

diagonalSum([
    [20, 40],
    [10, 60]
]);

diagonalSum([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);