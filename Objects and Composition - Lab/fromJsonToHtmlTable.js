function fromJsonToHtml(input) {

    let myInput = JSON.parse(input);
    let result = '\<table\>\n'
    
    for (let curObj of myInput) {
        let lineToAdd = '   \<tr\>';
        for (let key in curObj) {
            lineToAdd += `\<th\>${key}\<\/th\>`
        }
        lineToAdd += '\<\/tr\>'
        result += `${lineToAdd}\n`;
        break;
    }

    for (let currentObj of myInput) {
        let newLineToAdd = '   \<tr\>';
        for (let curKey in currentObj) {
            newLineToAdd += `\<td\>${currentObj[curKey]}\<\/td\>`
        }
        newLineToAdd += '\<\/tr\>'
        result += `${newLineToAdd}\n`;
    }
    result += '\<\/table\>'
    console.log(result);
}

// fromJsonToHtml(
//     `[{"Name":"Stamat",
//     "Score":5.5},
//     {"Name":"Rumen",
//     "Score":6}]`);

fromJsonToHtml(
    `[{"Name":"Pesho",
    "Score":4,
    "Grade":8}, {"Name":"Gosho",
    "Score":5,
    "Grade":8},
    {"Name":"Angel",
    "Score":5.50,
    "Grade":10}]`);