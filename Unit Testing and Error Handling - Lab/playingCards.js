function playingCards(face, suit) {

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];
    let suitCode;

    if (!validFaces.includes(face)) {
        throw new Error('Error');
    } else {
        switch (suit) {
            case 'S':
                suitCode = '\u2660';
                break;
            case 'H':
                suitCode = '\u2665';
                break;
            case 'D':
                suitCode = '\u2666'
                break;
            case 'C':
                suitCode = '\u2663'
                break;
        }
    }
    return {
        face,
        suitCode,
        toString() {
            return `${face}${suitCode}`;
        }
    }
}

console.log(playingCards('A', 'S').toString());
console.log(playingCards('10', 'H').toString());
console.log(playingCards('1', 'C').toString());
