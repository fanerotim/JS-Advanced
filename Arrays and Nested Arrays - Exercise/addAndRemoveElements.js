function addAndRemoveEl(arr) {

    let num = 1;
    let output = [];

    arr.forEach(el => {
        
        switch(el) {
            case 'add':
                output.push(num);
                break;
            case 'remove':
                output.pop();
                break;
        }
        num++;
    });

    if (output.length === 0) {
        return 'Empty';
    }
    
    console.log(output.join('\n'))
}

// addAndRemoveEl([
//     'add',
//     'add',
//     'add',
//     'add']);

// addAndRemoveEl([
//     'add',
//     'add',
//     'remove',
//     'add',
//     'add']);

addAndRemoveEl([
    'remove',
    'remove',
    'remove'])