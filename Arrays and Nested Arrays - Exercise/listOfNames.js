function listOfNames(arr) {
    
    let output = arr.sort((a, b) => a.localeCompare(b));
    let counter = 1;
    output.forEach(element => {
        console.log(`${counter}.${element}`);
        counter++;
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"])