function solve() {

    let rightAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let buttons = document.querySelectorAll('.answer-text');
    let counter = 0;
    let sectionsCounter = 0;

    for (let button of buttons) {
        button.addEventListener('click', (e) => {

            if (rightAnswers.includes(button.textContent)) {
                counter++;
            }

            let sections = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelectorAll('section');
            sections[sectionsCounter].style.display = 'none';

            if (sectionsCounter < sections.length - 1) {
                sections[sectionsCounter + 1].style.display = 'block';
            }
            sectionsCounter++;

            let resultsUlElement = document.getElementById('results');
            let resultsH1Element = document.querySelector('#results h1')

            if (sectionsCounter === 3) {
                if (counter === 3) {
                    resultsH1Element.textContent = 'You are recognized as top JavaScript fan!';
                    resultsUlElement.style.display = 'block';
                } else {
                    resultsH1Element.textContent = `You have ${counter} right answers`
                    resultsUlElement.style.display = 'block';
                }
            }
        })
    }
}
