function validate() {
    
    let pattern = /(?<name>[a-z]+)@{1}(?<domain>[a-z]+)\.{1}(?<extension>[a-z]+)/g;
    let input = document.getElementById('email');

    input.addEventListener('change', (e) => {

        if (e.target.value.match(pattern) == null) {
            input.className = 'error';
        } else {
            input.className = '';
        }  
    });
}