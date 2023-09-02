function editElement(reference, stringMatch, replacer) {
    
    let text = reference.textContent;
    
    while (text.includes(stringMatch)) {
        text = text.replace(stringMatch, replacer);
    }
    reference.innerHTML = text;   
}