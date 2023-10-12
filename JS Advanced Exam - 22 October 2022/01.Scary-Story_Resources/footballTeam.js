class footballTeam {

    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        
        let playersToAdd = [];

        for (let playerInfo of footballPlayers) {
            let [name, age, playerValue] = playerInfo.split('/');
            age = Number(age);
            playerValue = Number(playerValue);
            
            let playerToCheck = {name, age, playerValue};
            let isFound = false;

            for (let currentPlayer of this.invitedPlayers) {
                if (currentPlayer.name === name) {
                    isFound = true;
                    if (currentPlayer.playerValue < playerValue) {
                        currentPlayer.playerValue = playerValue;
                    }
                }  
            }

            if (isFound === false) {
                this.invitedPlayers.push(playerToCheck);
            }

            if (!playersToAdd.includes(name)) {
                playersToAdd.push(name);
            }
        }
        return `You successfully invite ${playersToAdd.join(', ')}.`
    }

    signContract(selectedPlayer) {
        
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let isFound = false;

        for (let player of this.invitedPlayers) {
            if (player.name === name) {
                isFound = true;

                if (player.playerValue > playerOffer) {
                    let difference = player.playerValue - playerOffer;
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`)
                }

                player.playerValue = 'Bought';
                return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
            }
        }

        if (isFound === false) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
    }

    ageLimit(name, age) {
        age = Number(age);
        let isFound = false;

        for (let currentPlayer of this.invitedPlayers) {
            if (currentPlayer.name === name) {
                isFound = true;
                let difference = 0;

                if (currentPlayer.age < age) {
                    difference = age - currentPlayer.age;

                    if (difference < 5) {
                        return `${name} will sign a contract for ${difference} years with ${this.clubName} in ${this.country}!`
                    } else {
                        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                    }
                } else {
                    return `${name} is above age limit!`
                }


            }
        }

        if (isFound === false) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
    }

    transferWindowResult() {
        let output = 'Players list:\n';

        let sortedPlayers = this.invitedPlayers.sort((a, b) => a.name.localeCompare(b.name));
        let sortedPlayersArr = [];

        for (let player of sortedPlayers) {
            sortedPlayersArr.push(`Player ${player.name}-${player.playerValue}`)
        }

        output += sortedPlayersArr.join('\n');
        return output;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Lionel Messi/60"));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.signContract("Barbukov/10"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.ageLimit("Lionel Messi", 33 ));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.ageLimit("Pau Torres", 26));
// console.log(fTeam.signContract("Kylian Mbappé/240"));

// let fTeam = new footballTeam("Barcelona", "Spain");
// console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
// console.log(fTeam.signContract("Kylian Mbappé/240"));
// console.log(fTeam.ageLimit("Kylian Mbappé", 30));
// console.log(fTeam.transferWindowResult());


