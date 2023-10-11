window.addEventListener("load", solve);

function solve() {
    
    let gemNameElement = document.getElementById('gem-name');
    let colorElement = document.getElementById('color');
    let caratsElement = document.getElementById('carats');
    let priceElement = document.getElementById('price');
    let typeElement = document.getElementById('type');

    let addBtn = document.getElementById('add-btn');

    let previewUlElement = document.getElementById('preview-list');
    let collectionUlElement = document.getElementById('collection');

    let liElement = document.createElement('li');
    liElement.classList.add('gem-info');

    let articleElement = document.createElement('article');

    let gemh4Heading = document.createElement('h4');
    let colorParagraph = document.createElement('p');
    let caratsParagraph = document.createElement('p');
    let priceParagraph = document.createElement('p');
    let typeParagraph = document.createElement('p');

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save to Collection';

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Information';

    let cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-btn');
    cancelBtn.textContent = 'Cancel';

    let gemh4Value;
    let colorValue;
    let caratsValue;
    let priceValue;
    let typeValue;

    addBtn.addEventListener('click', () => {

        if (gemNameElement.value === '' || colorElement.value === '' || caratsElement.value === ''
        || priceElement.value === '' || typeElement.value === '') {
            return;
        }

        gemh4Value = gemNameElement.value;
        colorValue = colorElement.value;
        caratsValue = caratsElement.value;
        priceValue = priceElement.value;
        typeValue = typeElement.value;

        gemh4Heading.textContent = gemh4Value;
        colorParagraph.textContent = `Color: ${colorValue}`;
        caratsParagraph.textContent = `Carats: ${caratsValue}`;
        priceParagraph.textContent = `Price: ${priceValue}$`;
        typeParagraph.textContent = `Type: ${typeValue}`;

        articleElement.appendChild(gemh4Heading);
        articleElement.appendChild(colorParagraph);
        articleElement.appendChild(caratsParagraph);
        articleElement.appendChild(priceParagraph);
        articleElement.appendChild(typeParagraph);

        addBtn.setAttribute('disabled', true);
        gemNameElement.value = '';
        colorElement.value = '';
        caratsElement.value = '';
        priceElement.value = '';
        typeElement.value = '';

        liElement.appendChild(articleElement);
        liElement.appendChild(saveBtn);
        liElement.appendChild(editBtn);
        liElement.appendChild(cancelBtn);

        previewUlElement.appendChild(liElement);
    });

    editBtn.addEventListener('click', () => {
        previewUlElement.removeChild(liElement);

        gemNameElement.value = gemh4Value;
        colorElement.value = colorValue;
        caratsElement.value = caratsValue;
        priceElement.value = priceValue;
        typeElement.value = typeValue;

        addBtn.removeAttribute('disabled', true);
    })

    saveBtn.addEventListener('click', () => {
        let collectionLiItem = document.createElement('li');
        let collectionParagraph = document.createElement('p');
        collectionParagraph.classList.add('collection-item');
        collectionParagraph.textContent = `${gemh4Heading.textContent} - ${colorParagraph.textContent}/ ${caratsParagraph.textContent}/ ${priceParagraph.textContent}/ ${typeParagraph.textContent}`;
        collectionLiItem.appendChild(collectionParagraph);

        previewUlElement.removeChild(liElement);
        collectionUlElement.appendChild(collectionLiItem);

        addBtn.removeAttribute('disabled', true);
    })

    cancelBtn.addEventListener('click', () => {
        previewUlElement.removeChild(liElement);
        addBtn.removeAttribute('disabled', true);
    })   
}
