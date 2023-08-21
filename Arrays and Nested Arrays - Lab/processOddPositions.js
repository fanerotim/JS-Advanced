function processOddPositions(arr) {

    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            resultArr.push(arr[i]);
        }
    }

    resultArr = resultArr
    .map(num => {
        return num * 2;
    })
    .reverse()
    .join(' ');

    console.log(resultArr);
}

processOddPositions([10, 15, 20, 25]);
processOddPositions([3, 0, 10, 4, 7, 3]);