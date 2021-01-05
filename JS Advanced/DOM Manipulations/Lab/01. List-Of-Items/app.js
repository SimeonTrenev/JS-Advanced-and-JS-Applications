function addItem() {
   let text = document.getElementById('newItemText');
   
   let newLiElement = document.createElement('li')
   newLiElement.textContent = text.value;
   
   let ulElement = document.getElementById('items')
   ulElement.appendChild(newLiElement);
   
   text.value = ''
}