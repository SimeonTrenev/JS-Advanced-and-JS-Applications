function attachEventsListeners() {

   let days = document.getElementById('days')
   let hours = document.getElementById('hours')
   let minutes = document.getElementById('minutes')
   let seconds = document.getElementById('seconds')

   let secondsBtn = document.getElementById('secondsBtn')
   secondsBtn.addEventListener('click', () => {
       convert(Number(seconds.value)) 
    });

    let daysBtn = document.getElementById('daysBtn')
    daysBtn.addEventListener('click', () => {
        convert(Number(days.value) * 86400)
    })

    let hoursBtn = document.getElementById('hoursBtn')
    hoursBtn.addEventListener('click', () => {
        convert(Number(hours.value) * 3600)
    })

    let minutesBtn = document.getElementById('minutesBtn')
    minutesBtn.addEventListener('click', () => {
        convert(Number(minutes.value) * 60)    
    })

   function convert (sec) {
       let day = sec / 86400;
       let hour = sec / 3600;
       let min = sec / 60;

       days.value = day;
       hours.value = hour;
       minutes.value = min
       seconds.value = sec
   }
}