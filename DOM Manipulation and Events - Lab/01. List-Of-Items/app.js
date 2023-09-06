function addItem() {

    //Getting the parent element
    let parentElement = document.querySelector('#items');

    //getting the input from user
    let input = document.querySelector('main input').value;

    //creating a new li item;
    let liElement = document.createElement('li');
    
    //setting its content (text)
    liElement.textContent = input;

    //adding the new element to the ul
    parentElement.appendChild(liElement);
}