function ticTacToe(input) {

    let dashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]];

    let firstPlayerMark = 'X';
    let secondPlayerMark = 'O';
    let currentPlayer;
    let player = 0;

    for (let k = 0; k < input.length; k++) {
        let el = input[k];
        let [row, col] = el.split(' ');
        row = Number(row);
        col = Number(col);

        if (player % 2 === 0) {
            currentPlayer = firstPlayerMark;
        } else if (player % 2 !== 0) {
            currentPlayer = secondPlayerMark;
        }
        player++;

        if (dashboard[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
            player--;
            continue;
        } else if (dashboard[row][col] === false) {
            dashboard[row][col] = currentPlayer;
            let noFalse = 0;

            // this loop checks if board is full and nobody wins;
            for (let z = 0; z < dashboard.length; z++) {
                let currentArray = dashboard[z]

                if (!currentArray.includes(false)) {
                    noFalse++;

                    if (noFalse === 3) {
                        console.log('The game ended! Nobody wins :(');
                        for (let arr of dashboard) {
                            console.log(arr.join('\t'));
                        }
                        return;
                    }
                }
            }

            //code below checks if someone wins

            let rowResult;
            let colResult;
            let leftDiagonalResult;
            let rightDiagonalResult;
            let rightCounter = 1;

            for (let i = 0; i < dashboard.length; i++) {
                let curArr = dashboard[i];
                rowResult = [];
                colResult = [];
                leftDiagonalResult = [];
                rightDiagonalResult = [];
                let rightCounter = 2;

                for (let j = 0; j < curArr.length; j++) {

                    if (j === 0) {
                        rowResult.push(dashboard[i][j]);
                        colResult.push(dashboard[0][i]);
                        leftDiagonalResult.push(dashboard[j][j]);
                        rightDiagonalResult.push(dashboard[0][rightCounter]);
                        rightCounter--;
                        continue;
                    }

                    if (!rowResult.includes(false)) {
                        if (rowResult[0] === dashboard[i][j]) {
                            rowResult.push(dashboard[i][j]);
                        }
                    }

                    if (!colResult.includes(false)) {
                        if (colResult[0] === dashboard[j][i]) {
                            colResult.push(dashboard[j][i]);
                        }
                    }

                    if (!leftDiagonalResult.includes(false)) {
                        if (leftDiagonalResult[0] === dashboard[j][j]) {
                            leftDiagonalResult.push(dashboard[j][j]);
                        }
                    }

                    if (!rightDiagonalResult.includes(false)) {
                        if (rightDiagonalResult[0] === dashboard[j][rightCounter]) {
                            rightDiagonalResult.push(dashboard[j][rightCounter]);
                        }
                    }
                    rightCounter--;
                }

                if (rowResult.length === 3 || colResult.length === 3 || leftDiagonalResult.length === 3 || rightDiagonalResult.length === 3) {
                    console.log(`Player ${currentPlayer} wins!`);
                    for (let arr of dashboard) {
                        console.log(arr.join('\t'));
                    }
                    return;
                }
            }
        }
    }
}

// ticTacToe(
//         ["0 1",
//         "0 0",
//         "0 2",
//         "2 0",
//         "1 0",
//         "1 1",
//         "1 2",
//         "2 2",
//         "2 1",
//         "0 0"]);

// ticTacToe([
//     "0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"])

// ticTacToe([
//     "0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 2",
//     "1 1",
//     "2 1",
//     "2 2",
//     "0 0"]);

// ticTacToe(
//     ["0 2",
//     "0 0",
//     "1 1",
//     "2 2",
//     "2 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]);