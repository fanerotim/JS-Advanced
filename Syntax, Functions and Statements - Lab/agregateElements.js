function agregateElements(arr) {

    let inputArr = arr.slice(0);
    let sum = arr.reduce((acc, num) => acc += num, 0);
    
    let inversedSum = 0;

    inputArr.forEach(num => { 
       inversedSum += 1 / num;
    })

    let sumAsStr = '';
    inputArr.forEach(el => {
        el = el.toString();
        sumAsStr += el;
    });

    console.log(sum);
    console.log(inversedSum);
    console.log(sumAsStr);
}

agregateElements([1, 2, 3]);
agregateElements([2, 4, 8, 16]);