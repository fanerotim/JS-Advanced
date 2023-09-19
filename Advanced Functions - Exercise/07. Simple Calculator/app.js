function calculator() {

    let num1;
    let num2;
    let finalResult = document.getElementById('result');

    return {
        init(numOne, numTwo, result) {
            num1 = document.querySelector(numOne);
            num2 = document.querySelector(numTwo);   
        },
        add() { 
            finalResult.value = Number(num1.value) + Number(num2.value);
        },
        subtract() {
            finalResult.value = Number(num1.value) - Number(num2.value);
        }
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');
calculate.add();



