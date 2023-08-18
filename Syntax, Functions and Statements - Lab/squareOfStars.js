function square(num) {
    let output = '';
    
    for (let i = 0; i < num; i++) {
        output += `${'* '.repeat(num)}\n`;
    }
    console.log(output);
}

// square(1);
// square(2);
square(5);
// square(7);
