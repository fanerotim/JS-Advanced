let ChristmasMovies = require('../christmasMovies');
let expect = require('chai').expect;

describe('tests ChristmasMovies Class', function () {


    describe('tests buyMovie function', function () {
        it('tests buyMovie function', function () {
            let testClass = new ChristmasMovies();
            expect(testClass.buyMovie('Revenant', ['Leonardo DiCaprio'])).to.equal(`You just got Revenant to your collection in which Leonardo DiCaprio are taking part!`)
        });

        it('tests buyMovie function', function () {
            let testClass = new ChristmasMovies();
            expect(testClass.buyMovie('Revenant', ['Leonardo DiCaprio', 'Second actor'])).to.equal(`You just got Revenant to your collection in which Leonardo DiCaprio, Second actor are taking part!`)
        });

        it('tests buyMovie function', function () {
            let testClass = new ChristmasMovies();
            expect(testClass.buyMovie('Revenant', ['Leonardo DiCaprio', 'Second actor', 'Second actor'])).to.equal(`You just got Revenant to your collection in which Leonardo DiCaprio, Second actor are taking part!`)
        });

        it('tests buyMovie function', function () {
            let testClass = new ChristmasMovies();
            expect(testClass.buyMovie('Revenant', ['Leonardo DiCaprio', 'Another actor'])).to.equal(`You just got Revenant to your collection in which Leonardo DiCaprio, Another actor are taking part!`);
            expect(() => testClass.buyMovie('Revenant', ['Leonardo DiCaprio', 'Another actor'])).to.throw(`You already own Revenant in your collection!`)
        });

        
    });

    describe('tests discardMovie method', () => {
        it('checks if output is correct', () => {
            let testClass = new ChristmasMovies();
            expect(() => testClass.discardMovie('Peter Pan')).to.throw(`Peter Pan is not at your collection!`)
        })

        it('checks if output is correct', () => {
            let testClass = new ChristmasMovies();

            testClass.buyMovie('Peter Pan', ['random actor'])
            expect(() => testClass.discardMovie('Peter Pan')).to.throw(`Peter Pan is not watched!`)
        })

        it('checks if output is correct', () => {
            let testClass = new ChristmasMovies();

            testClass.buyMovie('Peter Pan', ['random actor'])
            testClass.watchMovie('Peter Pan');
            expect(testClass.discardMovie('Peter Pan')).to.equal(`You just threw away Peter Pan!`)
        })
    })

    describe('tests watchMovie function', () => {
        it('checks if output is correct', () => {
            let testClass = new ChristmasMovies();
            expect(() => testClass.watchMovie('Peter Pan')).to.throw('No such movie in your collection!')
        })
    });

    describe('tests favouriteMovie function', () => {
        it('checks if output is correct', () => {
            let testClass = new ChristmasMovies();
            expect(() => testClass.favouriteMovie()).to.throw('You have not watched a movie yet this year!')
        })

        it('checks if output is correct', () => {
            let testClass = new ChristmasMovies();
            testClass.buyMovie('Peter Pan', ['some actors']);
            testClass.buyMovie('Gladiator', ['some actors']);
            testClass.watchMovie('Gladiator');
            testClass.watchMovie('Gladiator');
            testClass.watchMovie('Peter Pan');
            expect(testClass.favouriteMovie()).to.equal('Your favourite movie is Gladiator and you have watched it 2 times!')
        })
    });

    describe('tests mostStarredActor', () => {
        it('checks if output is correct', () => {
            let testClass = new ChristmasMovies();
            expect(() => testClass.mostStarredActor()).to.throw(`You have not watched a movie yet this year!`);
        })

        it('checks if output is correct', () => {
            let testClass = new ChristmasMovies();
            testClass.buyMovie('The Revenant', ['Leonardo DiCaprio']);
            expect(testClass.mostStarredActor()).to.equal(`The most starred actor is Leonardo DiCaprio and starred in 1 movies!`);
        })

        it('checks if output is correct', () => {
            let testClass = new ChristmasMovies();
            testClass.buyMovie('The Revenant', ['Leonardo DiCaprio']);
            testClass.buyMovie('Titanic', ['Leonardo DiCaprio']);
            testClass.buyMovie('Pulp Function', ['LJohn Travolta']);
            expect(testClass.mostStarredActor()).to.equal(`The most starred actor is Leonardo DiCaprio and starred in 2 movies!`);
        })
    })

});
