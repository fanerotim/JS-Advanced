window.addEventListener("load", solve);

function solve() {

    let firstNameElement = document.getElementById('first-name');
    let lastNameElement = document.getElementById('last-name');
    let ageElement = document.getElementById('age');
    let storyTitleElement = document.getElementById('story-title');
    let genreElement = document.getElementById('genre');
    let storyTextElement = document.getElementById('story');

    let publishBtn = document.getElementById('form-btn');

    let previewUlElement = document.getElementById('preview-list');

    let liElement = document.createElement('li');
    liElement.classList.add('story-info');

    let articleElement = document.createElement('article');

    let h4NameHeading = document.createElement('h4');
    let ageParagraph = document.createElement('p');
    let titleParagraph = document.createElement('p');
    let genreParagraph = document.createElement('p');
    let storyParagraph = document.createElement('p');

    let saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');
    saveBtn.textContent = 'Save Story';

    let editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');
    editBtn.textContent = 'Edit Story';

    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.textContent = 'Delete Story';

    let firstNameValue;
    let lastNameValue;
    let ageValue;
    let storyTitleValue;
    let genreValue;
    let storyTextValue;

    publishBtn.addEventListener('click', () => {

        if (firstNameElement.value === '' || lastNameElement.value === '' ||
            ageElement.value === '' || storyTitleElement.value === '' ||
            genreElement.value === '' || storyTextElement.value === '') {
            return;
        }

        firstNameValue = firstNameElement.value;
        lastNameValue = lastNameElement.value;
        ageValue = ageElement.value;        
        storyTitleValue = storyTitleElement.value;
        genreValue = genreElement.value;
        storyTextValue = storyTextElement.value;

        h4NameHeading.textContent = `Name: ${firstNameValue} ${lastNameValue}`;
        ageParagraph.textContent = `Age: ${ageValue}`;
        titleParagraph.textContent = `Title: ${storyTitleValue}`;
        genreParagraph.textContent = `Genre: ${genreValue}`;
        storyParagraph.textContent = storyTextValue;

        articleElement.appendChild(h4NameHeading);
        articleElement.appendChild(ageParagraph);
        articleElement.appendChild(titleParagraph);
        articleElement.appendChild(genreParagraph);
        articleElement.appendChild(storyParagraph);

        liElement.appendChild(articleElement);
        liElement.appendChild(saveBtn);
        liElement.appendChild(editBtn);
        liElement.appendChild(deleteBtn);

        previewUlElement.appendChild(liElement);

        firstNameElement.value = '';
        lastNameElement.value = '';
        ageElement.value = '';
        storyTitleElement.value = '';
        genreElement.value = 'Disturbing';
        storyTextElement.value = '';

        publishBtn.setAttribute('disabled', true);
    });

    editBtn.addEventListener('click', () => {

        firstNameElement.value = firstNameValue;
        lastNameElement.value = lastNameValue;
        ageElement.value = ageValue;
        storyTitleElement.value = storyTitleValue;
        genreElement.value = genreValue;
        storyTextElement.value = storyTextValue;

        publishBtn.removeAttribute('disabled', true);
        previewUlElement.removeChild(liElement);
    });

    saveBtn.addEventListener('click', () => {
        let mainDiv = document.getElementById('main');
        previewUlElement.removeChild(liElement);
        mainDiv.innerHTML = '';
        let h1Element = document.createElement('h1');
        h1Element.textContent = 'Your scary story is saved!'
        mainDiv.appendChild(h1Element);
    });

    deleteBtn.addEventListener('click', () => {
        previewUlElement.removeChild(liElement);
        publishBtn.removeAttribute('disabled', true);
    })
}
