function janNotation(arr) {

    let result;
    let numOne;
    let numTwo;

    let numbers = [];

    for (let el of arr) {

        if (!isNaN(el)) {
            numbers.push(el);
        }

        if (numbers.length < 2 && isNaN(el)) {
            console.log('Error: not enough operands!');
            return;
        } 

        switch(el) {
            case '+':
                numOne = numbers.pop();
                numTwo = numbers.pop();
                result = numTwo + numOne;
                numbers.push(result);
                break;
            case '-':
                numOne = numbers.pop();
                numTwo = numbers.pop();
                result = numTwo - numOne;
                numbers.push(result);
                break;
            case '*':
                numOne = numbers.pop();
                numTwo = numbers.pop();
                result = numTwo * numOne;
                numbers.push(result);
                break;
            case '/':
                numOne = numbers.pop();
                numTwo = numbers.pop();
                result = numTwo / numOne;
                numbers.push(result);
                break;
        } 
    }
    if (numbers.length > 1) {
        console.log("Error: too many operands!");
        return;
    } 
    console.log(numbers.join(''));
}

janNotation([3, 4, '+']);
janNotation([5, 3, 4, '*', '-']);
janNotation([31,2,'+',11,'/']);
janNotation([7, 33, 8, '-']);
janNotation([15, '/']);