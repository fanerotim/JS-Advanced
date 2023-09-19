function solution(command) {

    let biggerNum = 0;
    let obfuscatedNum = 0;

    switch (command) {
        case 'upvote':
            this.upvotes++;

            break;
        case 'downvote':
            this.downvotes++;

            break;
        case 'score':
            let output = [this.upvotes, this.downvotes]

            if (this.upvotes >= this.downvotes) {
                biggerNum = this.upvotes;
            } else {
                biggerNum = this.downvotes;
            }

            if (this.upvotes + this.downvotes > 50) {
                obfuscatedNum = Math.ceil(biggerNum * 0.25);
                output[0] += obfuscatedNum;
                output[1] += obfuscatedNum;
            }

            let score = this.upvotes - this.downvotes;
            output[2] = score;

            let votesSum = this.upvotes + this.downvotes;
            let percentage = (this.upvotes / votesSum) * 100;
            let rating;

            if (percentage > 66) {
                rating = 'hot';
            } else if (score >= 0 && votesSum > 100) {
                rating = 'controversial';
            } else if (score < 0) {
                rating = 'unpopular';
            }
            
            if (votesSum < 10 || rating === undefined) {
                rating = 'new';
            } 
            output[3] = rating;
            return output;
    }
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
for (let i = 0; i < 50; i++) {
    solution.call(post, 'downvote');         // (executed 50 times)
}
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
