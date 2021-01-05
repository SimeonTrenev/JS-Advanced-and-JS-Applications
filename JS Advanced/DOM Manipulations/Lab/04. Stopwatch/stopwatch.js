function stopwatch() {

    let seconds = 0;
    let minutes = 0;

    let intervalId;
    let startButton = document.getElementById('startBtn')
    let stopButton = document.getElementById('stopBtn')
    let divTime = document.getElementById('time')

    function formatOutput(value){
        let text = value.toString();
        if(value < 10){
            text = '0' + text;
        }
        return text;
    }

    function setTimeDiv (minutes, seconds) {
        divTime.innerText = `${formatOutput(minutes)}:${formatOutput(seconds)}`
    }

    function startButtonHandler(e) {
        minutes = 0;
        seconds = 0;

        setTimeDiv(minutes, seconds);

        startButton.setAttribute('disabled', true)
        stopButton.removeAttribute('disabled')

        intervalId = setInterval(function () {
            seconds++;

            if(seconds > 59){
                minutes++;
                seconds = 0;
            }

            setTimeDiv(minutes,seconds)
        }, 1000)
    }

    function stopButtonHandler (e) {
        stopButton.setAttribute('disabled', true)
        startButton.removeAttribute('disabled')
        clearInterval(intervalId)
    }

    startButton.addEventListener('click', startButtonHandler)
    stopButton.addEventListener('click', stopButtonHandler)
}