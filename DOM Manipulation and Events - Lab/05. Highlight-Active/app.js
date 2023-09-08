function focused() {
    let inputElements = document.querySelectorAll('body div div input');
    inputElements = Array.from(inputElements);
    
    inputElements.forEach(el => {
        el.addEventListener('focus', (e) => {
            e.target.parentNode.className = 'focused';  
        });

        el.addEventListener('blur', (e) => {
            e.target.parentNode.className = '';
        })
    })   
}