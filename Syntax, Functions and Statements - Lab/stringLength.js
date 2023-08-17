function stringLength(wordOne, wordTwo, wordThree) {
    
    let totalLength = wordOne.length + wordTwo.length  + wordThree.length;
    
    console.log(totalLength);
    console.log(Math.floor(totalLength / 3))
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');