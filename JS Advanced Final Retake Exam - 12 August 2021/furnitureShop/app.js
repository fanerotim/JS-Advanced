window.addEventListener('load', solve);

function solve() {
    
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');

    let addBtn = document.getElementById('add');

    let furnitureList = document.getElementById('furniture-list');

    let modelValue;
    let priceValue;
    let yearValue;
    let descriptionValue;

    let totalPriceElement = document.querySelector('.total-price');
    let totalPrice = 0;

    addBtn.addEventListener('click', (e) => {

        e.preventDefault();

        if (modelElement.value === '' || yearElement.value === '' || descriptionElement.value === '' 
        || priceElement.value === '' || Number(yearElement.value) < 0 || Number(priceElement.value) < 0) {
            return;
        } 

        //saving input values in new variables

        modelValue = modelElement.value;
        priceValue = Number(priceElement.value);
        yearValue = yearElement.value;
        descriptionValue = descriptionElement.value;

        //Creating the strcuture of each furniture
        let trInfoContainer = document.createElement('tr');
        trInfoContainer.classList.add('info');

        let modelTd = document.createElement('td');
        let priceTd = document.createElement('td');
        
        let tdBtnContainer = document.createElement('td');

        let moreBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = 'More Info';

        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';

        let trHideContainer = document.createElement('tr');
        trHideContainer.classList.add('hide');

        let yearTd = document.createElement('td');
        let descriptionTd = document.createElement('td');
        descriptionTd.setAttribute('colspan', '3');

        //attaching input to the new furniture element 

        modelTd.textContent = modelValue;
        priceTd.textContent = priceValue.toFixed(2);

        trInfoContainer.appendChild(modelTd);
        trInfoContainer.appendChild(priceTd);
        tdBtnContainer.appendChild(moreBtn);
        tdBtnContainer.appendChild(buyBtn);
        trInfoContainer.appendChild(tdBtnContainer);

        yearTd.textContent = `Year: ${yearValue}`;
        descriptionTd.textContent = `Description: ${descriptionValue}`;

        trHideContainer.appendChild(yearTd);
        trHideContainer.appendChild(descriptionTd);

        furnitureList.appendChild(trInfoContainer);
        furnitureList.appendChild(trHideContainer);

        //clearing input fields
        modelElement.value = '';
        yearElement.value = '';
        descriptionElement.value = '';
        priceElement.value = '';

        moreBtn.addEventListener('click', (e) => {
            
            if (moreBtn.textContent === 'More Info') {
                let curItem = e.currentTarget.parentNode.parentNode.nextElementSibling;
                curItem.style.display = 'contents';
                e.currentTarget.textContent = 'Less Info';
            } else if (moreBtn.textContent === 'Less Info') {
                let curItem = e.currentTarget.parentNode.parentNode.nextElementSibling;
                curItem.style.display = 'none';
                e.currentTarget.textContent = 'More Info';
            }  
        });

        buyBtn.addEventListener('click', (e) => {
            
            let curPrice = e.currentTarget.parentNode.parentNode.querySelector('td:nth-child(2)').textContent;
            totalPrice += Number(curPrice);
            
            totalPriceElement.textContent = totalPrice.toFixed(2);
            furnitureList.removeChild(e.currentTarget.parentNode.parentNode);
        })

    })
}
