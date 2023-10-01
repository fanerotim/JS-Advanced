function validate() {
    
    let usernamePattern = /^[A-Za-z0-9]{3,20}$/g;
    // let emailPattern = /@[\.]+/g;
    // let emailPattern = /\w*\.*\w+@\w+\.\w+[\.]*\w*/g;
    let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
    let passwordPattern = /^[A-Za-z0-9_]{5,15}$/g;

    let submitBtn = document.getElementById('submit');
    
    let usernameElement = document.getElementById('username');
    let emailElement = document.getElementById('email');
    let passwordElement = document.getElementById('password');
    let confirmPassElement = document.getElementById('confirm-password');
    let isCompanyElement = document.getElementById('company');
    let companyInfoElement = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
    let isCompanyValid = false;

    let validDivElement = document.getElementById('valid');

    isCompanyElement.addEventListener('change', () => {
        if (isCompanyElement.checked === true) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    })

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (!usernameElement.value.match(usernamePattern)) {
            usernameElement.style.borderColor = 'red';
        } else {
            usernameElement.style.border = 'none';
        }

        if (!emailElement.value.match(emailPattern)) {
            emailElement.style.borderColor = 'red';
        } else {
            emailElement.style.border = 'none'; 
        }

        if (!passwordElement.value.match(passwordPattern)) {
            passwordElement.style.borderColor = 'red';
            confirmPassElement.style.borderColor = 'red';
        } else {
            passwordElement.style.border = 'none';
        }

        if (isCompanyElement.checked === true) {
            if (Number(companyNumber.value) >= 1000 && Number(companyNumber.value) <= 9999) {
                isCompanyValid = true;
                companyNumber.style.border = 'none';
            } else {
                isCompanyValid = false;
                companyNumber.style.borderColor = 'red';
            }
        }

        if (isCompanyElement.checked === true) {
            if (isCompanyValid === true && usernameElement.style.borderColor !== 'red' && emailElement.style.borderColor !== 'red' && passwordElement.style.borderColor !== 'red' && confirmPassElement.style.borderColor !== 'red') {
                validDivElement.style.display = 'block';
            } else if (isCompanyValid === false || usernameElement.style.borderColor === 'red' || emailElement.style.borderColor === 'red' || passwordElement.style.borderColor === 'red' || confirmPassElement.style.borderColor === 'red') {
                validDivElement.style.display = 'none';
           }
        } else {
            if (usernameElement.style.borderColor !== 'red' && emailElement.style.borderColor !== 'red' && passwordElement.style.borderColor !== 'red' && confirmPassElement.style.borderColor !== 'red') {
                validDivElement.style.display = 'block';
            } else if (usernameElement.style.borderColor === 'red' || emailElement.style.borderColor === 'red' || passwordElement.style.borderColor === 'red' || confirmPassElement.style.borderColor === 'red') {
                validDivElement.style.display = 'none';
           }
        }        
    })
}
