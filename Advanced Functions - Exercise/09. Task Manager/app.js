function solve() {

    let addBtn = document.getElementById('add');
    addBtn.setAttribute('type', 'button');

    let task = document.getElementById('task');
    let description = document.getElementById('description');
    let date = document.getElementById('date');

    let sectionsArr = Array.from(document.querySelectorAll('section'));

    let openContainer = sectionsArr[1].querySelector('div:nth-of-type(2)');
    let progressContainer = sectionsArr[2].querySelector('div:nth-of-type(2)');
    let completeContainer = sectionsArr[3].querySelector('div:nth-of-type(2)');

    let articleElement;
    let btnsDiv;
    let startBtn;
    let deleteBtn;

    addBtn.addEventListener('click', () => {

        if (date.value !== '' && description.value !== '' && task.value !== '') {

            articleElement = document.createElement('article');

            let h3Element = document.createElement('h3');
            h3Element.textContent = task.value;

            let firstParagraph = document.createElement('p');
            firstParagraph.textContent = `Description: ${description.value}`;

            let secondParagraph = document.createElement('p');
            secondParagraph.textContent = `Due Date: ${date.value}`;

            btnsDiv = document.createElement('div');
            btnsDiv.className = 'flex';

            startBtn = document.createElement('button');
            startBtn.className = 'green';
            startBtn.textContent = 'Start';

            deleteBtn = document.createElement('button');
            deleteBtn.className = 'red';
            deleteBtn.textContent = 'Delete'

            articleElement.appendChild(h3Element);
            articleElement.appendChild(firstParagraph);
            articleElement.appendChild(secondParagraph);
            articleElement.appendChild(btnsDiv);
            btnsDiv.appendChild(startBtn);
            btnsDiv.appendChild(deleteBtn);
            openContainer.appendChild(articleElement);
        } else {
            return;
        }

        startBtn.addEventListener('click', (e) => {

            let clonedArticle = e.target.parentNode.parentNode.cloneNode(true);
            let secondDeleteBtn = clonedArticle.querySelector('button:nth-of-type(1)')
            secondDeleteBtn.className = 'red';
            secondDeleteBtn.textContent = 'Delete';

            let finishBtn = clonedArticle.querySelector('button:nth-of-type(2)')
            finishBtn.className = 'orange';
            finishBtn.textContent = 'Finish';
            progressContainer.appendChild(clonedArticle);

            e.target.parentNode.parentNode.remove();

            secondDeleteBtn.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.remove();
            })

            finishBtn.addEventListener('click', (e) => {
                let completedCourse = e.target.parentNode.parentNode.cloneNode(true);
                completedCourse.querySelector('.flex').remove();
                completeContainer.appendChild(completedCourse);
                e.target.parentNode.parentNode.remove();

            })
        })

        deleteBtn.addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove();
        })
    });
}