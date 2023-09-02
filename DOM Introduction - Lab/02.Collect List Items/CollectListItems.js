function extractText() {
    let liItems = document.querySelectorAll('li');
    let textarea = document.getElementById('result');

    for (let el of liItems) {
        textarea.value += el.textContent + '\n';
    }
}