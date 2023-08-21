function negativePositive(arr) {

    let result = arr.slice(0);
    let finalResult = [];

    for (let i = 0; result.length > 0; i++) {
        let currentNumber = result[0];
        let numHolder = result.splice(0, 1);
  
        if (currentNumber < 0) {
            finalResult.unshift(numHolder.join(''));
        } else {
            finalResult.push(numHolder.join(''));
        }
    }
    console.log(finalResult.join('\n'));
}

negativePositive([7, -2, 8, 9])
negativePositive([3, -2, 0, -1]);