function attachEventsListeners() {

    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
    let buttonsArr = [daysBtn, hoursBtn, minutesBtn, secondsBtn];

    buttonsArr.forEach(button => {

        button.addEventListener('click', (e) => {
            let daysInput = e.target.parentNode.parentNode.children[1].children[1];
            let hoursInput = e.target.parentNode.parentNode.children[2].children[1];
            let minutesInput = e.target.parentNode.parentNode.children[3].children[1];
            let secondsInput = e.target.parentNode.parentNode.children[4].children[1];

            let clickedButton = e.target.id;
            
            switch (clickedButton) {
                case 'daysBtn':
                    hoursInput.value = Number(daysInput.value) * 24;
                    minutesInput.value = Number(daysInput.value) * 1440;
                    secondsInput.value = Number(daysInput.value) * 86400;
                    break;
                case 'hoursBtn':
                    daysInput.value = Number(hoursInput.value) / 24;
                    minutesInput.value = Number(hoursInput.value) * 60;
                    secondsInput.value = Number(hoursInput.value) * 3600;
                    break;
                case 'minutesBtn':
                    daysInput.value = Number(minutesInput.value) / 1440;
                    hoursInput.value = Number(minutesInput.value) / 60;
                    secondsInput.value = Number(minutesInput.value) * 60;
                    break
                case 'secondsBtn':
                    daysInput.value = Number(secondsInput.value) / 86400;
                    hoursInput.value = Number(secondsInput.value) / 3600;
                    minutesInput.value = Number(secondsInput.value) / 60;
                    break;
            }
        })
    })
}