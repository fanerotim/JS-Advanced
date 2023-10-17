window.addEventListener('load', solution);

function solution() {

    let fullNameElement = document.getElementById('fname');
    let emailElement = document.getElementById('email');
    let numberElement = document.getElementById('phone');
    let addressElement = document.getElementById('address');
    let postCodeElement = document.getElementById('code');

    let submitBtn = document.getElementById('submitBTN');
    let editBtn = document.getElementById('editBTN');
    let continueBtn = document.getElementById('continueBTN');

    let infoUl = document.getElementById('infoPreview');
    let divBlock = document.getElementById('block');
    let h3Heading = document.createElement('h3');
    h3Heading.textContent = 'Thank you for your reservation!';

    let fullNameValue;
    let emailValue;
    let numberValue;
    let addressValue;
    let postCodeValue;

    let nameLi = document.createElement('li')
    let emailLi = document.createElement('li')
    let numberLi = document.createElement('li')
    let addressLi = document.createElement('li')
    let postCodeLi = document.createElement('li')

    submitBtn.addEventListener('click', () => {
        if (fullNameElement.value === '' || emailElement.value === '') {
            return
        }

        fullNameValue = fullNameElement.value;
        emailValue = emailElement.value;
        numberValue = numberElement.value;
        addressValue = addressElement.value;
        postCodeValue = postCodeElement.value;

        nameLi.textContent = `Full Name: ${fullNameElement.value}`;
        emailLi.textContent = `Email: ${emailElement.value}`;
        numberLi.textContent = `Phone Number: ${numberElement.value}`;
        addressLi.textContent = `Address: ${addressElement.value}`;
        postCodeLi.textContent = `Postal Code: ${postCodeElement.value}`;

        infoUl.appendChild(nameLi);
        infoUl.appendChild(emailLi);

        console.log(numberValue, addressValue, postCodeValue);

        if (numberValue !== '') {
            infoUl.appendChild(numberLi);
        }

        if (addressValue !== '') {
            infoUl.appendChild(addressLi);
        }

        if (postCodeValue !== '') {
            infoUl.appendChild(postCodeLi);
        }

        submitBtn.setAttribute('disabled', true);

        fullNameElement.value = '';
        emailElement.value = '';
        numberElement.value = '';
        addressElement.value = '';
        postCodeElement.value = '';

        editBtn.removeAttribute('disabled', true);
        continueBtn.removeAttribute('disabled', true);
    });

    editBtn.addEventListener('click', () => {
        fullNameElement.value = fullNameValue;
        emailElement.value = emailValue;
        numberElement.value = numberValue;
        addressElement.value = addressValue;
        postCodeElement.value = postCodeValue;

        submitBtn.removeAttribute('disabled', true);
        editBtn.setAttribute('disabled', true);
        continueBtn.setAttribute('disabled', true);

        infoUl.innerHTML = '';
    });

    continueBtn.addEventListener('click', () => {
        divBlock.innerHTML = '';
        divBlock.appendChild(h3Heading);
    })
}
