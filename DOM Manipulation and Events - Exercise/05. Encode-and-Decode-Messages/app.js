function encodeAndDecodeMessages() {

    let encodeBtn = document.querySelector('#main div:nth-child(1) button');
    let decodeBtn = document.querySelector('#main div:nth-child(2) button');

    encodeBtn.addEventListener('click', (e) => {
        let textArea = e.target.parentNode.parentNode.querySelector('#main div:nth-child(1) textarea');
        let receiver = e.target.parentNode.parentNode.querySelector('#main div:nth-child(2) textarea');
        let encodedMessage = '';

        for (let letter of textArea.value) {
            encodedMessage += String.fromCharCode(letter.charCodeAt() + 1);
        }
        receiver.value = encodedMessage;
        textArea.value = '';
        encodedMessage = '';
    });
    
    let decodedMessage = '';

    decodeBtn.addEventListener('click', (e) => {
        let messageToDecode = e.target.parentNode.parentNode.querySelector('#main div:nth-child(2) textarea');
       
        for (let letter of messageToDecode.value) {
            decodedMessage += String.fromCharCode(letter.charCodeAt() - 1);
        }
        
        e.target.parentNode.parentNode.querySelector('#main div:nth-child(2) textarea').value = decodedMessage;
        decodedMessage = '';
    })
}