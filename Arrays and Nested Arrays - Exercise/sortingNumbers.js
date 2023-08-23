function sortingNums(arr) {

    let output = [];

    while (arr.length > 0) {
        let minNum = Math.min(...arr);
        let indexOfMinNum = arr.indexOf(minNum);
        arr.splice(indexOfMinNum, 1);
        output.push(minNum);

        if (arr.length !== 0) {
            let maxNum = Math.max(...arr);
            let indexOfMaxNum = arr.indexOf(maxNum);
            arr.splice(indexOfMaxNum, 1);
            output.push(maxNum);
        }
        
    }
    return output;
    // console.log(output);
}

sortingNums([1, 65, 3, 52, -3, 48, 63, -2, 31, 18, 56]);