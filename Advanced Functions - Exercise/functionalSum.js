function add(num) {
    let sum = 0;

    function adder(y) {
        sum += y;
        return adder;
    }

    adder.toString = () => {
        console.log(sum);
        return sum;
    }

    return adder(num)
}

// add(1).toString();
add(1)(6)(-3).toString();
