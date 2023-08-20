function cookingByNums(num, operationOne, operationTwo, operationThree, operationFour, operationFive) {

    let startingNum = Number(num);
    let arr = [operationOne, operationTwo, operationThree, operationFour, operationFive];

    arr.forEach(el => {
        switch(el) {
            case 'chop':
                startingNum /= 2;
                console.log(startingNum);
                break;
            case 'dice':
                startingNum = Math.sqrt(startingNum);
                console.log(startingNum);
                break;
            case 'spice':
                startingNum++;
                console.log(startingNum);
                break;
            case 'bake':
                startingNum *=  3;
                console.log(startingNum);
                break;
            case 'fillet':
                startingNum = (startingNum * 0.8).toFixed(1);
                console.log(startingNum);
                break;
        }
    })
}

// cookingByNums('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNums('9', 'dice', 'spice', 'chop', 'bake', 'fillet');