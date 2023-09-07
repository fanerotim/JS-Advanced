function addItem() {
    
    //getting the input from user
    let input = document.getElementById('newItemText').value;
    //getting the ul, where the li items will be added
    let ulElement = document.getElementById('items');
    //create the li items that we will be adding to the ul
    let newLiItem = document.createElement('li');
    //adding the input to the newly created li item
    newLiItem.textContent = input;

    //creating the a tag that will have the delete option
    let deleteOption = document.createElement('a');
    //setting href to the delete option
    deleteOption.href = '#'
    //adding text content to it
    deleteOption.textContent = '[Delete]';

    //adding the a tag to the li item
    newLiItem.appendChild(deleteOption);
    // adding the li item with its a tag to the ul element
    ulElement.appendChild(newLiItem);  
    
    //function that deletes the li items
    deleteOption.addEventListener('click', () => {
        deleteOption.parentNode.remove();
    })
}