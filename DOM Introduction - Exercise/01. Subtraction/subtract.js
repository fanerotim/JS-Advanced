function subtract() {
    let output = document.getElementById('result');
    let firstNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let sum = firstNumber - secondNumber;
    output.textContent = sum;
}