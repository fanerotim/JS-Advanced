function gcd(numOne, numTwo) {

    let biggerNum = 0;
    if (numOne > numTwo) {
        biggerNum = numOne;
    } else {
        biggerNum = numTwo;
    }

    let output = 0;
    for (let i = 0; i < biggerNum; i++) {
        if (numOne % i === 0 && numTwo % i === 0) {
            output = i;
        }
    }
    console.log(output);
}

gcd(15, 5);
gcd(2154, 458);