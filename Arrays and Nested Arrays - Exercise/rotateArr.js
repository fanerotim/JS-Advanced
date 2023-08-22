function rotation(arr, rotations) {

    for (let i = 0; i < rotations; i++) {
        let curElement = arr.pop();
        arr.unshift(curElement);
    }
    console.log(arr.join(' '));
}

// rotation([
//     '1',
//     '2',
//     '3',
//     '4'],
//     2);

rotation([
    'Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15);