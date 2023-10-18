function solve() {

    let authorElement = document.getElementById('creator');
    let titleElement = document.getElementById('title');
    let categoryElement = document.getElementById('category');
    let contentElement = document.getElementById('content');

    let createBtn = document.querySelector('.create');
    let postsContainer = document.querySelector('main section');
    let archiveOl = document.querySelector('.archive-section ol');

    createBtn.addEventListener('click', (e) => {
        e.preventDefault();

        let articleContainer = document.createElement('article');
        let h1Title = document.createElement('h1');
        let categoryContainer = document.createElement('p');
        categoryContainer.textContent = 'Category:\n'
        let categoryStrong = document.createElement('strong');
        let creatorContainer = document.createElement('p');
        creatorContainer.textContent = 'Creator:\n';
        let creatorStrong = document.createElement('strong');
        let contentParagraph = document.createElement('p');

        let buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('buttons');

        let deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';

        let archiveBtn = document.createElement('button');
        archiveBtn.classList.add('btn');
        archiveBtn.classList.add('archive');
        archiveBtn.textContent = 'Archive';

        h1Title.textContent = titleElement.value;
        categoryStrong.textContent = categoryElement.value;
        creatorStrong.textContent = authorElement.value;
        contentParagraph.textContent = contentElement.value;

        articleContainer.appendChild(h1Title);
        categoryContainer.appendChild(categoryStrong);
        articleContainer.appendChild(categoryContainer);
        creatorContainer.appendChild(creatorStrong);
        articleContainer.appendChild(creatorContainer);
        articleContainer.appendChild(contentParagraph);
        buttonsContainer.appendChild(deleteBtn);
        buttonsContainer.appendChild(archiveBtn);
        articleContainer.appendChild(buttonsContainer);

        postsContainer.appendChild(articleContainer);

        archiveBtn.addEventListener('click', (e) => {
            let currentArticle = e.currentTarget.parentNode.parentNode;
            let currentH1 = currentArticle.querySelector('h1');
            let curLi = document.createElement('li');
            curLi.textContent = currentH1.textContent;
            archiveOl.appendChild(curLi);
            
            postsContainer.removeChild(currentArticle);

            let sortedArray = Array.from(archiveOl.children).sort((a, b) => a.textContent.localeCompare(b.textContent));
            
            for (let item of sortedArray) {
                archiveOl.appendChild(item);
            }

        });

        deleteBtn.addEventListener('click', (e) => {
            postsContainer.removeChild(e.currentTarget.parentNode.parentNode);
        })
    })
}
