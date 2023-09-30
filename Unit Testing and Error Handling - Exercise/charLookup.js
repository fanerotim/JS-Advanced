function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        console.log(undefined);
        return undefined;
    }
    if (string.length <= index || index < 0) {
        console.log("Incorrect index")
        return "Incorrect index";
    }

    console.log(string.charAt(index))
    return string.charAt(index);
}

lookupChar(1, 0)
module.exports = lookupChar;
