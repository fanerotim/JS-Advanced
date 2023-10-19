function solve() {
    
    let taskElement = document.getElementById('task');
    let descriptionElement = document.getElementById('description');
    let dueDateElement = document.getElementById('date');

    let addBtn = document.getElementById('add');

    let taskValue;
    let descriptionValue;
    let dueDateValue;

    let openContainer = document.querySelector('.wrapper section:nth-child(2) div:nth-child(2)');
    let inProgressContainer = document.getElementById('in-progress');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (taskElement.value === '' || descriptionElement.value === '' || dueDateElement.value === '') {
            return;
        }

        taskValue = taskElement.value;
        descriptionValue = descriptionElement.value;
        dueDateValue = dueDateElement.value;

        let articleContainer = document.createElement('article');
        let h3Heading = document.createElement('h3');
        h3Heading.textContent = taskValue;
        let descriptionParagraph = document.createElement('p');
        descriptionParagraph.textContent = `Description: ${descriptionValue}`;
        let dueDateParagraph = document.createElement('p');
        dueDateParagraph.textContent = `Due Date: ${dueDateValue}`;

        let buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('flex');

        let startBtn = document.createElement('button');
        startBtn.classList.add('green');
        startBtn.textContent = 'Start';

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('red');
        deleteBtn.textContent = 'Delete';

        buttonsContainer.appendChild(startBtn);
        buttonsContainer.appendChild(deleteBtn);

        articleContainer.appendChild(h3Heading);
        articleContainer.appendChild(descriptionParagraph);
        articleContainer.appendChild(dueDateParagraph);
        articleContainer.appendChild(buttonsContainer);

        openContainer.appendChild(articleContainer);

        taskElement.value = '';
        descriptionElement.value = '';
        dueDateElement.value = '';

        startBtn.addEventListener('click', (e) => {
            let curArticle = e.currentTarget.parentNode.parentNode.cloneNode(true);
            openContainer.removeChild(e.currentTarget.parentNode.parentNode);

            let buttonToRemove = curArticle.querySelector('.green');
            let btnContainer = curArticle.querySelector('.flex');

            let finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';

            btnContainer.removeChild(buttonToRemove);
            btnContainer.appendChild(finishBtn);
            inProgressContainer.appendChild(curArticle);

            let deleteButton = curArticle.querySelector('.red');

            deleteButton.addEventListener('click', (e) => {
                inProgressContainer.removeChild(e.currentTarget.parentNode.parentNode);
            });

            finishBtn.addEventListener('click', (e) => {
                let finishedArticle = e.currentTarget.parentNode.parentNode.cloneNode(true);
                inProgressContainer.removeChild(e.currentTarget.parentNode.parentNode);

                let buttonsContainer = finishedArticle.querySelector('.flex');
                finishedArticle.removeChild(buttonsContainer);

                let completeContainer = document.querySelector('.wrapper section:nth-child(4) div:nth-child(2)');
                completeContainer.appendChild(finishedArticle);
            })
        });

        deleteBtn.addEventListener('click', (e) => {
            openContainer.removeChild(e.currentTarget.parentNode.parentNode);
            
        })
    }) 
}