function solve() {
    let initialSection = Array.from(document.querySelectorAll('#container'))[0]
    let nameInput = initialSection.children[0]
    let ageInput = initialSection.children[1]
    let kindInput = initialSection.children[2]
    let currentOwner = initialSection.children[3]
    let addButton = initialSection.children[4]
    let adoptionSection = document.getElementById('adoption');
    let ulAdoption = adoptionSection.lastElementChild;

    addButton.addEventListener('click', function(e) {
        e.preventDefault();

        if(nameInput.value === '' || ageInput.value === '' || kindInput.value === '' || currentOwner.value === ''){
            return;
        }

        if(isNaN(Number(ageInput.value))){
            return;
        }

        let grandLiElement = document.createElement('li');
        let paragraphElement = document.createElement('p');
        paragraphElement.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`

        grandLiElement.appendChild(paragraphElement)

        let spanForOwner = document.createElement('span')
        spanForOwner.textContent = `Owner: ${currentOwner.value}`
        let contactButton = document.createElement('button');
        contactButton.textContent = 'Contact with owner'

        grandLiElement.appendChild(spanForOwner)
        grandLiElement.appendChild(contactButton)

        ulAdoption.appendChild(grandLiElement)

        contactButton.addEventListener('click', function(e) {
            e.target.remove();

            let divElement = document.createElement('div')
            let inputLine = document.createElement('input')
            inputLine.placeholder = 'Enter your names'
            let yesButton = document.createElement('button')
            yesButton.textContent = 'Yes! I take it!'

            divElement.appendChild(inputLine)
            divElement.appendChild(yesButton)

            grandLiElement.appendChild(divElement)

            yesButton.addEventListener('click', function(e) {
                let adoptedSection = document.getElementById('adopted')
                let ulAdoptedSection = adoptedSection.lastElementChild;

                if(inputLine.value === ''){
                    return;
                }

                e.target.parentElement.remove()
                spanForOwner.remove()

                let newSpanElement = document.createElement('span')
                newSpanElement.textContent = `New Owner: ${inputLine.value}`
                let newButton = document.createElement('button')
                newButton.textContent = 'Checked'

                grandLiElement.appendChild(newSpanElement)
                grandLiElement.appendChild(newButton)

                ulAdoptedSection.appendChild(grandLiElement)

                newButton.addEventListener('click', function(e) {
                    e.target.parentElement.parentElement.remove()
                })
            })

        })


        nameInput.value = '';
        ageInput.value = '';
        kindInput.value = '';
        currentOwner.value = '';
    })
    
}

