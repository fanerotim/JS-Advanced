function timeToWalk(steps, footLength, speed) {

    let distance = steps * footLength;
    let restTime = Math.floor(distance / 500);
    let time = distance / (speed * 1000) * 60;
    time += restTime;

    let hours = 0;

    if (time >= 60) {   
        hours = Math.floor(time / 60);
        time -= hours * 60;
    }

    let minutes = 0;
    minutes = Math.floor(time % 60);
    time -= minutes;

    let seconds = 0;
    seconds = Math.round(time * 60);

    if (hours.toString().length === 1) {
        hours = `0${hours}`
    }

    if (seconds.toString().length === 1) {
        seconds = `0${seconds}`
    }

    if (minutes.toString().length === 1) {
        minutes = `0${minutes}`
    }

    console.log(`${hours}:${minutes}:${seconds}`)
}

timeToWalk(8000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);
