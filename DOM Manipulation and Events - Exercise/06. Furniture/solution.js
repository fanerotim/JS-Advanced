function solve() {

    let generateBtn = document.querySelector('#exercise button:nth-of-type(1)');
    let buyBtn = document.querySelector('#exercise button:nth-of-type(2)');
    
    generateBtn.addEventListener('click', (e) => {
        let inputField = e.target.parentNode.querySelector('textarea:nth-of-type(1)');
        let inputData = JSON.parse(inputField.value);
        
        inputData.forEach(obj => {
            let additionalTr = document.createElement('tr');
            let imgTd = document.createElement('td');
            let imgElement = document.createElement('img');
            imgElement.src = obj.img;
            imgTd.appendChild(imgElement);
            additionalTr.appendChild(imgTd);
            
            let nameTd = document.createElement('td');
            let nameP = document.createElement('p');
            nameP.textContent = obj.name;
            nameTd.appendChild(nameP);
            additionalTr.appendChild(nameTd);

            let priceTd = document.createElement('td');
            let priceP = document.createElement('p');
            priceP.textContent = obj.price;
            priceTd.appendChild(priceP);
            additionalTr.appendChild(priceTd);

            let decTd = document.createElement('td');
            let decP = document.createElement('p');
            decP.textContent = obj.decFactor;
            decTd.appendChild(decP);
            additionalTr.appendChild(decTd);

            let inputTd = document.createElement('td');
            let inputElement = document.createElement('input');
            inputElement.type = 'checkbox';
            inputTd.appendChild(inputElement);
            additionalTr.appendChild(inputTd);

            let tBody = document.querySelector('tbody');
            tBody.appendChild(additionalTr);
        });
    });
 
    let checkedConter = 0;
    let totalPrice = 0;
    let boughtItems = [];
    let totalDec = 0;

    buyBtn.addEventListener('click', (e) => {
        let inputElements = document.querySelectorAll('input');
        inputElements = Array.from(inputElements);

        inputElements.forEach(input => {
            if (input.checked === true) {
                checkedConter++;
                boughtItems.push(input.parentNode.parentNode.children[1].textContent);
                totalPrice += Number(input.parentNode.parentNode.children[2].textContent);
                totalDec += Number(input.parentNode.parentNode.children[3].textContent);
            }
        })
    
        let outputTextarea = document.querySelector('textarea:last-of-type');
        outputTextarea.value = `Bought furniture: ${boughtItems.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalDec / checkedConter}`
    })
}