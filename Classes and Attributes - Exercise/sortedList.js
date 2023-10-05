class List {

    collection = [];

    constructor(size) {
        this.size = this.collection.length;
    }

    add(num) {
        this.collection.push(num);
        this.collection.sort((a, b) => a - b);
        this.size = this.collection.length;
    }

    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(index, 1);
            this.size = this.collection.length;
        }
    }

    get(index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list);
