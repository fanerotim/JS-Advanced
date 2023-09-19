function getArticleGenerator(articles) {

    let counter = 0;

    function showNext() {
        let articleElement = document.createElement('article');
        let divElement = document.getElementById('content');

        if (counter < articles.length) {
            articleElement.textContent = articles[counter];
            counter++;
            divElement.appendChild(articleElement);
        }
    }

    return showNext;
}

