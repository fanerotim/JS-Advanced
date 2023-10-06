class Stringer {   

    constructor(string, length) {
        this.initialString = string;
        this.innerString = string;
        this.innerLength = length;
    }
    
    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength < 0) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.initialString.length > this.innerLength) {
            this.innerString = this.initialString.substring(0, this.innerLength) + '...';
        } else if (this.innerLength === 0) {
            this.innerString = '...';
        } else {
            this.innerString = this.initialString;
        }
        return this.innerString;
    }
}

// let test = new Stringer("Test", 5);
// console.log(test.toString()); // Test

// test.decrease(3);
// console.log(test.toString()); // Te...

// test.decrease(5);
// console.log(test.toString()); // ...

// test.increase(4); 
// console.log(test.toString()); // Test

let s = new Stringer("Viktor", 7);
console.log(s.toString());
s.decrease(2);
console.log(s.toString());
s.decrease(1);
console.log(s.toString());
s.increase(1);
console.log(s.toString());
s.decrease(1);
console.log(s.toString());
s.decrease(5);
console.log(s.toString());
s.decrease(1);
console.log(s.toString());
s.decrease(2);
console.log(s.toString());
s.increase(7);
console.log(s.toString());

