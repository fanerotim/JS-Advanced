function calc() {
    let numOne = document.getElementById('num1');
    let numTwo = document.getElementById('num2');
    let sum = document.getElementById('sum');
    
    let result = Number(numOne.value) + Number(numTwo.value);
    sum.value = result
}
