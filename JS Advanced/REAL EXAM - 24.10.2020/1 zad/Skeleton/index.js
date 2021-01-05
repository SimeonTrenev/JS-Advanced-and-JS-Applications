function solve() {
    let allFirstElements = Array.from(document.getElementsByClassName('form-control'))
    let lectureName = allFirstElements[0];
    let dateName = allFirstElements[1];
    let moduleName = allFirstElements[2];
    let addButton = allFirstElements[3];
    // let modelValue = moduleName.children[1].children[0]
    let trainingSection = document.getElementsByClassName('modules')[0]
    // console.log(trainingSection)
   
    
    
    addButton.addEventListener('click', (e) => {
        e.preventDefault()

        let select = document.querySelector('select[name = "lecture-module"]')
        var dateControl = document.querySelector('input[name="lecture-date"]')
        
        if(lectureName.value === '' || dateControl.value === '' || select.value === 'Select module'){
            return
        }
        
        let newDivClass = document.createElement('div')
        newDivClass.className = 'module'
        let h3Element = document.createElement('h3')
        h3Element.textContent = select.value
        newDivClass.appendChild(h3Element)

        let ulElement = document.createElement('ul')
        let liElement = document.createElement('li')
        liElement.className = 'flex'
        let h4Element = document.createElement('h4')
        h4Element.textContent = `${lectureName.value} - ${dateControl.value}`
        let delButton = document.createElement('button')
        delButton.className = 'red'
        delButton.textContent = 'Del'

        liElement.appendChild(h4Element)
        liElement.appendChild(delButton)

        ulElement.appendChild(liElement)

        newDivClass.appendChild(ulElement)

        trainingSection.appendChild(newDivClass)

        delButton.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.parentElement.parentElement.remove()
        })

       
    })
};