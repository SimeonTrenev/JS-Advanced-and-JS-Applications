function addItem() {

    //select items
    let textInputMenu = document.getElementById('newItemText');
    let valueInputMenu = document.getElementById('newItemValue');
    let optionElement = document.createElement('option');
    
    //code logic
    optionElement.innerText = textInputMenu.value
    optionElement.value = valueInputMenu.value

    let selectItem = document.getElementById('menu');
    selectItem.appendChild(optionElement);

    textInputMenu.value = '';
    valueInputMenu.value = '';

}