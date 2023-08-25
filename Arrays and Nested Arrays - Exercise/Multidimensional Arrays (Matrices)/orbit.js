function orbit(arr) {

    let width = Number(arr.shift());
    let height = Number(arr.shift());
    let x = Number(arr.shift());
    let y = Number(arr.shift());

    let matrix = [];

    for (let i = 0; i < height; i++) {
        matrix.push([]);
        for (let j = 0; j < width; j++) {
            matrix[i][j] = ''; 
        }
    }
    matrix[y][x] = 1;

    for (let i = 0; i < matrix.length; i++) {
        let curArr = matrix[i];
        for (let j = 0; j < curArr.length; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(j - y)) + 1;
        }
    } 
    
    matrix.forEach(el => {
        console.log(el.join(' '));
    })
}

// orbit([4, 4, 0, 0]);
// orbit([5, 5, 2, 2]);
// orbit([3, 3, 2, 2]);
orbit([4, 4, 3, 3]);