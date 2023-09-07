function attachGradientEvents() {
    
    let gradient = document.getElementById('gradient-box');
   
    let output = document.getElementById('result');
    
    gradient.addEventListener('mousemove', (e) => {
        xNumber = e.offsetX;
        let result = `${Math.floor(xNumber / e.target.clientWidth * 100)}%`;
        output.textContent = result;
    })    
}