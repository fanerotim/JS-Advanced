function generateReport() {
    
    let columns = document.querySelectorAll('thead tr th input');
    columns = Array.from(columns);
    let selectedColumnsIndexes = [];

    let result = [];

    for (let column of columns) {
        if (column.checked === true) {
            selectedColumnsIndexes.push(columns.indexOf(column));
        }
    }

    let rows = document.querySelectorAll('tbody tr');
    let columnCounter = 0;
    
    for (let item of selectedColumnsIndexes) {
        let prop = columns[item].name;
        columnCounter++;
        let counter = 0;

        for (let row of rows) {
            let val = row.children[item].textContent;

            if (columnCounter <= 1) {
                let myObj = {};
                myObj[prop] = val;
                result.push(myObj);
            } else {
                result[counter][prop] = val;
                counter++;
            }  
        }
    }
    let output = JSON.stringify(result);
    let textarea = document.getElementById('output');
    textarea.textContent = output;
}