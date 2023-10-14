window.addEventListener("load", solve);

function solve() {

    let titleElement = document.getElementById('post-title');
    let categoryElement = document.getElementById('post-category');
    let contentElement = document.getElementById('post-content');

    let publishBtn = document.getElementById('publish-btn');
    
    let reviewUlElement = document.getElementById('review-list');
    let publishedListUlElement = document.getElementById('published-list');

    publishBtn.addEventListener('click', () => {
        if (titleElement.value === '' || categoryElement.value === '' || contentElement.value === '') {
            return;
        }


        let liElement = document.createElement('li');
        liElement.classList.add('rpost');
        let articleElement = document.createElement('article');
        
        let titleH4Heading = document.createElement('h4');
        let categoryParagraph = document.createElement('p');
        let contentParagraph = document.createElement('p');
        
        let editBtn = document.createElement('button');
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';

        let approveBtn = document.createElement('button');
        approveBtn.classList.add('action-btn');
        approveBtn.classList.add('approve');
        approveBtn.textContent = 'Approve';

        let categoryValue = categoryElement.value;
        let contentValue = contentElement.value;

        titleH4Heading.textContent = titleElement.value;
        categoryParagraph.textContent = `Category: ${categoryValue}`;
        contentParagraph.textContent = `Content: ${contentValue}`;

        articleElement.appendChild(titleH4Heading);
        articleElement.appendChild(categoryParagraph);
        articleElement.appendChild(contentParagraph);
        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(approveBtn);

        reviewUlElement.appendChild(liElement);

        titleElement.value = '';
        categoryElement.value = '';
        contentElement.value = '';

        editBtn.addEventListener('click', (e) => {
            reviewUlElement.removeChild(e.currentTarget.parentNode);
            titleElement.value = titleH4Heading.textContent;
            categoryElement.value = categoryValue;
            contentElement.value = contentValue;
        });

        approveBtn.addEventListener('click', (e) => {
            let approvedPost = liElement.cloneNode(true);
            let btnToRemove = approvedPost.querySelector('.edit');
            let btnToRemoveTwo = approvedPost.querySelector('.approve');
            approvedPost.removeChild(btnToRemove);
            approvedPost.removeChild(btnToRemoveTwo);
            
            reviewUlElement.removeChild(e.currentTarget.parentNode);
            publishedListUlElement.appendChild(approvedPost);
        });
        
        let clearBtn = document.getElementById('clear-btn');
        clearBtn.addEventListener('click', () => {
            publishedListUlElement.innerHTML = '';
        })
    })
}
