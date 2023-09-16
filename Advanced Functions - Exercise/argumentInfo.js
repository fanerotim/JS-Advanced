function argumentInfo(...arguments) {

    arguments.forEach(argument => {
        console.log(`${typeof argument}: ${argument}`);
    })
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });