function sameNums(input) {

    let numArr = input
        .toString()
        .split('')
        .map(num => Number(num));

    let sum = numArr.reduce((acc, num) => acc += num, 0);

    let numToCompare = numArr.shift();
    let isSame = true;
    
    numArr.forEach(el => {
        if (el !== numToCompare) {
            isSame = false;;
        }
    });

    if (isSame) {
        console.log(true)
    } else {
        console.log(false);
    }
    console.log(sum);
}

sameNums(2222222);
// sameNums('1234');