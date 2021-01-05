function rotateArray(array){

    let numberOfRotation = Number(array.pop());
    numberOfRotation %= array.length;

    for(let i = 0; i < numberOfRotation; i++){
        let lastElement = array.pop();
        array.unshift(lastElement)
    }

    console.log(array.join(' '))

}
rotateArray(['1', 
'2', 
'3', 
'4', 
'2']
)