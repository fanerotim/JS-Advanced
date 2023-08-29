function createAssemblyLine() {

    let myObj = {
        hasClima: (x) => {
            x.temp = 21,
                x.tempSettings = 21,
                x.adjustTemp = () => {
                    if (x.temp < x.tempSettings) {
                        x.temp += 1;
                    } else if (x.temp > x.tempSettings) {
                        x.temp -= 1;
                    }
                }
        },

        hasAudio: (x) => {
            x.currentTrack = {
                'name': null,
                'artist': null,
            },
                x.nowPlaying = () => {
                    if (x.currentTrack.name !== null && x.currentTrack.artist !== null) {
                        console.log(`Now playing '${currentTrack.name}' by ${currentTrack.artist}`)
                    }
                }
        },

        hasParktronic: (x) => {
            x.checkDistance = (distance) => {
                if (distance < 0.1) {
                    console.log('Beep! Beep! Beep!')
                } else if (distance < 0.25) {
                    console.log('Beep! Beep!')
                } else if (distance < 0.5) {
                    console.log("Beep!");
                } else {
                    console.log('');
                }
            }
        }
    }

    return myObj;
}

createAssemblyLine()



