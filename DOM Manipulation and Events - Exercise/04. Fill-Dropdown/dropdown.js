function addItem() {
    
    let inputText = document.getElementById('newItemText').value;
    let inputValue = document.getElementById('newItemValue').value;

    let option = document.createElement('option');
    option.textContent = inputText;
    option.value = inputValue;
    
    let select = document.getElementById('menu');
    select.appendChild(option);

    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';  
}