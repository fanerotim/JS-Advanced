window.addEventListener('load', solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let numberOfPeopleElement = document.getElementById('people-count');
    let fromDateElement = document.getElementById('from-date');
    let numberOfDaysElement = document.getElementById('days-count');

    let nextBtn = document.getElementById('next-btn');

    let infoListUlElement = document.querySelector('.ticket-info-list');

    let liElement = document.createElement('li');
    liElement.classList.add('ticket');

    let articleElement = document.createElement('article');

    let h3NameHeading = document.createElement('h3');
    let fromDateParagraph = document.createElement('p');
    let numberOfDaysParagraph = document.createElement('p');
    let numberOfPeopleParagraph = document.createElement('p');

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    let continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';

    let h3NameHeadingValue;
    let firstNameValue;
    let lastNameValue;
    let fromDateValue;
    let daysCountValue;
    let peopleCountValue;

    let confirmBtn;
    let cancelBtn;

    let confirmTicketUl = document.querySelector('.confirm-ticket');

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (firstNameElement.value === '' || lastNameElement.value === '' ||
            numberOfPeopleElement.value === '' || fromDateElement.value === '' ||
            numberOfDaysElement.value === '') {
            return;
        }

        h3NameHeadingValue = `${firstNameElement.value} ${lastNameElement.value}`
        firstNameValue = firstNameElement.value;
        lastNameValue = lastNameElement.value;
        fromDateValue = fromDateElement.value;
        daysCountValue = numberOfDaysElement.value;
        peopleCountValue = numberOfPeopleElement.value;

        h3NameHeading.textContent = `Name: ${h3NameHeadingValue}`;
        fromDateParagraph.textContent = `From date: ${fromDateValue}`;
        numberOfDaysParagraph.textContent = `For ${daysCountValue} days`;
        numberOfPeopleParagraph.textContent = `For ${peopleCountValue} people`;

        articleElement.appendChild(h3NameHeading);
        articleElement.appendChild(fromDateParagraph);
        articleElement.appendChild(numberOfDaysParagraph);
        articleElement.appendChild(numberOfPeopleParagraph);

        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);

        infoListUlElement.appendChild(liElement);

        firstNameElement.value = '';
        lastNameElement.value = '';
        numberOfPeopleElement.value = '';
        fromDateElement.value = '';
        numberOfDaysElement.value = '';

        nextBtn.setAttribute('disabled', true);
    });

    editBtn.addEventListener('click', () => {
        firstNameElement.value = firstNameValue;
        lastNameElement.value = lastNameValue;
        numberOfPeopleElement.value = peopleCountValue;
        fromDateElement.value = fromDateValue;
        numberOfDaysElement.value = daysCountValue;

        infoListUlElement.removeChild(liElement);
        nextBtn.removeAttribute('disabled', true);
    });

    continueBtn.addEventListener('click', () => {
        let confirmLiElement = liElement.cloneNode(true);
        infoListUlElement.removeChild(liElement);

        confirmLiElement.classList.remove('ticket');
        confirmLiElement.classList.add('ticket-content');
        
        confirmBtn = confirmLiElement.querySelector('.edit-btn');
        confirmBtn.classList.remove('edit-btn');
        confirmBtn.classList.add('confirm-btn');
        confirmBtn.textContent = 'Confirm';

        cancelBtn = confirmLiElement.querySelector('.continue-btn');
        cancelBtn.classList.remove('continue-btn');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';

        confirmTicketUl.appendChild(confirmLiElement);

        cancelBtn.addEventListener('click', () => {
            confirmTicketUl.removeChild(confirmLiElement);
            nextBtn.removeAttribute('disabled', true);
        });

        confirmBtn.addEventListener('click', () => {
            let bodyElement = document.getElementById('body');
            let mainDivElement = document.getElementById('main');

            bodyElement.removeChild(mainDivElement);

            let h1Element = document.createElement('h1');
            h1Element.setAttribute('id', 'thank-you');
            h1Element.textContent = 'Thank you, have a nice day!';

            let backBtn = document.createElement('button');
            backBtn.setAttribute('id', 'back-btn');
            backBtn.textContent = 'Back';

            bodyElement.appendChild(h1Element);
            bodyElement.appendChild(backBtn);

            backBtn.addEventListener('click', () => {
                location.reload();
            })
        })
    });   
}




