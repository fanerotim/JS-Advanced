class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { 'child': 150, 'student': 300, 'collegian': 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {

        for (let curName of this.listOfParticipants) {
            if (curName.name === name) {
                return `The ${name} is already registered at the camp.`
            }
        }

        if (this.priceForTheCamp.hasOwnProperty(condition)) {
            if (this.priceForTheCamp[condition] > money) {
                return `The money is not enough to pay the stay at the camp.`;
            }
            this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
            return `The ${name} was successfully registered.`
        }
        throw new Error(`Unsuccessful registration at the camp.`);
    }

    unregisterParticipant(name) {

        for (let participant of this.listOfParticipants) {
            if (participant.name === name) {
                let participantIndex = this.listOfParticipants.indexOf(participant);
                this.listOfParticipants.splice(participantIndex, 1);
                return `The ${name} removed successfully.`;
            }
        }
        throw new Error(`The ${name} is not registered in the camp.`);
    }

    timeToPlay(typeOfGame, participant1, participant2) {

        switch (typeOfGame) {
            case 'WaterBalloonFights':

                let curPlayers = [participant1, participant2];
                let playerOneIndex;
                let playerTwoIndex;

                for (let participant of this.listOfParticipants) {
                    if (participant.name === participant1) {
                        playerOneIndex = this.listOfParticipants.indexOf(participant);
                    } else if (participant.name === participant2) {
                        playerTwoIndex = this.listOfParticipants.indexOf(participant);
                    }
                }

                if (playerOneIndex === undefined || playerTwoIndex === undefined) {
                    throw new Error(`Invalid entered name/s.`);
                }

                if (this.listOfParticipants[playerOneIndex].condition === this.listOfParticipants[playerTwoIndex].condition) {
                    if (this.listOfParticipants[playerOneIndex].power > this.listOfParticipants[playerTwoIndex].power) {
                        this.listOfParticipants[playerOneIndex].wins++;
                        return `The ${participant1} is winner in the game ${typeOfGame}.`
                    } else if (this.listOfParticipants[playerOneIndex].power < this.listOfParticipants[playerTwoIndex].power) {
                        this.listOfParticipants[playerTwoIndex].wins++;
                        return `The ${participant2} is winner in the game ${typeOfGame}.`
                    } else {
                        return `There is no winner.`
                    }
                } else {
                    throw new Error(`Choose players with equal condition.`);
                }

            case 'Battleship':

                for (let participant of this.listOfParticipants) {
                    if (participant.name === participant1) {
                        participant.power += 20;
                        return `The ${participant1} successfully completed the game ${typeOfGame}.`
                    }
                }
                throw new Error(`Invalid entered name/s.`);
        }

    }

    toString() {
        let output = '';
        output += `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}\n`;
        this.listOfParticipants.sort((a, b) => b.wins - a.wins);
        let sortedParticipantsArr = [];

        for (let participant of this.listOfParticipants) {
            sortedParticipantsArr.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`)
        }
        output += sortedParticipantsArr.join('\n');
        return output;
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
