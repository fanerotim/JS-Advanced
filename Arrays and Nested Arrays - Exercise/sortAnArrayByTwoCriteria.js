function sortArr(arr) {

    let result = arr.sort((a, b) => {
        if (a.length > b.length) {
            return 1
        } else if (b.length > a.length) {
            return -1
        } else {
            return a.localeCompare(b);
        }
    })
    console.log(result.join('\n'));
}

sortArr([
    'alpha',
    'beta',
    'gamma']);

sortArr([
    'Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']);

sortArr([
    'test',
    'Deny',
    'omen',
    'Default']);