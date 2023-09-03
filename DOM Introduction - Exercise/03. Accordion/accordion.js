function toggle() {

    let hiddenText = document.getElementById('extra');
    let button = document.querySelector('.button');
       
    if (button.textContent == 'More') {
        document.addEventListener('click', expand());
    } else {
        document.addEventListener('click', collaps());
    } 

    function expand () {
        button.textContent = 'Less';
        hiddenText.style.display = 'block';
    }

    function collaps () {
        button.textContent = 'More';
        hiddenText.style.display = 'none';
    }
}