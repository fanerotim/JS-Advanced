let lottery = require('../lottery');
let expect = require('chai').expect;

describe('lottery', () => {
    describe('tests for buyLotteryTicket() method', () => {

        it('checks if buy input is true', () => {
            expect(() => lottery.buyLotteryTicket(20, 5, false)).to.throw('Unable to buy lottery ticket!');
        });

        it('checks if input is valid', () => {
            expect(() => lottery.buyLotteryTicket('20', 5, true)).to.throw('Invalid input!');
        });

        it('checks if buy input is true', () => {
            expect(() => lottery.buyLotteryTicket(20, '5', true)).to.throw('Invalid input!');
        });

        it('checks if buy input is true', () => {
            expect(() => lottery.buyLotteryTicket(20, 5, 'false')).to.throw('Invalid input!');
        });

        it('checks if buy input is true', () => {
            expect(() => lottery.buyLotteryTicket(0, 5, true)).to.throw('Invalid input!');
        });

        it('checks if buy input is true', () => {
            expect(() => lottery.buyLotteryTicket(-5, 5, true)).to.throw('Invalid input!');
        });

        it('checks if buy input is true', () => {
            expect(() => lottery.buyLotteryTicket(5, 0, true)).to.throw('Invalid input!');
        });

        it('checks if buy input is true', () => {
            expect(() => lottery.buyLotteryTicket(5, -2, true)).to.throw('Invalid input!');
        });

        it('checks if buy input is true', () => {
            expect(() => lottery.buyLotteryTicket(5, -2, 'invalid')).to.throw('Invalid input!');
        });

        it('checks if buy input is true', () => {
            expect(() => lottery.buyLotteryTicket(5, 2, true)).to.not.throw('Invalid input!');
        });

        it('checks if buy input is true', () => {
            expect(lottery.buyLotteryTicket(5, 2, true)).to.equal('You bought 2 tickets for 10$.');
        });
    });

    describe('tests for checkTicket() method', () => {
        it('checks if input is valid', () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
        })

        it('checks if input is valid', () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).to.throw('Invalid input!');
        })

        it('checks if input is valid', () => {
            expect(() => lottery.checkTicket(123, [1, 2, 3, 4, 5])).to.throw('Invalid input!');
        })

        it('checks if input is valid', () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], '123')).to.throw('Invalid input!');
        })

        it('checks if input is valid', () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.not.throw('Invalid input!');
        })

        it('checks if input is valid', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 0, 7], [1, 2, 3, 14, 15, 16])).to.equal('Congratulations you win, check your reward!');
        })

        it('checks if input is valid', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 0, 7], [1, 2, 3, 4, 15, 16])).to.equal('Congratulations you win, check your reward!');
        })

        it('checks if input is valid', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 7], [1, 2, 3, 4, 5, 16])).to.equal('Congratulations you win, check your reward!');
        })

        it('checks if input is valid', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
        })
    })

    describe('tests secondChance() method', () => {
        it ('checks if input is valid', () => {
            expect(() => lottery.secondChance('123', [1, 3, 5])).to.throw('Invalid input!');
        })

        it ('checks if input is valid', () => {
            expect(() => lottery.secondChance(123, 1)).to.throw('Invalid input!');
        })

        it ('checks if input is valid', () => {
            expect(() => lottery.secondChance('123', '1')).to.throw('Invalid input!');
        })

        it ('checks if input is valid', () => {
            expect(() => lottery.secondChance(123, [1, 2, 5])).to.not.throw('Invalid input!');
        })

        it ('checks if input is valid', () => {
            expect(lottery.secondChance(1, [1, 2, 5])).to.equal('You win our second chance prize!');
        })

        it ('checks if input is valid', () => {
            expect(lottery.secondChance(3, [1, 2, 5])).to.equal("Sorry, your ticket didn't win!");
        })
    })

});
