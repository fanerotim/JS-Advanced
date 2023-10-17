class ArtGallery {

    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { 'picture': 200, 'photo': 50, 'item': 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {

        articleModel = articleModel;
        quantity = Number(quantity);

        let currentQuantity;

        if (!this.possibleArticles.hasOwnProperty(articleModel.toLowerCase())) {
            throw new Error(`This article model is not included in this gallery!`)
        }

        let isFound = false;

        for (let item of this.listOfArticles) {
            if (item.articleName === articleName && item.articleModel === articleModel) {
                isFound = true;
                item.quantity += quantity;
                currentQuantity = item.quantity;
            }
        }

        if (isFound === false) {
            articleModel = articleModel.toLowerCase();
            this.listOfArticles.push({ articleModel, articleName, quantity });
            currentQuantity = quantity;
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.` 
    }

    inviteGuest(guestName, personality) {

        for (let name of this.guests) {
            if (name.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`)
            }
        }

        let points;

        switch (personality) {
            case 'Vip':
                points = 500;
                break;
            case 'Middle':
                points = 250;
                break;
            default:
                points = 50;
                break
        }

        let newGuest = {guestName, points, purchaseArticle: 0};
        this.guests.push(newGuest);
        
        return `You have successfully invited ${guestName}!` 
    }

    buyArticle(articleModel, articleName, guestName) {
        
        let isFound = false;
        let articleIndex;

        for (let article of this.listOfArticles) {
            if (article.articleName === articleName) {
                articleIndex = this.listOfArticles.indexOf(article);
                isFound = true;
                if (article.articleModel !== articleModel) {
                    throw new Error(`This article is not found.`)
                } else if (article.quantity <= 0) {
                    return `The ${articleName} is not available.`
                }
            }
        }  

        if (isFound === false) {
            throw new Error(`This article is not found.`)
        }

        let hasGuest = false;

        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                hasGuest = true;

                if (guest.points < this.possibleArticles[articleModel]) {
                    return `You need to more points to purchase the article.`
                }
                guest.points -= this.possibleArticles[articleName];
                this.listOfArticles[articleIndex].quantity--;
                guest.purchaseArticle++;
                return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
            }
        }

        if (hasGuest === false) {
            return `This guest is not invited.`
        }
    }

    showGalleryInfo(criteria) {

        let output = '';
        let linesToAdd = [];

        switch(criteria) {
            case 'article':
                output += `Articles information:\n`;
                for (let article of this.listOfArticles) {
                    linesToAdd.push(`${article.articleModel} - ${article.articleName} - ${article.quantity}`);
                }
                break;
            case 'guest':
                output += `Guests information:\n`;
                for (let guest of this.guests) {
                    linesToAdd.push(`${guest.guestName} - ${guest.purchaseArticle}`);
                }
                break;
        }
        output += linesToAdd.join('\n');
        return output;
    }
}

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));
console.log(artGallery.inviteGuest('Peter', 'Normal'));
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'Peter'));


// const artGallery = new ArtGallery('Curtis Mayfield');
// console.log(artGallery.inviteGuest('John', 'Vip'));
// console.log(artGallery.inviteGuest('Peter', 'Middle'));
// console.log(artGallery.inviteGuest('John', 'Middle'));


// const artGallery = new ArtGallery('Curtis Mayfield');
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
// console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
// console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));


// const artGallery = new ArtGallery('Curtis Mayfield'); 
// artGallery.addArticle('picture', 'Mona Liza', 3);
// artGallery.addArticle('Item', 'Ancient vase', 2);
// artGallery.addArticle('picture', 'Mona Liza', 1);
// artGallery.inviteGuest('John', 'Vip');
// artGallery.inviteGuest('Peter', 'Middle');
// artGallery.buyArticle('picture', 'Mona Liza', 'John');
// artGallery.buyArticle('item', 'Ancient vase', 'Peter');
// console.log(artGallery.showGalleryInfo('article'));
// console.log(artGallery.showGalleryInfo('guest'));


