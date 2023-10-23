window.addEventListener('load', solution);

function solution() {

    let employeeElement = document.getElementById('employee');
    let categoryElement = document.getElementById('category');
    let urgencyElement = document.getElementById('urgency');
    let assignedTeamElement = document.getElementById('team');
    let descriptionElement = document.getElementById('description');

    let addBtn = document.getElementById('add-btn');

    let previewUl = document.querySelector('.preview-list');
    let pendingUl = document.querySelector('.pending-list');
    let resolvedUl = document.querySelector('.resolved-list');

    let liContainer = document.createElement('li');
    liContainer.classList.add('problem-content');

    let articleContainer = document.createElement('article');
    let employeeParagraph = document.createElement('p');
    let categoryParagraph = document.createElement('p');
    let urgencyParagraph = document.createElement('p');
    let assignedTeamParagraph = document.createElement('p');
    let descriptionParagraph = document.createElement('p');

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit';

    let continueBtn = document.createElement('button');
    continueBtn.classList.add('continue-btn');
    continueBtn.textContent = 'Continue';

    let employeeValue;
    let categoryValue;
    let urgencyValue;
    let assignedTeamValue;
    let descriptionValue;

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (employeeElement.value === '' || categoryElement.value === '' ||
            urgencyElement.value === '' || assignedTeamElement.value === ''
            || descriptionElement.value === '') {
            return;
        }

        employeeValue = employeeElement.value;
        categoryValue = categoryElement.value;
        urgencyValue = urgencyElement.value;
        assignedTeamValue = assignedTeamElement.value;
        descriptionValue = descriptionElement.value;

        employeeParagraph.textContent = `From: ${employeeValue}`;
        categoryParagraph.textContent = `Category: ${categoryValue}`;
        urgencyParagraph.textContent = `Urgency: ${urgencyValue}`;
        assignedTeamParagraph.textContent = `Assigned to: ${assignedTeamValue}`;
        descriptionParagraph.textContent = `Description: ${descriptionValue}`;

        articleContainer.appendChild(employeeParagraph);
        articleContainer.appendChild(categoryParagraph);
        articleContainer.appendChild(urgencyParagraph);
        articleContainer.appendChild(assignedTeamParagraph);
        articleContainer.appendChild(descriptionParagraph);

        liContainer.appendChild(articleContainer);
        liContainer.appendChild(editBtn);
        liContainer.appendChild(continueBtn);

        previewUl.appendChild(liContainer);

        addBtn.setAttribute('disabled', true);

        employeeElement.value = '';
        categoryElement.value = '';
        urgencyElement.value = '';
        assignedTeamElement.value = '';
        descriptionElement.value = '';
    });

    editBtn.addEventListener('click', () => {
        employeeElement.value = employeeValue;
        categoryElement.value = categoryValue;
        urgencyElement.value = urgencyValue;
        assignedTeamElement.value = assignedTeamValue;
        descriptionElement.value = descriptionValue;

        addBtn.removeAttribute('disabled', true);
        previewUl.removeChild(liContainer);
    });

    continueBtn.addEventListener('click', () => {

        let clonedLiContainer = liContainer.cloneNode(true);
        let [buttonToRemove, resolvedBtn] = clonedLiContainer.querySelectorAll('button');
        clonedLiContainer.removeChild(buttonToRemove);

        resolvedBtn.classList.remove('continue-btn');
        resolvedBtn.classList.add('resolve-btn');
        resolvedBtn.textContent = 'Resolved';

        pendingUl.appendChild(clonedLiContainer);
        previewUl.removeChild(liContainer);

        resolvedBtn.addEventListener('click', () => {
            let resolvedLiContainer = clonedLiContainer.cloneNode(true);
            let clearBtn = resolvedLiContainer.querySelector('button');
            clearBtn.classList.remove('resolve-btn');
            clearBtn.classList.add('clear-btn');
            clearBtn.textContent = 'Clear';

            resolvedUl.appendChild(resolvedLiContainer);
            pendingUl.removeChild(clonedLiContainer);

            clearBtn.addEventListener('click', () => {
                resolvedUl.removeChild(resolvedLiContainer);
                addBtn.removeAttribute('disabled', true);
            })
        });
    })
}




