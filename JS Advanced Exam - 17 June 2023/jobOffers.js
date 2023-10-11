class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {

        let newlyAddedCandidates = [];

        for (let info of candidates) {
            let [name, education, experience] = info.split('-');
            experience = Number(experience);

            if (!this.jobCandidates.includes(name)) {
                this.jobCandidates.push(name);
                this.jobCandidates.push(education);
                this.jobCandidates.push(experience);

                if (!newlyAddedCandidates.includes(name)) {
                    newlyAddedCandidates.push(name);
                }

            } else {
                let candidateIndex = this.jobCandidates.indexOf(name);
                if (this.jobCandidates[candidateIndex + 2] < experience) {
                    this.jobCandidates[candidateIndex + 2] = experience;
                }
            }
        }

        if (newlyAddedCandidates.length > 0) {
            return `You successfully added candidates: ${newlyAddedCandidates.join(', ')}.`;
        }
    }

    jobOffer(chosenPerson) {
        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);
        let candidateIndex = this.jobCandidates.indexOf(name);

        if (!this.jobCandidates.includes(name)) {
            throw new Error(`${name} is not in the candidates list!`);
        } else if (this.jobCandidates[candidateIndex + 2] < minimalExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`)
        } else {
            this.jobCandidates[candidateIndex + 2] = 'hired';
        }
        return `Welcome aboard, our newest employee is ${name}.`;
    }

    salaryBonus(name) {

        let candidateIndex = this.jobCandidates.indexOf(name);

        if (!this.jobCandidates.includes(name)) {
            throw new Error(`${name} is not in the candidates list!`)
        } else {
            if (this.jobCandidates[candidateIndex + 1] === 'Bachelor') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`
            } else if (this.jobCandidates[candidateIndex + 1] === 'Master') {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`
            } else {
                return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`
            }
        }
    }

    candidatesDatabase() {

        if (this.jobCandidates.length === 0) {
            throw new Error('Candidate Database is empty!');
        }

        let output = 'Candidates list:\n';
        let candidatesObj = {};

        for (let i = 0; i < this.jobCandidates.length; i += 3) {
            candidatesObj[this.jobCandidates[i]] = this.jobCandidates[i + 2];
        }

        let sortedCandidateList = Object.entries(candidatesObj).sort((a, b) => a[0].localeCompare(b[0]));
        
        let counter = 0;
        for (let item of sortedCandidateList) {
            counter++;

            if (counter < sortedCandidateList.length) {
                output += `${item.join('-')}\n`;
            } else {
                output += `${item.join('-')}`;
            }
        }
        return output;
    }
}

//  let Jobs = new JobOffers ("Google", "Strategy Analyst");
//  console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("John Jones-8"));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Daniel Jones- Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.salaryBonus("Peter Parker"));

// let Jobs = new JobOffers("Google", "Strategy Analyst");
// console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones-Bachelor-18"]));
// console.log(Jobs.jobOffer("John Doe-8"));
// console.log(Jobs.jobOffer("Peter Parker-4"));
// console.log(Jobs.jobOffer("Jordan Cole-4"));
// console.log(Jobs.salaryBonus("Jordan Cole"));
// console.log(Jobs.salaryBonus("John Doe"));
// console.log(Jobs.candidatesDatabase());


