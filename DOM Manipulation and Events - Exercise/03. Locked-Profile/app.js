function lockedProfile() {

    let usersRadioButtons = document.querySelectorAll('[type="radio"]');
    usersRadioButtons = Array.from(usersRadioButtons);

    usersRadioButtons.forEach(button => {

        button.addEventListener('click', (e) => {
            let curButton = e.target.parentNode.querySelector('button');

            if (e.target.value === 'lock') {
                curButton.disabled = true;
            } else {
                curButton.disabled = false;
            }
        })
    });

    let buttons = document.querySelectorAll('button');
    buttons = Array.from(buttons);

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            let isLocked = e.target.parentNode.querySelectorAll('[type="radio"]');

            if (isLocked[0].checked == false) {
                if (e.target.parentNode.children[10].textContent === 'Show more') {
                    e.target.parentNode.children[9].style.display = 'block';
                    e.target.parentNode.children[10].textContent = 'Hide it';
                } else {
                    e.target.parentNode.children[10].textContent = 'Show more'
                    e.target.parentNode.children[9].style.display = 'none';
                }
            }
        })
    })
}