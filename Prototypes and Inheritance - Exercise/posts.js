function solution() {

    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            let postObj = {
                Post: this.title,
                Content: this.content
            }
            
            let output = [];
            for (let key in postObj) {
                output.push(`${key}: ${postObj[key]}`)
            }
            return output.join('\n');
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(` * ${comment}`);
        }

        toString() {
            
            let socialPostObj = {}
            socialPostObj['Post'] = this.title;
            socialPostObj['Content'] = this.content;
            socialPostObj['Rating'] = this.likes - this.dislikes;

            let output = [];

            for (let key in socialPostObj) {
                output.push(`${key}: ${socialPostObj[key]}`)
            }
            
            if (this.comments.length !== 0) {
            socialPostObj['Comments'] = this.comments;
            output.push('Comments:');
            output.push(socialPostObj.Comments.join('\n'));
            }

            return output.join('\n');   
        }
    }

    class BlogPost extends Post{

        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let blogObj = {};
            blogObj['Post'] = this.title;
            blogObj['Content'] = this.content;
            blogObj['Views'] = this.views;
            
            let output = [];

            for (let key in blogObj) {
                output.push(`${key}: ${blogObj[key]}`);
            }
            return output.join('\n');
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost,
    }
}

const classes = solution();
// let post = new classes.Post("Post", "Content");

// console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

let bp = new classes.BlogPost("TestTitle", "TestContent", 5);
bp.view();
console.log(bp.toString());

