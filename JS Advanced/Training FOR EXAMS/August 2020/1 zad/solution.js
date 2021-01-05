function solve() {
    let parentDiv = Array.from(document.querySelectorAll('#container'))[0]
    let nameInput = parentDiv.children[0]
    let hallInput = parentDiv.children[1]
    let ticketPriceInput = parentDiv.children[2]
    let onScreenButton = parentDiv.children[3]

    onScreenButton.addEventListener('click', function(e) {
        e.preventDefault();
        if(nameInput.value === '' || hallInput.value === '' || ticketPriceInput.value === ''){
            return;
        }

        if(isNaN(Number(ticketPriceInput.value))){
            return;
        }

        let liElement = document.createElement('li')
        let spanElement = document.createElement('span')
        spanElement.textContent = nameInput.value;
        let strongElement = document.createElement('strong')
        strongElement.textContent = `Hall: ${hallInput.value}`
        
        liElement.appendChild(spanElement)
        liElement.appendChild(strongElement)

        let divElement = document.createElement('div')
        let priceStrong = document.createElement('strong')
        priceStrong.textContent = ticketPriceInput.value
        let newInputElement = document.createElement('input')
        newInputElement.placeholder = 'Tickets Sold'
        let archiveButton = document.createElement('button')
        archiveButton.textContent = 'Archive'

        divElement.appendChild(priceStrong)
        divElement.appendChild(newInputElement)
        divElement.appendChild(archiveButton)

        liElement.appendChild(divElement)

        let moviesSection = document.getElementById('movies')
        let ulMovies = moviesSection.lastElementChild;

        ulMovies.appendChild(liElement)

        archiveButton.addEventListener('click', function(e) {
            e.target.parentElement.parentElement.remove();
            let archiveSection = document.getElementById('archive')
            let ulArchive = archiveSection.children[1];
            let clearButton = archiveSection.lastElementChild;

            if(newInputElement.value === ''){
                return;
            }

            if(isNaN(Number(newInputElement.value))){
                return;
            }
            let newPrice = (Number(newInputElement.value) * Number(priceStrong.textContent)).toFixed(2)
            
            let lastLiElement = document.createElement('li')
            let span = document.createElement('span')
            span.textContent = spanElement.textContent
            let finalPriceStrong = document.createElement('strong')
            finalPriceStrong.textContent = `Total amount: ${newPrice}`
            let deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'

            lastLiElement.appendChild(span)
            lastLiElement.appendChild(finalPriceStrong)
            lastLiElement.appendChild(deleteButton)
           

            ulArchive.appendChild(lastLiElement)

            deleteButton.addEventListener('click', function(e){
                e.target.parentElement.remove()
            })

            clearButton.addEventListener('click', function(e) {
                lastLiElement.remove();
            })
        })

        nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = '';
    })
}