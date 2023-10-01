function validate() {
    
    let pattern = /(?<name>[a-z]+)@(?<domain>[a-z]+)\.(?<extension>[a-z]+)/g;
    let inputElement = document.getElementById('email');
    
    inputElement.addEventListener('change', () => {
        if (!inputElement.value.match(pattern)) {
            inputElement.className = 'error';
        } else {
            inputElement.className = '';
        }
    })
}