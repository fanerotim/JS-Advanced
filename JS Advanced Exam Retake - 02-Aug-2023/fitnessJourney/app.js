window.addEventListener('load', solve);

function solve() {
    let nameElement = document.getElementById('name');
    let emailElement = document.getElementById('email');
    let contactNumElement = document.getElementById('contact-number');
    let classTypeElement = document.getElementById('class-type');
    let classTimeElement = document.getElementById('class-time');

    let nextBtnElement = document.getElementById('next-btn');

    let ulElement = document.querySelector('.class-info');

    nextBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        if (nameElement.value !== '' && emailElement.value !== ''
            && contactNumElement.value !== '' && classTypeElement.value !== '' &&
            classTimeElement.value !== '') {
            
                let liElement = document.createElement('li');
                liElement.classList.add('info-item');
                
                let articleItem = document.createElement('article');
                articleItem.classList.add('personal-info');

                let nameParagraph = document.createElement('p');
                nameParagraph.textContent = nameElement.value;

                let emailParagraph = document.createElement('p');
                emailParagraph.textContent = emailElement.value;

                let contactNumParagraph = document.createElement('p');
                contactNumParagraph.textContent = contactNumElement.value;

                let classTypeParagraph = document.createElement('p');
                classTypeParagraph.textContent = classTypeElement.value;

                let classTimeParagraph = document.createElement('p');
                classTimeParagraph.textContent = classTimeElement.value;

                articleItem.appendChild(nameParagraph);
                articleItem.appendChild(emailParagraph);
                articleItem.appendChild(contactNumParagraph);
                articleItem.appendChild(classTypeParagraph);
                articleItem.appendChild(classTimeParagraph);

                liElement.appendChild(articleItem);
                
                let editBtn = document.createElement('button');
                editBtn.classList.add('edit-btn');
                editBtn.textContent = 'Edit';

                let continueBtn = document.createElement('button');
                continueBtn.classList.add('continue-btn');
                continueBtn.textContent = 'Continue';

                liElement.appendChild(editBtn);
                liElement.appendChild(continueBtn);

                ulElement.appendChild(liElement);
                

                nextBtnElement.setAttribute('disabled', true);
                nameElement.value = '';
                emailElement.value = '';
                contactNumElement.value = '';
                classTypeElement.value = '';
                classTimeElement.value = '';


            editBtn.addEventListener('click', () => {
                nameElement.value = nameParagraph.textContent;
                emailElement.value = emailParagraph.textContent;
                contactNumElement.value = contactNumParagraph.textContent;
                classTypeElement.value = classTypeParagraph.textContent;
                classTimeElement.value = classTimeParagraph.textContent;

                nextBtnElement.removeAttribute('disabled', true);
                ulElement.removeChild(liElement);
            });

            continueBtn.addEventListener('click', () => {
                let confirmLiElement = liElement.cloneNode(true);
                confirmLiElement.classList.remove('info-item');
                confirmLiElement.classList.add('continue-info');
                console.log(confirmLiElement);
                let cancelBtn = confirmLiElement.querySelector('.edit-btn');
                cancelBtn.classList.remove('edit-btn');
                cancelBtn.classList.add('cancel-btn');
                cancelBtn.textContent = 'Cancel';

                let confirmBtn = confirmLiElement.querySelector('.continue-btn');
                confirmBtn.classList.remove('continue-btn');
                confirmBtn.classList.add('confirm-btn');
                confirmBtn.textContent = 'Confirm';

                ulElement.removeChild(liElement);

                let confirmUlElement = document.querySelector('.confirm-class');
                confirmUlElement.appendChild(confirmLiElement);

                cancelBtn.addEventListener('click', () => {
                    confirmUlElement.removeChild(confirmLiElement);
                    nextBtnElement.removeAttribute('disabled', true);
                });

                confirmBtn.addEventListener('click', () => {
                    let mainDivElement = document.getElementById('main');
                    let bodyElement = document.getElementById('body');

                    let h1Element = document.createElement('h1');
                    h1Element.setAttribute('id', 'thank-you');
                    h1Element.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';

                    let doneBtn = document.createElement('button');
                    doneBtn.setAttribute('id', 'done-btn');
                    doneBtn.textContent = 'Done';

                    bodyElement.removeChild(mainDivElement);
                    bodyElement.appendChild(h1Element);
                    bodyElement.appendChild(doneBtn);

                    doneBtn.addEventListener('click', () => {
                        location.reload();
                    })
                })
            })
        } else {
            return;
        }
    })
}




