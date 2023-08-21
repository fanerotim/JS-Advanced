function lastKNums(n, k) {
    let result = [1];
    let lastItems = [];

    for (let i = 0; i < n - 1; i++) {
    
        // this piece of code can be replaced by:
        // lastItems = result.slice(-k); - but as it's considered a bad practice, I am not using it
        if (result.length >= k) {
            lastItems = result.slice(result.length - k);
        } else {
            lastItems = result.slice(0)
        }

        let numToPush = lastItems.reduce((acc, num) => acc += num, 0)
        result.push(numToPush);
    }
    return result;
}

lastKNums(6, 3);
lastKNums(8, 2);
