function solve() {

    let firstNameElement = document.getElementById('fname');
    let lastNameElement = document.getElementById('lname');
    let emailElement = document.getElementById('email');
    let dobElement = document.getElementById('birth');
    let positionElement = document.getElementById('position');
    let salaryElement = document.getElementById('salary');

    let hireBtn = document.getElementById('add-worker');
    hireBtn.removeAttribute('type', 'submit');
    hireBtn.setAttribute('type', 'button');

    let fNameValue;
    let lNameValue;
    let emailValue;
    let dateValue;
    let positionValue;
    let salaryValue;

    let tableBodyElement = document.getElementById('tbody');

    let totalSum = 0.00;
    let sumElement = document.getElementById('sum');

    hireBtn.addEventListener('click', (e) => {
        // e.preventDefault();

        if (firstNameElement.value === '' ||
            lastNameElement.value === '' ||
            emailElement.value === '' ||
            dobElement.value === '' ||
            positionElement.value === '' ||
            salaryElement.value === '') {
            return;
        }

        let trContainer = document.createElement('tr');
        let fNameTd = document.createElement('td');
        let lNameTd = document.createElement('td');
        let emailTd = document.createElement('td');
        let dateTd = document.createElement('td');
        let positionTd = document.createElement('td');
        let salaryTd = document.createElement('td');
        let btnContainerTd = document.createElement('td');

        let firedBtn = document.createElement('button');
        firedBtn.classList.add('fired');
        firedBtn.textContent = 'Fired';

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';

        btnContainerTd.appendChild(firedBtn);
        btnContainerTd.appendChild(editBtn);

        fNameValue = firstNameElement.value;
        lNameValue = lastNameElement.value;
        emailValue = emailElement.value;
        dateValue = dobElement.value;
        positionValue = positionElement.value;
        salaryValue = salaryElement.value;

        fNameTd.textContent = fNameValue;
        lNameTd.textContent = lNameValue;
        emailTd.textContent = emailValue;
        dateTd.textContent = dateValue;
        positionTd.textContent = positionValue;
        salaryTd.textContent = salaryValue;

        trContainer.appendChild(fNameTd);
        trContainer.appendChild(lNameTd);
        trContainer.appendChild(emailTd);
        trContainer.appendChild(dateTd);
        trContainer.appendChild(positionTd);
        trContainer.appendChild(salaryTd);
        trContainer.appendChild(btnContainerTd);

        tableBodyElement.appendChild(trContainer);

        totalSum += Number(salaryValue)
        sumElement.textContent = totalSum.toFixed(2)

        firstNameElement.value = '';
        lastNameElement.value = '';
        emailElement.value = '';
        dobElement.value = '';
        positionElement.value = '';
        salaryElement.value = '';

        editBtn.addEventListener('click', (e) => {

            firstNameElement.value = e.currentTarget.parentNode.parentNode.querySelector('td:nth-child(1)').textContent;
            lastNameElement.value = e.currentTarget.parentNode.parentNode.querySelector('td:nth-child(2)').textContent;
            emailElement.value = e.currentTarget.parentNode.parentNode.querySelector('td:nth-child(3)').textContent;
            dobElement.value = e.currentTarget.parentNode.parentNode.querySelector('td:nth-child(4)').textContent;
            positionElement.value = e.currentTarget.parentNode.parentNode.querySelector('td:nth-child(5)').textContent;
            salaryElement.value = e.currentTarget.parentNode.parentNode.querySelector('td:nth-child(6)').textContent;

            totalSum -= Number(salaryElement.value);
            sumElement.textContent = totalSum.toFixed(2);
            tableBodyElement.removeChild(e.currentTarget.parentNode.parentNode)
        });

        firedBtn.addEventListener('click', (e) => {
            let currentEmployeeSalary = e.currentTarget.parentNode.parentNode.querySelector('td:nth-child(6)').textContent;
            totalSum -= Number(currentEmployeeSalary);
            sumElement.textContent = totalSum.toFixed(2);
            tableBodyElement.removeChild(e.currentTarget.parentNode.parentNode)
        })
    })
}

solve();
