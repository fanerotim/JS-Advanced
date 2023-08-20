function wordsUppercase(input) {

    let pattern = /,|\!|\?|\.|\-|\:|\'|\"/g;
    let wordsArr = input.replace(pattern, ' ').replace(pattern, '').split(' ');
    
    let output = [];
    wordsArr.forEach(el => {
        if (el !== '') {
            output.push(el);
        }
    });
    console.log(output.join(', ').toUpperCase());
}

wordsUppercase('Hi, how are you?');
wordsUppercase('hello');
wordsUppercase('Functions in JS can be nested, i.e. hold other functions');

