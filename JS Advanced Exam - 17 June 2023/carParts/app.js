window.addEventListener('load', solve);

function solve() {

    let nextBtn = document.getElementById('next-btn');

    let carModelElement = document.getElementById('car-model');
    let carYearElement = document.getElementById('car-year');
    let partNameElement = document.getElementById('part-name');
    let partNumberElement = document.getElementById('part-number');
    let conditionElement = document.getElementById('condition');

    let infoUlElement = document.querySelector('.info-list');

    let liElement = document.createElement('li');
    liElement.classList.add('part-content');
    let articleElement = document.createElement('article');
    let carModelParagraph = document.createElement('p');
    let carYearParagraph = document.createElement('p');
    let partNameParagraph = document.createElement('p');
    let partNumberParagraph = document.createElement('p');
    let conditionParagraph = document.createElement('p');
    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    let continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';

    let carModelValue;
    let carYearValue;
    let partNameValue;
    let partNumberValue;
    let conditionValue;

    let completeImageElement;
    let completeTextParagraph;

    nextBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (carModelElement.value !== '' && carYearElement.value !== ''
            && partNameElement.value !== '' && partNumberElement.value !== ''
            && conditionElement.value !== '' && Number(carYearElement.value) >= 1980 && Number(carYearElement.value) <= 2023) {
                 
                carModelValue = carModelElement.value;
                carYearValue = carYearElement.value;
                partNameValue = partNameElement.value;
                partNumberValue = partNumberElement.value;
                conditionValue = conditionElement.value;

                carModelParagraph.textContent = `Car Model: ${carModelValue}`;
                carYearParagraph.textContent = `Car Year: ${carYearValue}`;
                partNameParagraph.textContent = `Part Name: ${partNameValue}`;
                partNumberParagraph.textContent = `Part Number: ${partNumberValue}`;
                conditionParagraph.textContent = `Condition: ${conditionValue}`;

                articleElement.appendChild(carModelParagraph);
                articleElement.appendChild(carYearParagraph);
                articleElement.appendChild(partNameParagraph);
                articleElement.appendChild(partNumberParagraph);
                articleElement.appendChild(conditionParagraph);

                liElement.appendChild(articleElement);
                liElement.appendChild(editBtn);
                liElement.appendChild(continueBtn);

                infoUlElement.appendChild(liElement);

                completeImageElement = document.getElementById('complete-img');
                completeImageElement.style.visibility = 'hidden';

                completeTextParagraph = document.getElementById('complete-text');
                completeTextParagraph.textContent = '';

                carModelElement.value = '';
                carYearElement.value = '';
                partNameElement.value = '';
                partNumberElement.value = '';
                conditionElement.value = '';
                nextBtn.setAttribute('disabled', true);

            } else {
                return;
            }
    })

    editBtn.addEventListener('click', () => {
        nextBtn.removeAttribute('disabled', true);
        carModelElement.value = carModelValue;
        carYearElement.value = carYearValue;
        partNameElement.value = partNameValue;
        partNumberElement.value = partNumberValue;
        conditionElement.value = conditionValue;

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

        let confirmUlList = document.querySelector('.confirm-list');
        confirmUlList.appendChild(confirmLiElement);

        confirmBtn.addEventListener('click', () => {
            confirmUlList.removeChild(confirmLiElement);
            nextBtn.removeAttribute('disabled', true);
            completeImageElement.style.visibility = 'visible';
            completeTextParagraph.textContent = 'Part is Ordered!';
        })

        cancelBtn.addEventListener('click', () => {
            confirmUlList.removeChild(confirmLiElement);
            nextBtn.removeAttribute('disabled', true);
        })
    })
};




