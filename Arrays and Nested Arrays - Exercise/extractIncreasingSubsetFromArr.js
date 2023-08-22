function extractSubset(arr) {

    let biggestNum = arr[0];

    // 1. Solution with forEach
    // let output = [];

    // arr.forEach(el => {
    //     if (el >= biggestNum) {
    //         biggestNum = el;
    //         output.push(el);
    //     }
    // });

    // console.log(output);
    // return output;

    // 2. Solution with Filter method

    // let result = [];
    // arr.filter((x) => {
    //     if (x >= biggestNum) {
    //         biggestNum = x;
    //         result.push(biggestNum);
    //     }
    // })
    
    // console.log(result);
    // return result;

    // 3. Solution with Reduce method

    let outputTwo = [];

    arr.reduce((acc, curNum) => {
        if (curNum >= biggestNum) {
            biggestNum = curNum;
            outputTwo.push(biggestNum);
        }
    }, 0)
    console.log(outputTwo);
    return (outputTwo);
}

extractSubset([
    1,
    1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]);

// extractSubset(
//     [1,
//     2,
//     3,
//     4])

// extractSubset([
//     20,
//     3,
//     2,
//     15,
//     6,
//     1]);

extractSubset(
    [-1,
    -2,
    -3,
    3,
    1,
    50])