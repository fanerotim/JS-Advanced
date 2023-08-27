function spiralMatrix(x, y) {

    let matrix = [];

    for (let i = 0; i < x; i++) {
        matrix.push([]);
        for (let j = 0; j < y; j++) {
            matrix[i][j] = '';
        }
    }

    let counter = 1;
    let right = 0;
    let down = 0;
    let left = 0;
    let up = 0;

    while (matrix[Math.floor(matrix.length / 2)].includes('')) {
        let rightCounter = right;

        for (let r = x - up - down; r > 0; r--) {
            matrix[right][rightCounter] = counter;
            counter++;
            rightCounter++;
        }
        right++;

        let downCounter = right;
        for (let d = y - right - left; d > 0; d--) {
            matrix[downCounter][y - right] = counter;
            counter++;
            downCounter++;
        }
        down++;

        //this third loop is not completed. i need to complete this and the next loop (up)
        let leftCounter = x - 1 - down;
        for (let l = x - up - down; l > 0; l--) {
            matrix[x - down][leftCounter] = counter;
            counter++;
            leftCounter--;
        }
        left++;
        
        let upCounter = y - left - 1;
        for (let u = y - left - right; u > 0; u--) {
            matrix[upCounter][up] = counter;
            counter++;
            upCounter--;
        }
        up++;
    }
    matrix.forEach(arr => console.log(arr.join(' ')));
}

spiralMatrix(3, 3);
spiralMatrix(5, 5);