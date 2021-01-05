function deleteByEmail() {
    let input = document.getElementsByName('email')[0].value.trim();
    let trs = document.getElementsByTagName('tr');
    let trToBeDeleted = '';
    let resultElement = document.getElementById('result');

    for(let element of trs){
        let td = element.children[1]
        if(td.textContent === input){
            trToBeDeleted = element
            resultElement.innerText = 'Deleted.'
            trToBeDeleted.remove()
        }else{
            resultElement.innerText = 'Not found.'
        }
    }
}