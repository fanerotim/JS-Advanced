function isSymmetric(arr) {
    if (!Array.isArray(arr)){
        console.log(false)
        return false; // Non-arrays are non-symmetric
    }
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    console.log(equal);
    return equal;
}

isSymmetric([6,1, 1])

