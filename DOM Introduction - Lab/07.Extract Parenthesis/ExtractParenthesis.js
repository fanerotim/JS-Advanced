function extract(content) {

    let pattern = new RegExp(/\([A-Za-z ]+\)/, 'g');
    let text = document.getElementById('content').textContent;
    
    let match = pattern.exec(text);
    let result = [];
    while (match) {
        result.push(match[0])
        match = pattern.exec(text);
    }
    result = result.join('; ');
    while(result.includes('(' || ')')) {
        result = result.replace('(', '');
        result = result.replace(')', '');
    }
    return result;
}   