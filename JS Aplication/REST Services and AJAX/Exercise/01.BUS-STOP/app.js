function getInfo() {
    let input = document.getElementById('stopId');
    let validBusses = ['1287', '1308', '1327', '2334'];
    let stopInfo = document.getElementById('stopName')
    let ulForBusses = document.getElementById('buses')

    if(!validBusses.includes(input.value)){
        stopInfo.textContent = 'Error';
        ulForBusses.textContent = ''
        return;
    }

    const url = `https://judgetests.firebaseio.com/businfo/${input.value}.json`

    fetch(url)
    .then(response => response.json())
    .then(date => {
        stopInfo.textContent = date.name;
        Object.entries(date.buses).forEach(buss => {
            let liElement = document.createElement('li')
            liElement.textContent = `Bus ${buss[0]} arrives in ${buss[1]} minutes`
            ulForBusses.appendChild(liElement)
        })
    })

    input.value = '';
}