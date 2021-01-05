function timeToWalk(numberOfSteps, lengthOfStepInMetres, studentSpeedInKmPerHours){

    let distance = numberOfSteps * lengthOfStepInMetres
    let time = Math.round(distance / studentSpeedInKmPerHours * 3.6)
    time += Math.floor(distance / 500) * 60

    let seconds = time % 60;
    time -= seconds;
    time /= 60
    let minutes = time % 60;
    time -= minutes;
    time /= 60;
    let hours = time;

    console.log(`${sorted(hours)}:${sorted(minutes)}:${sorted(seconds)}`)

    function sorted(number){
        if(number < 10){
            return `0${number}`
        }else{
            return number
        }
    }
    

}
timeToWalk(4000, 0.60, 5)