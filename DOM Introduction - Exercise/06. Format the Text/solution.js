function solve() {

    let input = document.getElementById('input').value;
    input = input
        .split('.')
        .filter(x => x !== '' && x !== ' ');
  
    let counter = 0;
    let output = '';
    let result = [];

    while (input.length > 0) {
        let curSentence = input.shift();
        counter++;

        if (counter <= 3) {
            output += `${curSentence}.`;
        }

        if (counter === 3 || input.length == 0) {
            result.push(output);
            output = '';
            counter = 0;
        }
    }
    
    for (let formattedSentence of result) {
        let paragraph = document.createElement('p');
        let node = document.createTextNode(formattedSentence);
        paragraph.appendChild(node);
        let element = document.getElementById('output');
        element.appendChild(paragraph);
    }
}