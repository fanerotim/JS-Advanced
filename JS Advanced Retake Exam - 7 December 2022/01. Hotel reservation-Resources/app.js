window.addEventListener('load', solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let checkInElement = document.getElementById('date-in');
    let checkOutElement = document.getElementById('date-out');
    let numberofGuestsElement = document.getElementById('people-count');

    let nextBtn = document.getElementById('next-btn');

    let firstNameValue;
    let lastNameValue;
    let checkInDateValue;
    let checkOutDateValue;
    let numberOfGuestsValue;

    let infoUlElement = document.querySelector('.info-list');
    let confirmUlElement = document.querySelector('.confirm-list');

    let liElement = document.createElement('li');
    liElement.classList.add('reservation-content');

    let articleElement = document.createElement('article');
    let h3Heading = document.createElement('h3');
    let fromDateParagraph = document.createElement('p');
    let toDateParagraph = document.createElement('p');
    let peopleCountParagraph = document.createElement('p');

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    let continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';

    let h1Element = document.getElementById('verification');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        firstNameValue = firstNameElement.value;
        lastNameValue = lastNameElement.value;
        checkInDateValue = checkInElement.value;
        checkOutDateValue = checkOutElement.value;
        numberOfGuestsValue = numberofGuestsElement.value;

        if (firstNameValue === '' || lastNameValue === '' ||
            checkInDateValue === '' || checkOutDateValue === '' ||
            numberOfGuestsValue === '' || new Date(checkOutDateValue) < new Date(checkInDateValue)) {
            return;
        }

        h3Heading.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
        fromDateParagraph.textContent = `From date: ${checkInDateValue}`;
        toDateParagraph.textContent = `To date: ${checkOutDateValue}`;
        peopleCountParagraph.textContent = `For ${numberOfGuestsValue} people`;

        articleElement.appendChild(h3Heading);
        articleElement.appendChild(fromDateParagraph);
        articleElement.appendChild(toDateParagraph);
        articleElement.appendChild(peopleCountParagraph);

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        infoUlElement.appendChild(liElement);

        nextBtn.setAttribute('disabled', true);

        firstNameElement.value = '';
        lastNameElement.value = '';
        checkInElement.value = '';
        checkOutElement.value = '';
        numberofGuestsElement.value = '';
    });

    editBtn.addEventListener('click', () => {

        firstNameElement.value = firstNameValue;
        lastNameElement.value = lastNameValue;
        checkInElement.value = checkInDateValue;
        checkOutElement.value = checkOutDateValue;
        numberofGuestsElement.value = numberOfGuestsValue;

        nextBtn.removeAttribute('disabled', true);
        infoUlElement.removeChild(liElement);
    });

    continueBtn.addEventListener('click', () => {
        let confirmLiElement = liElement.cloneNode(true);

        let confirmBtn = confirmLiElement.querySelector('.edit-btn');
        confirmBtn.classList.remove('edit-btn');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';

        let cancelBtn = confirmLiElement.querySelector('.continue-btn');
        cancelBtn.classList.remove('continue-btn');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';

        infoUlElement.removeChild(liElement);
        confirmUlElement.appendChild(confirmLiElement);

        confirmBtn.addEventListener('click', () => {
            h1Element.classList.remove('reservation-cancelled');
            h1Element.classList.add('reservation-confirmed');
            h1Element.textContent = 'Confirmed.';

            confirmUlElement.removeChild(confirmLiElement);
            nextBtn.removeAttribute('disabled', true);
        });

        cancelBtn.addEventListener('click', () => {
            confirmUlElement.removeChild(confirmLiElement);
            nextBtn.removeAttribute('disabled', true);
            h1Element.classList.remove('reservation-confirmed');
            h1Element.classList.add('reservation-cancelled');
            h1Element.textContent = 'Cancelled.';
        })
    })
}





