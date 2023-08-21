function smallestTwoNums(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    sortedArr.length = 2;
    console.log(sortedArr.join(' '));
}

smallestTwoNums([30, 15, 50, 5]);
smallestTwoNums([3, 0, 10, 4, 7, 3]);