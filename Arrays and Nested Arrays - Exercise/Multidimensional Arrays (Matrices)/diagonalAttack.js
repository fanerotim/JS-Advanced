function diagonalAttack(arr) {

    let myArr = [];

    arr.forEach(el => {
        let curArr = el.split(' ').map(num => Number(num));
        myArr.push(curArr);
    });

    let leftDiagonal = 0;
    let rightDiagonal = myArr.length - 1;
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < myArr.length; i++) {
        leftSum += myArr[i][leftDiagonal];
        rightSum += myArr[i][rightDiagonal];

        myArr[i][leftDiagonal] = myArr[i][leftDiagonal].toString();
        myArr[i][rightDiagonal] = myArr[i][rightDiagonal].toString();

        leftDiagonal++;
        rightDiagonal--;
    }

    if (leftSum !== rightSum) {
        arr.forEach(curArr => console.log(curArr));
        return;
    } else {
        for (let i = 0; i < myArr.length; i++) {
            let currentArray = myArr[i];
            for (let j = 0; j < currentArray.length; j++) {
                let item = currentArray[j];

                if (typeof item === 'number') {
                    myArr[i][j] = leftSum;
                } else {
                    myArr[i][j] = Number(myArr[i][j])
                }
            }
        }
        myArr.forEach(el => console.log(el.join(' ')));
    }
}

diagonalAttack(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']);

diagonalAttack(
    ['1 1 1',
    '1 1 1',
    '1 1 0']);