function solve() {

    let addBtn = document.getElementById('add');
    let resetBtn = document.getElementById('reset');
    
    let recipientElement = document.getElementById('recipientName');
    let titleElement = document.getElementById('title');
    let messageElement = document.getElementById('message');

    let titleValue;
    let recipientValue;
    let messageValue;

    let listUlElement = document.getElementById('list');
    let sentUlElement = document.querySelector('.sent-list');
    let deleteUlElement = document.querySelector('.delete-list');

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (recipientElement.value === '' || titleElement.value === '' || messageElement.value === '') {
            return;
        }

        titleValue = titleElement.value;
        recipientValue = recipientElement.value;
        messageValue = messageElement.value;

        let liElement = document.createElement('li');
        let titleH4Heading = document.createElement('h4');
        let recipientH4Heading = document.createElement('h4');
        let messageSpan = document.createElement('span');
        let buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('list-action');

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('type', 'submit');
        sendBtn.setAttribute('id', 'send');
        sendBtn.textContent = 'Send';

        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'submit');
        deleteBtn.setAttribute('id', 'delete');
        deleteBtn.textContent = 'Delete';

        buttonsDiv.appendChild(sendBtn);
        buttonsDiv.appendChild(deleteBtn);

        titleH4Heading.textContent = `Title: ${titleElement.value}`;
        recipientH4Heading.textContent = `Recipient Name: ${recipientElement.value}`;
        messageSpan.textContent = messageElement.value;

        liElement.appendChild(titleH4Heading);
        liElement.appendChild(recipientH4Heading);
        liElement.appendChild(messageSpan);
        liElement.appendChild(buttonsDiv);

        listUlElement.appendChild(liElement);

        recipientElement.value = '';
        titleElement.value = '';
        messageElement.value = '';

        sendBtn.addEventListener('click', (e) => {
            let sentLiItem = document.createElement('li');
            let toSpan = document.createElement('span');
            toSpan.textContent = `To: ${recipientValue}`;
            let titleSpan = document.createElement('span');
            titleSpan.textContent = `Title: ${titleValue}`;

            let buttonContainer = document.createElement('div');
            buttonContainer.classList.add('btn');

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('delete');
            deleteBtn.setAttribute('type', 'submit');
            deleteBtn.textContent = 'Delete';

            buttonContainer.appendChild(deleteBtn);
            let recipientArray = e.currentTarget.parentNode.parentNode.querySelector('h4:nth-child(2)').textContent.split(' ');
            console.log(recipientArray);
            toSpan.textContent = `To: ${recipientArray[2]}`;
            titleSpan.textContent = `${e.currentTarget.parentNode.parentNode.querySelector('h4').textContent}`;
            
            sentLiItem.appendChild(toSpan);
            sentLiItem.appendChild(titleSpan);
            sentLiItem.appendChild(buttonContainer);

            sentUlElement.appendChild(sentLiItem);
            listUlElement.removeChild(e.currentTarget.parentNode.parentNode);

            deleteBtn.addEventListener('click', (e) => {
                e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);
                let deletedElement = e.currentTarget.parentNode.parentNode.cloneNode(true);
                let divToRemove = deletedElement.querySelector('div');
                deletedElement.removeChild(divToRemove);
                deleteUlElement.appendChild(deletedElement);
            })
        }) 

        deleteBtn.addEventListener('click', (e) => {
            e.currentTarget.parentNode.parentNode.parentNode.removeChild(e.currentTarget.parentNode.parentNode);
            let clonedLiElement = e.currentTarget.parentNode.parentNode.cloneNode(true);

            let spanTo = clonedLiElement.querySelector('h4:nth-child(2)').textContent.split(' ');
            let spanToValue = spanTo.pop();
            let spanTitle = clonedLiElement.querySelector('h4').textContent;

            let lastLiItem = document.createElement('li');
            let firstSpan = document.createElement('span');
            firstSpan.textContent = `To: ${spanToValue}`;
            let secondSpan = document.createElement('span');
            secondSpan.textContent = spanTitle;
            lastLiItem.appendChild(firstSpan);
            lastLiItem.appendChild(secondSpan);

            deleteUlElement.appendChild(lastLiItem);
        })
    })

    resetBtn.addEventListener('click', (e) => {
        e.preventDefault();

        recipientElement.value = '';
        titleElement.value = '';
        messageElement.value = '';
    })
}
