function evenPositionElements(arr) {

    let output = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            output.push(arr[i]);
        }
    }
    console.log(output.join(' '));   
}

evenPositionElements(['20', '30', '40', '50', '60']);
evenPositionElements(['5', '10']);