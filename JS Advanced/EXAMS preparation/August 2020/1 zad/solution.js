function solve() {
    let inputDiv = document.getElementById('container')

    let nameInput = inputDiv.children[0];
    let hallInput = inputDiv.children[1];
    let ticketPriceInput = inputDiv.children[2];
    let onScreenButton = inputDiv.children[3];

    onScreenButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(nameInput.value === '' || hallInput.value === '' || ticketPriceInput.value === ''){
            return
        }

        if(!Number(ticketPriceInput.value)){
            return
        }

        let moviesSection = document.getElementById('movies')
        let ulForMoviesSection = moviesSection.lastElementChild;

        let liElement = document.createElement('li')
        let spanForMovieName = document.createElement('span')
        spanForMovieName.textContent = nameInput.value;
        let strongForHall = document.createElement('strong')
        strongForHall.textContent = `Hall: ${hallInput.value}`
        liElement.appendChild(spanForMovieName);
        liElement.appendChild(strongForHall);

        let divElement = document.createElement('div')
        let priceStrong = document.createElement('strong');
        priceStrong.textContent = ticketPriceInput.value;
        let ticketsInput = document.createElement('input')
        ticketsInput.placeholder = 'Tickets Sold'
        let archiveButton = document.createElement('button');
        archiveButton.textContent = 'Archive';
        divElement.appendChild(priceStrong)
        divElement.appendChild(ticketsInput)
        divElement.appendChild(archiveButton)

        liElement.appendChild(divElement)

        ulForMoviesSection.appendChild(liElement)

        archiveButton.addEventListener('click', (e) => {
            
            if(!Number(ticketsInput.value)){
                return
            }

            let archiveSection = document.getElementById('archive')
            let ulForArchiveSection = archiveSection.children[1];

            let newLiElement = document.createElement('li')
            let totalSum = document.createElement('strong')
            let sum = ticketsInput.value * Number(priceStrong.innerText)
            totalSum.textContent = `Total amount: ${sum.toFixed(2)}`
            let deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'

            newLiElement.appendChild(spanForMovieName)
            newLiElement.appendChild(totalSum)
            newLiElement.appendChild(deleteButton)

            ulForArchiveSection.appendChild(newLiElement)

            e.target.parentElement.parentElement.remove()

            deleteButton.addEventListener('click', (e) => {
                let parent = e.target.parentElement
                parent.remove()
            })

            let clearButton = archiveSection.children[2]

            clearButton.addEventListener('click', (e) => {
                newLiElement.remove()
            })

        })


        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';

    })
}