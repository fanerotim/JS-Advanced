function solve() {

    let text = document.getElementById('text');
    let textElement = text.value;
    textElement = textElement.toLowerCase()
    textElement = textElement.split(' ');

    let casing = document.getElementById('naming-convention');
    let casingValue = casing.value;
    let output = '';

    for (let i = 0; i < textElement.length; i++) {
        let word = textElement[i];
        switch (casingValue) {
            case 'Pascal Case':
                output += `${word[0].toUpperCase()}${word.substring(1)}`
                break;
            case 'Camel Case':
                if (i == 0) {
                    output += `${word[0].toLowerCase()}${word.substring(1)}`;
                } else {
                    output += `${word[0].toUpperCase()}${word.substring(1)}`;
                }
                break;
            default:
                output = 'Error!';
        }
    }
    let result = document.getElementById('result');
    result.textContent = output;
}

