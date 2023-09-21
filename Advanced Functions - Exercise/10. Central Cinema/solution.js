function solve() {

    let [name, hall, ticketPrice] = document.querySelectorAll('#container input');

    let onScreenBtn = document.querySelector('#container button');
    onScreenBtn.setAttribute('type', 'button');

    let moviesUl = document.querySelector('#movies ul');
    let archiveUl = document.querySelector('#archive ul');

    onScreenBtn.addEventListener('click', () => {
        if (name.value !== '' && hall.value !== '' && ticketPrice.value !== '' && isNaN(ticketPrice.value) === false) {

            let liElement = document.createElement('li');

            let spanElement = document.createElement('span');
            spanElement.textContent = name.value;

            let strongElement = document.createElement('strong');
            strongElement.textContent = `Hall: ${hall.value}`;

            let divElement = document.createElement('div');

            let secondStrongElement = document.createElement('strong');
            secondStrongElement.textContent = Number(ticketPrice.value).toFixed(2);

            let inputElement = document.createElement('input');
            inputElement.setAttribute('placeholder', 'Tickets Sold');

            let archiveBtn = document.createElement('button');
            archiveBtn.setAttribute('type', 'button');
            archiveBtn.textContent = 'Archive';

            liElement.appendChild(spanElement);
            liElement.appendChild(strongElement);
            divElement.appendChild(secondStrongElement);
            divElement.appendChild(inputElement);
            divElement.appendChild(archiveBtn);
            liElement.appendChild(divElement);

            moviesUl.appendChild(liElement);

            name.value = '';
            hall.value = '';
            ticketPrice.value = '';

            archiveBtn.addEventListener('click', (e) => {
                let soldTickets = e.target.parentNode.querySelector('input');

                if (isNaN(soldTickets.value) === false && soldTickets.value !== '') {
                    let curTicketPrice = e.target.parentNode.querySelector('strong');
                    curTicketPrice = Number(curTicketPrice.textContent);
                    soldTickets = Number(soldTickets.value);
                    let totalPrice = (curTicketPrice * soldTickets).toFixed(2);

                    let clonedLiElement = e.target.parentNode.parentNode.cloneNode(true);

                    clonedLiElement.querySelector('div').remove();
                    clonedLiElement.querySelector('strong').textContent = `Total amount: ${totalPrice}`;
                    
                    let deleteBtn = document.createElement('button');
                    deleteBtn.setAttribute('type', 'button');
                    deleteBtn.textContent = 'Delete';
                    
                    clonedLiElement.appendChild(deleteBtn);
                    
                    archiveUl.appendChild(clonedLiElement);
                    console.log(clonedLiElement);
                    e.target.parentNode.parentNode.remove();

                    deleteBtn.addEventListener('click', (e) => {
                        e.target.parentNode.remove();
                    })

                } else {
                    return;
                }

                
            })
        } else {
            return;
        }
    })

    let clearBtn = document.querySelector('#archive button');
    clearBtn.setAttribute('type', 'button');

    clearBtn.addEventListener('click', () => {
        let liElementsArr = Array.from(document.querySelectorAll('#archive li'));
        for (let li of liElementsArr) {
            li.remove();
        }
    })
}