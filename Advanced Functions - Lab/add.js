function add(x) {
    let startingNum = x;

    return function(y) {
        return startingNum + y;
    }
}

let add5 = add(5);
console.log(add5(2));
console.log(add5(3));

let add7 = add(7);
console.log(add7(2));
console.log(add7(3));
