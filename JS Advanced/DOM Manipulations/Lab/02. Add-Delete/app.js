function addItem() {
    let text = document.getElementById('newText');
    let ulElement = document.getElementById('items')
    
    
    let newLiElement = document.createElement('li')
    let aElement = document.createElement('a')
    aElement.textContent = '[Delete]'
    aElement.href = `#`

    newLiElement.textContent = text.value + ' ' ;
    newLiElement.appendChild(aElement)

    aElement.addEventListener('click', deleteFunction)
    
    
    ulElement.appendChild(newLiElement);
    
    text.value = ''

    function deleteFunction(e) {
        let parentElement = e.target.parentElement

        parentElement.remove()
    }
}