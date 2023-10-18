class Story {
    #comments = [];
    #likes = [];
    #commentId = 1;

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
    }

    get likes() {
        if (this.#likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this.#likes.length === 1) {
            return `${this.#likes[0]} likes this story!`;
        }
        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`
    }

    like(username) {
        if (this.#likes.includes(username)) {
            throw new Error(`You can't like the same story twice!`);
        } else if (username === this.creator) {
            throw new Error(`You can't like your own story!`);
        }
        this.#likes.push(username);
        return `${username} liked ${this.title}!`
    }

    dislike(username) {

        if (!this.#likes.includes(username)) {
            throw new Error(`You can't dislike this story!`)
        }

        let userIndex = this.#likes.indexOf(username);
        this.#likes.splice(userIndex, 1);

        return `${username} disliked ${this.title}`
    }

    comment(username, content, id) {

        let isFound = false;

        for (let comment of this.#comments) {
            if (comment.Id === id && id !== undefined) {
                isFound = true;

                let idIndex = this.#comments.indexOf(comment);

                let newReply = {
                    Id: `${comment.Id}.${comment.Replies.length + 1}`,
                    Username: username,
                    Content: content
                }

                this.#comments[idIndex].Replies.push(newReply);
                return `You replied successfully`
            }
        }

        if (isFound === false || id === undefined) {

            let newComment = {
                Id: this.#commentId,
                Username: username,
                Content: content,
                Replies: []
            };

            this.#commentId++;
            this.#comments.push(newComment);
            return `${username} commented on ${this.title}`
        }
    }

    toString(criteria) {

        for (let line of this.#comments) {
            for (let info of line.Replies) {
                info.Id = Number(info.Id);
            }
        }

        switch(criteria) {
            case 'asc':
                this.#comments.sort((a, b) => a.Id - b.Id);
                
                for (let line of this.#comments) {
                    line.Replies.sort((a, b) => a.Id - b.Id);
                }

                break;
            case 'desc':
                this.#comments.sort((a, b) => b.Id - a.Id);

                for (let line of this.#comments) {
                    line.Replies.sort((a, b) => b.Id - a.Id);
                }

                break;
            case 'username':
                this.#comments.sort((a, b) => a.Username.localeCompare(b.Username));

                for (let line of this.#comments) {
                    line.Replies.sort((a, b) => a.Username.localeCompare(b.Username));
                }

                break;
        }
        
        let output = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this.#likes.length}\n`
        
        let commentsOutputArr = [];

        for (let comment of this.#comments) {
            commentsOutputArr.push(`-- ${comment.Id}. ${comment.Username}: ${comment.Content}`);
            for (let reply of comment.Replies) {
                commentsOutputArr.push(`--- ${reply.Id}. ${reply.Username}: ${reply.Content}`);
            }
        }

        if (this.#comments.length === 0) {
            output += `Comments:`
        } else {
            output += `Comments:\n`
            output += commentsOutputArr.join('\n');
        }
        return output;
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));





