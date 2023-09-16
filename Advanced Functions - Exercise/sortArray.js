function sortArr(arr, command) {

    switch(command) {
        case 'asc':
            return arr.sort((a, b) => a - b);
        case 'desc':
            return arr.sort((a, b) => b - a); 
    }    
}

sortArr([14, 7, 17, 6, 8], 'asc');
sortArr([14, 7, 17, 6, 8], 'desc');