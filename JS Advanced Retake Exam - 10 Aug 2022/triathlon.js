class Triathlon {

    constructor(competitionName) {
        this.competitionName = competitionName;
        this.participants = {};
        this.listOfFinalists = [];
    }

    addParticipant(participantName, participantGender) {

        if (this.participants.hasOwnProperty(participantName)) {
            return `${participantName} has already been added to the list`
        }

        this.participants[participantName] = participantGender;
        return `A new participant has been added - ${participantName}`
    }

    completeness(participantName, condition) {

        if (!this.participants.hasOwnProperty(participantName)) {
            throw new Error(`${participantName} is not in the current participants list`)
        }

        if (condition < 30) {
            throw new Error(`${participantName} is not well prepared and cannot finish any discipline`)
        };

        let numberOfDisciplines = Math.round(condition / 30);

        if (numberOfDisciplines < 3) {
            return `${participantName} could only complete ${numberOfDisciplines} of the disciplines`;
        }

        let currentParticipant = {participantName, participantGender: this.participants[participantName]};
        delete this.participants[participantName];
        this.listOfFinalists.push(currentParticipant);
        return `Congratulations, ${participantName} finished the whole competition`;
    }

    rewarding(participantName) {

        for (let participant of this.listOfFinalists) {
            if (participant.participantName === participantName) {
                return `${participantName} was rewarded with a trophy for his performance`
            }
        }
        return `${participantName} is not in the current finalists list`
    }

    showRecord(criteria) {

        if (this.listOfFinalists.length === 0) {
            return `There are no finalists in this competition`;
        }

        let hasFinished = false;
        for (let finalist of this.listOfFinalists) {
            if (finalist.participantGender === 'male' || finalist.participantGender === 'female' || finalist.participantGender === 'all') {
                hasFinished = true;

                if (criteria !== 'all' && finalist.participantGender === criteria) {
                    return `${finalist.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
                }
            }
        }

        if (hasFinished === false) {
            return `There are no ${criteria}'s that finished the competition`
        }

        let output = `List of all ${this.competitionName} finalists:\n`;

        let sortedFinalists = this.listOfFinalists.sort((a, b) => a.participantName.localeCompare(b.participantName));
        let finalistsArr = [];

        sortedFinalists.forEach(participant => {
            finalistsArr.push(participant.participantName);
        })

        output += finalistsArr.join('\n');
        return output;
    }
}

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("Peter", "male"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.addParticipant("George", "male"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 70));
// console.log(contest.completeness("George", 20));

// const contest = new Triathlon("Dynamos");
// console.log(contest.showRecord("all"));

// const contest = new Triathlon("Dynamos");
// console.log(contest.addParticipant("Peter", "male"));
// console.log(contest.addParticipant("Sasha", "female"));
// console.log(contest.completeness("Peter", 100));
// console.log(contest.completeness("Sasha", 90));
// console.log(contest.rewarding("Peter"));
// console.log(contest.rewarding("Sasha"));
// console.log(contest.showRecord("all"));

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));



