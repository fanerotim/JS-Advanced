function solution() {
    
    let giftElement = document.querySelector('.card input');

    let giftsListUl = document.querySelector('.card ul');
    let sentGiftsUl = document.querySelector('.card:nth-child(3) ul');
    let discardedGiftsUl = document.querySelector('.card:nth-child(4) ul');
    
    let addBtn = document.querySelector('.card button');

    addBtn.addEventListener('click', () => {
        
        let liContainer = document.createElement('li');
        liContainer.classList.add('gift');
        liContainer.textContent = giftElement.value;

        let sendBtn = document.createElement('button');
        sendBtn.setAttribute('id', 'sendButton');
        sendBtn.textContent = 'Send';

        let discardBtn = document.createElement('button');
        discardBtn.setAttribute('id', 'discardButton');
        discardBtn.textContent = 'Discard';

        liContainer.appendChild(sendBtn);
        liContainer.appendChild(discardBtn);

        giftsListUl.appendChild(liContainer);

        let sortedGifts = Array.from(giftsListUl.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
        
        for (let gift of sortedGifts) {
            giftsListUl.appendChild(gift);
        }

        giftElement.value = '';

        sendBtn.addEventListener('click', (e) => {

            let currentLiItem = e.currentTarget.parentNode;
            let clonedLiItem = currentLiItem.cloneNode(true);

            let buttonToRemove = clonedLiItem.querySelector('#sendButton');
            let secondButtonToRemove = clonedLiItem.querySelector('#discardButton')
            clonedLiItem.removeChild(buttonToRemove);
            clonedLiItem.removeChild(secondButtonToRemove);
     
            giftsListUl.removeChild(currentLiItem);
            sentGiftsUl.appendChild(clonedLiItem);
        });

        discardBtn.addEventListener('click', (e) => {
            let currentLiItem = e.currentTarget.parentNode;
            let clonedLiItem = currentLiItem.cloneNode(true);

            let buttonToRemove = clonedLiItem.querySelector('#sendButton');
            let secondButtonToRemove = clonedLiItem.querySelector('#discardButton')
            clonedLiItem.removeChild(buttonToRemove);
            clonedLiItem.removeChild(secondButtonToRemove);
     
            giftsListUl.removeChild(currentLiItem);
            discardedGiftsUl.appendChild(clonedLiItem);
        })
    })
    
}