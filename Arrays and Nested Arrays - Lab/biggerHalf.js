function biggerHalf(arr) {

    let sortedArr = arr.sort((a, b) => a - b);
    let secondHalf = Math.floor(sortedArr.length / 2);
    return sortedArr.slice(secondHalf);
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);