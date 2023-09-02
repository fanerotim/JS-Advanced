function sumTable() {

    let table = document.querySelector('table');
    let tableData = table.getElementsByTagName('td');
    
    let sum = 0;

    for (let i = 0; i < tableData.length; i++) {

        if (i % 2 !== 0) {
            sum += Number(tableData[i].textContent)
        }  
    }
    let totalCost = document.getElementById('sum');
    totalCost.textContent = sum;
}