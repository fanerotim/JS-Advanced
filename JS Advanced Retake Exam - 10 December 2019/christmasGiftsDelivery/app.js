function solution() {
    
    let giftElement = document.querySelector('.card input');    
    let addBtn = document.querySelector('.card button');

    let listGiftsUl = document.querySelector('.container section:nth-child(2) ul');
    let sendGiftsUl = document.querySelector('.container section:nth-child(3) ul')
    let discardedGiftsUl = document.querySelector('.container section:nth-child(4) ul')
    
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

        listGiftsUl.appendChild(liContainer);
        giftElement.value = '';

        console.log(listGiftsUl);
        let sortedGifts = Array.from(listGiftsUl.children).sort((a, b) => a.textContent.localeCompare(b.textContent));

        for (let gift of sortedGifts) {
            listGiftsUl.appendChild(gift);
        }

        sendBtn.addEventListener('click', (e) => {
            let currentGift = e.currentTarget.parentNode.cloneNode(true);
            
            let [btnToRemoveOne, btnToRemoveTwo] = currentGift.querySelectorAll('button');
            currentGift.removeChild(btnToRemoveOne);
            currentGift.removeChild(btnToRemoveTwo);
            
            listGiftsUl.removeChild(e.currentTarget.parentNode);
            sendGiftsUl.appendChild(currentGift);
        });

        discardBtn.addEventListener('click', (e) => {
            let curGift = e.currentTarget.parentNode.cloneNode(true);

            let [btnToDeleteOne, btnToDeleteTwo] = curGift.querySelectorAll('button');
            curGift.removeChild(btnToDeleteOne);
            curGift.removeChild(btnToDeleteTwo);

            listGiftsUl.removeChild(e.currentTarget.parentNode);
            discardedGiftsUl.appendChild(curGift);
        })
    })
}