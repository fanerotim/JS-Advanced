window.addEventListener("load", solve);

function solve() {

    let [makeElement, modelElement, productionYearElement, originalCostElement, sellingPriceElement] = document.querySelectorAll('input');
    let fuelTypeElement = document.getElementById('fuel');

    let tableBodyElement = document.getElementById('table-body');
    let carsListUlElement = document.getElementById('cars-list');

    let publishBtn = document.getElementById('publish');
    let totalProfit = 0.00;

    publishBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let trContainer = document.createElement('tr');
        trContainer.classList.add('row');

        let makeTd = document.createElement('td');
        let modelTd = document.createElement('td');
        let yearTd = document.createElement('td');
        let fuelTd = document.createElement('td');
        let originalPriceTd = document.createElement('td');
        let sellingPriceTd = document.createElement('td');
        let buttonsContainerTd = document.createElement('td');

        let editBtn = document.createElement('button');
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit')
        editBtn.textContent = 'Edit';

        let sellBtn = document.createElement('button');
        sellBtn.classList.add('action-btn');
        sellBtn.classList.add('sell');
        sellBtn.textContent = 'Sell';

        buttonsContainerTd.appendChild(editBtn);
        buttonsContainerTd.appendChild(sellBtn);

        if (makeElement.value === '' || modelElement.value === '' ||
            productionYearElement.value === '' || fuelTypeElement.value === '' ||
            originalCostElement.value === '' || sellingPriceElement.value === '' ||
            Number(originalCostElement.value) >= Number(sellingPriceElement.value)) {
            return;
        }

        makeTd.textContent = makeElement.value;
        modelTd.textContent = modelElement.value;
        yearTd.textContent = productionYearElement.value;
        fuelTd.textContent = fuelTypeElement.value;
        originalPriceTd.textContent = originalCostElement.value;
        sellingPriceTd.textContent = sellingPriceElement.value;

        trContainer.appendChild(makeTd)
        trContainer.appendChild(modelTd)
        trContainer.appendChild(yearTd)
        trContainer.appendChild(fuelTd)
        trContainer.appendChild(originalPriceTd)
        trContainer.appendChild(sellingPriceTd)

        trContainer.appendChild(buttonsContainerTd);
        tableBodyElement.appendChild(trContainer);

        makeElement.value = '';
        modelElement.value = '';
        productionYearElement.value = '';
        fuelTypeElement.value = '';
        originalCostElement.value = '';
        sellingPriceElement.value = '';

        editBtn.addEventListener('click', (e) => {
            makeElement.value = makeTd.textContent;
            modelElement.value = modelTd.textContent;
            productionYearElement.value = yearTd.textContent;
            fuelTypeElement.value = fuelTd.textContent;
            originalCostElement.value = originalPriceTd.textContent;
            sellingPriceElement.value = sellingPriceTd.textContent;

            tableBodyElement.removeChild(e.currentTarget.parentNode.parentNode);

        });

        sellBtn.addEventListener('click', (e) => {
            tableBodyElement.removeChild(e.currentTarget.parentNode.parentNode);
            let liElement = document.createElement('li');
            liElement.classList.add('each-list');

            let makeSpan = document.createElement('span');
            let yearSpan = document.createElement('span');
            let differnceSpan = document.createElement('span');

            makeSpan.textContent = `${makeTd.textContent} ${modelTd.textContent}`;
            yearSpan.textContent = yearTd.textContent;
            differnceSpan.textContent = sellingPriceTd.textContent - originalPriceTd.textContent;

            liElement.appendChild(makeSpan);
            liElement.appendChild(yearSpan);
            liElement.appendChild(differnceSpan);
            carsListUlElement.appendChild(liElement);

            let profitElement = document.getElementById('profit');
            totalProfit += Number(differnceSpan.textContent);
            profitElement.textContent = totalProfit.toFixed(2);
        })
    });
} 
