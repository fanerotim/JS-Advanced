function validityChecker(xOne, yOne, xTwo, yTwo) {

    let dist;
    let x1;
    let x2;
    let y1;
    let y2;

    let counter = 0;
    while (counter < 3) {
        counter++;

        if (counter === 1) {
            x1 = xOne;
            x2 = 0;
            y1 = yOne;
            y2 = 0;
            let x = x2 - x1;
            let y = y2 - y1;
            dist = Math.sqrt(x * x + y * y);
        } else if (counter === 2) {
            x2 = 0;
            y2 = 0;
            x1 = xTwo;
            y1 = yTwo;
            let x = x2 - x1;
            let y = y2 - y1;
            dist = Math.sqrt(x * x + y * y);
        } else {
            x1 = xOne;
            x2 = xTwo;
            y1 = yOne;
            y2 = yTwo;
            let x = x2 - x1;
            let y = y2 - y1;
            dist = Math.sqrt(x * x + y * y);
        }
        
        if (Number.isInteger(dist)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);