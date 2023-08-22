function equalNeighbors(input) {

    let match = 0;

    for (let i = 0; i < input.length; i++) {
        let arr = input[i];
        for (let j = 0; j < arr.length; j++) {
            let currentNum = arr[j];

            if (i !== input.length - 1) {

                if (currentNum === arr[j + 1]) {
                        match++;
                    }

                if (currentNum === input[i + 1][j]) {
                    match++;
                }

            } else {
                if (currentNum === arr[j + 1]) {
                    match++;
                }
            }
        }
    }    
    console.log(match);
}

// equalNeighbors([
//     ['2', '3', '4', '7', '0'],
//     ['4', '0', '5', '3', '4'],
//     ['2', '3', '5', '4', '2'],
//     ['9', '8', '7', '5', '4']
// ]);

// equalNeighbors([
//     ['test', 'yes', 'yo', 'ho'],
//     ['well', 'done', 'yo', '6'],
//     ['not', 'done', 'yet', '5']
// ]);

// equalNeighbors([
//     [2, 2, 5, 7, 4],
//     [4, 0, 5, 3, 4],
//     [2, 5, 5, 4, 2]
// ]);