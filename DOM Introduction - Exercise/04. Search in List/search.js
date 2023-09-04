function search() {
    
    let liCollection = document.querySelectorAll('#towns li');
    let input = document.getElementById('searchText');
    let matchesCounter = 0;

    for (let item of liCollection) {
        
        if (item.textContent.includes(input.value)) {
            item.style.textDecoration = 'underline';
            item.style.fontWeight = 'bold';
            matchesCounter++;
        }
    }
    document.getElementById('result').textContent = `${matchesCounter} matches found`
}
