window.addEventListener('load', solve);

function solve() {

    let genreElement = document.getElementById('genre');
    let nameElement = document.getElementById('name');
    let authorElement = document.getElementById('author');
    let dateElement = document.getElementById('date');

    let addBtn = document.getElementById('add-btn');
    let hitsContainer = document.querySelector('.all-hits-container');
    let savedContainer = document.querySelector('.saved-container');

    let genreValue;
    let nameValue;
    let authorValue;
    let dateValue;

    let totalLikesElement = document.querySelector('.likes p');
    let numberOfLikes = 0;

    addBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (genreElement.value === '' || nameElement.value === '' || authorElement.value === '' || dateElement.value === '') {
            return;
        } 

        genreValue = genreElement.value;
        nameValue = nameElement.value;
        authorValue = authorElement.value;
        dateValue = dateElement.value;

        let divContainer = document.createElement('div');
        divContainer.classList.add('hits-info');

        let image = document.createElement('img');
        image.setAttribute('src', './static/img/img.png');

        let h2Genre = document.createElement('h2');
        let h2Name = document.createElement('h2');
        let h2Author = document.createElement('h2');
        let h3Date = document.createElement('h3');

        let saveSongBtn = document.createElement('button');
        saveSongBtn.classList.add('save-btn');
        saveSongBtn.textContent = 'Save song';

        let likeSongBtn = document.createElement('button');
        likeSongBtn.classList.add('like-btn');
        likeSongBtn.textContent = 'Like song';

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        h2Genre.textContent = `Genre: ${genreValue}`;
        h2Name.textContent = `Name: ${nameValue}`;
        h2Author.textContent = `Author: ${authorValue}`;
        h3Date.textContent = `Date: ${dateValue}`;

        divContainer.appendChild(image);
        divContainer.appendChild(h2Genre);
        divContainer.appendChild(h2Name);
        divContainer.appendChild(h2Author);
        divContainer.appendChild(h3Date);
        divContainer.appendChild(saveSongBtn);
        divContainer.appendChild(likeSongBtn);
        divContainer.appendChild(deleteBtn);
        
        hitsContainer.appendChild(divContainer);
        
        genreElement.value = '';
        nameElement.value = '';
        authorElement.value = '';
        dateElement.value = '';

        likeSongBtn.addEventListener('click', (e) => {
            e.currentTarget.setAttribute('disabled', true);

            numberOfLikes++;
            totalLikesElement.textContent = `Total Likes: ${numberOfLikes}`;
        });

        saveSongBtn.addEventListener('click', (e) => {
            let savedSong = e.currentTarget.parentNode.cloneNode(true);
            let buttonToRemove = savedSong.querySelector('.save-btn');
            let buttonToRemoveTwo = savedSong.querySelector('.like-btn');
        
            savedSong.removeChild(buttonToRemove);
            savedSong.removeChild(buttonToRemoveTwo);
            
            hitsContainer.removeChild(e.currentTarget.parentNode);
            savedContainer.appendChild(savedSong);

            let deleteSavedBtn = savedSong.querySelector('.delete-btn');

            deleteSavedBtn.addEventListener('click', (e) => {
                savedContainer.removeChild(e.currentTarget.parentNode);
            })
        });

        deleteBtn.addEventListener('click', (e) => {
            hitsContainer.removeChild(e.currentTarget.parentNode);
        })
    })
}