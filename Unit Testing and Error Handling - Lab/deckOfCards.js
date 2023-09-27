function printDeckOfCards(cards) {

    let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];
    let suitCode;
    let output = [];

    function createCard(x) {

        for (let card of x) {
            card = card.split('');
            let suit = card.pop();
            let face = card.join('');

            if (!validFaces.includes(face) || !suits.includes(suit)) {
                console.log(`Invalid card: ${face}${suit}`);
                return;
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
                output.push(`${face}${suitCode}`);
            }
        }
        console.log(output.join(' '));
        return;
    }
    createCard(cards);
}


printDeckOfCards(['AR', 'AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);