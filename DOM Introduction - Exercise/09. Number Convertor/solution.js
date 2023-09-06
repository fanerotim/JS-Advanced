function solve() {

    let toField = document.querySelector('#selectMenuTo option');
    toField.textContent = 'Hexadecimal';
    toField.value = 'hexadecimal';

    let secondDropDownOption = document.createElement('option');
    secondDropDownOption.textContent = 'Binary';
    secondDropDownOption.value = 'binary';

    let parentToAppendTo = document.getElementById('selectMenuTo');
    parentToAppendTo.appendChild(secondDropDownOption);

    document.querySelector('button').addEventListener('click', onClick);

    function onClick() {

        let decimal = document.getElementById('input').value;
        decimal = Number(decimal);

        let hexadecimal = decimal.toString(16);
        hexadecimal = hexadecimal.toUpperCase();
        let binary = decimal.toString(2);

        let valueToConvertTo = document.querySelector('#selectMenuTo').value;

        let result;

        if (valueToConvertTo === 'hexadecimal') {
            result = hexadecimal;
        } else if (valueToConvertTo === 'binary') {
            result = binary;
        }

        let output = document.querySelector('footer input');
        output.value = result;
    }
}