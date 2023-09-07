function deleteByEmail() {
    
    let input = document.getElementsByTagName('input');
    input = input[0].value;

    let rowElements = document.querySelectorAll('tbody tr');
    let resultDiv = document.getElementById('result');
    let isFound = false;
    
    for (let curRow of rowElements) {
        let curRowChildren = Array.from(curRow.children);  
           
        for (let curChild of curRowChildren) {
            if (curChild.textContent === input) {
                //old way
                // curRow.parentNode.removeChild(curRow); 
                //new approach
                curChild.parentNode.remove();
                resultDiv.textContent = 'Deleted'; 
                isFound = true;
            } 
        }
    }
    if (!isFound) {
        resultDiv.textContent = "Not found.";
    }
}