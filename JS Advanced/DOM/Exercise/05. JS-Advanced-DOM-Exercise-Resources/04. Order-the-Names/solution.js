function solve() {

    let input = document.getElementsByTagName('input')[0];
    let button = document.getElementsByTagName('button')[0];
    

    let database = {};
    let index = 0

    for(let i = 65; i <= 90;i++){
        let currentChar = String.fromCharCode(i)
        database[currentChar] = index
        index++;
    }

    // key - A , value : 0 , key : B , value : 1 ....
    
    
    button.addEventListener('click', () => {
        let array = document.getElementsByTagName('li'); // document.getElementsByTagName('ol')[0].children
        

        let currentName = input.value.toString()[0].toUpperCase() + input.value.slice(1).toLowerCase()
        let capitalLetter = currentName[0]

        if(database[capitalLetter] !== undefined){
            let currentIndex = database[capitalLetter]
            let currentElement = array[currentIndex]
            
        

        if(currentElement.textContent !== ''){
            currentElement.textContent += ', '
        }

        currentElement.innerText += currentName
    }

        input.value = '';
    })
    
}
