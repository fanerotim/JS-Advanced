window.addEventListener("load", solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let ageElement = document.getElementById('age');
    let genderElement = document.getElementById('genderSelect');
    let dishDescriptionElement = document.getElementById('task');

    let submitBtn = document.getElementById('form-btn');

    let inProgressUlElement = document.getElementById('in-progress');
    let finishedUlElement = document.getElementById('finished');

    let liElement = document.createElement('li');
    liElement.classList.add('each-line');

    let articleElement = document.createElement('article');
    let h4Heading = document.createElement('h4');
    let ageParagraph = document.createElement('p');
    let dishDescriptionParagraph = document.createElement('p');
    
    let editBtn = document.createElement('edit-btn');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    let completeBtn = document.createElement('button');
    completeBtn.classList.add('complete-btn');
    completeBtn.textContent = 'Mark as complete';
    
    let progressCountElement = document.getElementById('progress-count');
    progressCountElement.textContent = 0;

    let firstNameValue;
    let lastNameValue;
    let ageValue;
    let genderValue;
    let dishDescriptionValue;

    submitBtn.addEventListener('click', () => {

        if (firstNameElement.value === '' || lastNameElement.value === ''
            || ageElement.value === '' || dishDescriptionElement.value === '') {
            return;
        }

        h4Heading.textContent = `${firstNameElement.value} ${lastNameElement.value}`;
        ageParagraph.textContent = `${genderElement.value}, ${ageElement.value}`;
        dishDescriptionParagraph.textContent = `Dish description: ${dishDescriptionElement.value}`;

        firstNameValue = firstNameElement.value;
        lastNameValue = lastNameElement.value;
        ageValue = ageElement.value;
        genderValue = genderElement.value;
        dishDescriptionValue = dishDescriptionElement.value;

        articleElement.appendChild(h4Heading);
        articleElement.appendChild(ageParagraph);
        articleElement.appendChild(dishDescriptionParagraph);

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(completeBtn);

        inProgressUlElement.appendChild(liElement);
        progressCountElement.textContent++;

        firstNameElement.value = '';
        lastNameElement.value = '';
        ageElement.value = '';
        genderElement.value = 'Male';
        dishDescriptionElement.value = '';
    });

    editBtn.addEventListener('click', () => {
        firstNameElement.value = firstNameValue;
        lastNameElement.value = lastNameValue;
        ageElement.value = ageValue;
        genderElement.value = genderValue;
        dishDescriptionElement.value = dishDescriptionValue;

        inProgressUlElement.removeChild(liElement);
        progressCountElement.textContent--;
    });

    completeBtn.addEventListener('click', () => {
        let completeLiElement = liElement.cloneNode(true);
        let buttonToRemove = completeLiElement.querySelector('.edit-btn');
        completeLiElement.removeChild(buttonToRemove);

        let buttonToRemoveTwo = completeLiElement.querySelector('.complete-btn');
        completeLiElement.removeChild(buttonToRemoveTwo);
        
        inProgressUlElement.removeChild(liElement);
        progressCountElement.textContent--;
        finishedUlElement.appendChild(completeLiElement);
    });

    let clearBtn = document.getElementById('clear-btn');

    clearBtn.addEventListener('click', () => {
        finishedUlElement.innerHTML = '';
    })
}
