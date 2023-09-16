function fibonacci() {

    let a = 0;
    let b = 1;
    let counter = 0;
    let output = [];

    return () => {
        counter++;
        let result;
        if (counter < 3) {
            result = a + b;
            output.push(a + b);
        } else {
            let lastNum = output[output.length - 1];
            let oneBeforeLast = output[output.length - 2];
            result = lastNum + oneBeforeLast;
            output.push(result);
        }
        return result;
    }
}

let fib = fibonacci();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
