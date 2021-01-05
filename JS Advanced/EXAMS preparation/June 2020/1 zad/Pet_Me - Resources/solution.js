function solve() {
    let buttonElement = document.querySelector('#container button');
    let inputElements = Array.from(document.querySelectorAll('#container input'));
    let [nameElement, ageElement, kindElement, ownerElement] = inputElements;
    let adoptionUlElement = document.querySelector('#adoption ul');
    let adoptedUlElement = document.querySelector('#adopted ul');
 
    buttonElement.addEventListener('click', e => {
        e.preventDefault();
 
        if (!inputElements.every(x => x.value)) {
            return;
        }
 
        if (!Number(ageElement.value)) { // What if cat is 0 year old?
            return;
        }
 
        // Create list item 
        let liElement = document.createElement('li');
        let pElement = document.createElement('p');
        let spanElement = document.createElement('span');
        let petButtonElement = document.createElement('button');
 
        pElement.innerHTML = `<strong>${nameElement.value}</strong> is a <strong>${ageElement.value}</strong> year old <strong>${kindElement.value}</strong>`;
        spanElement.textContent = `Owner: ${ownerElement.value}`;
        petButtonElement.textContent = `Contact with owner`;
        
        liElement.appendChild(pElement);
        liElement.appendChild(spanElement);
        liElement.appendChild(petButtonElement);
 
        // Add list item to #adoption
        adoptionUlElement.appendChild(liElement);
        
        // clear all input fields
        nameElement.value = '';
        ageElement.value = '';
        kindElement.value = '';
        ownerElement.value = '';
 
        // Attach event handler
        petButtonElement.addEventListener('click', petButtonClick);
    });
 
    function petButtonClick(e) {
        let parent = e.currentTarget.parentElement;
 
        e.currentTarget.remove();
 
        let divElement = document.createElement('div');
        let inputElement = document.createElement('input');
        let takeItButtonElement = document.createElement('button');
 
        inputElement.setAttribute('placeholder', 'Enter your names');
        takeItButtonElement.textContent = 'Yes! I take it!';
 
        divElement.appendChild(inputElement);
        divElement.appendChild(takeItButtonElement);
 
        parent.appendChild(divElement);
 
        takeItButtonElement.addEventListener('click', onTakeItButtonClick);
    }
 
    function onTakeItButtonClick(e) {
        let parentButtonElement = e.currentTarget.parentElement
        let liElement = parentButtonElement.parentElement;
 
        let newOwnerInputElement = liElement.querySelector('input');
        let ownerNameSpanElement = liElement.querySelector('span');
 
        let newOwnerName = newOwnerInputElement.value;
 
        if (!newOwnerName) {
            return;
        }
 
        ownerNameSpanElement.textContent = `New Owner: ${newOwnerName}`;
 
        adoptedUlElement.appendChild(liElement);
 
        parentButtonElement.remove();
 
        let checkedButtonElement = document.createElement('button');
        checkedButtonElement.textContent = 'Checked';
 
        liElement.appendChild(checkedButtonElement);
 
        checkedButtonElement.addEventListener('click', e => {
            // liElement.remove();
            e.currentTarget.parentElement.remove();
        });
    } 
}


function solve() {
    let allDivInputs = Array.from(document.querySelector('#container input'))
    let nameInput = allDivInputs[0];
    let ageInput = allDivInputs[1];
    let kindInput = allDivInputs[2];
    let currentOwnerInput = allDivInputs[3]
    let addButton = document.querySelector(`#container button`)
    
    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        if(nameInput.value === '' || ageInput.value === '' || kindInput.value === '' || currentOwnerInput.value === '') {
            return;
        }

        if(!Number(ageInput.value)){
            return;
        }

        let adoptionSection = document.querySelectorAll('#adoption')[0]
        let ulAdoptionSection = adoptionSection.children[1];
       
        let liElements = document.createElement('li');
        let firstParagraph = document.createElement('p')


        firstParagraph.innerHTML = `<strong>${nameInput.value}</strong> is a <strong>${ageInput.value}</strong> year old <strong>${kindInput.value}</strong>`

        liElements.appendChild(firstParagraph)

        let ownerSpanElements = document.createElement('span');
        ownerSpanElements.textContent = 'Owner: ' + currentOwnerInput.value;
        let contactButton = document.createElement('button');
        contactButton.textContent = 'Contact with owner'

        liElements.appendChild(ownerSpanElements)
        liElements.appendChild(contactButton)

        ulAdoptionSection.appendChild(liElements)

        contactButton.addEventListener('click', (e) => {
            e.target.remove();
            let newDivElement = document.createElement('div');
            let inputField = document.createElement('input');
            let takeItButton = document.createElement('button')
            takeItButton.textContent = 'Yes! I take it!'
            

            inputField.placeholder = 'Enter your names'
            
            newDivElement.appendChild(inputField)
            newDivElement.appendChild(takeItButton)
            

            liElements.appendChild(newDivElement)

            takeItButton.addEventListener('click', (e) => {
                if(inputField.value === ''){
                    return;
                }

                let adoptedSection = document.querySelectorAll('#adopted')[0]
                let ulAdoptedSection = adoptedSection.children[1];

                ownerSpanElements.textContent = 'New Owner:' + inputField.value
                takeItButton.textContent = 'Checked'
                ulAdoptedSection.appendChild(liElements)
                inputField.remove()

                takeItButton.addEventListener('click', (e) => {
                    // let parent = e.target.parentElement.parentElement;
                    // parent.remove()
                    liElements.remove()
                })
            })
            
        })

        nameInput.value = '';
        ageInput.value = '';
        kindInput.value = '';
        currentOwnerInput.value = '';
    })
}
