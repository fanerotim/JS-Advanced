function solve() {

    const [checkBtn, clearBtn] = document.querySelectorAll('button');


    checkBtn.addEventListener('click', (e) => {
        let inputElements = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll('tbody tr td input'));

        let paragraph = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('#check p');
        let table = e.target.parentNode.parentNode.parentNode.parentNode;
        let counter = 0;
        let hasWon = true;

        let rows = new Set();
        let cols = new Set();

        for (let i = 0; i < inputElements.length; i++) {
            let curNum = Number(inputElements[i].value);
            counter++;

            if (counter <= 3) {
                rows.add(curNum);
                if (counter === 3) {
                    if (rows.size === 3) {
                        rows.clear();
                        counter = 0;
                    } else {
                        hasWon = false;
                    }
                }
            }
        }

        for (let j = 0; j < 3; j++) {
            if (j === 0) {
                cols.add(inputElements[0].value);
                cols.add(inputElements[3].value);
                cols.add(inputElements[6].value);
                if (cols.size === 3) {
                    cols.clear();
                } else {
                    hasWon = false;
                }
            } else if (j === 1) {
                cols.add(inputElements[1].value);
                cols.add(inputElements[4].value);
                cols.add(inputElements[7].value);
                if (cols.size === 3) {
                    cols.clear();
                } else {
                    hasWon = false;
                }
            } else if (j === 2) {
                cols.add(inputElements[2].value);
                cols.add(inputElements[5].value);
                cols.add(inputElements[8].value);
                if (cols.size === 3) {
                    cols.clear();
                } else {
                    hasWon = false;
                }
            }
        }

        if (hasWon === true) {
            table.style.border = '2px solid green';
            paragraph.style.color = 'green';
            paragraph.textContent = 'You solve it! Congratulations!'
        } else {
            table.style.border = '2px solid red';
            paragraph.style.color = 'red';
            paragraph.textContent = 'NOP! You are not done yet...'
        }
    });

    clearBtn.addEventListener('click', (e) => {
        let inputElementsToClear = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.querySelectorAll('tbody tr td input'));

        inputElementsToClear.forEach(el => {
            el.value = '';
        })

        paragraph = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('#check p');
        table = e.target.parentNode.parentNode.parentNode.parentNode;
        table.style.border = '';
        paragraph.textContent = '';
    })
}