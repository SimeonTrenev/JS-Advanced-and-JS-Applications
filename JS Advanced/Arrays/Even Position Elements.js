function evenPositinElements(array){

    let newArray = [];

    // for(let i = 0; i < array.length;i++){
    //     let currentElement = array[i]

    //     if(i % 2 === 0){
    //         newArray.push(currentElement)
    //     }
    // }

    array.forEach((element, index) => {
        if(index % 2 === 0){
            newArray.push(element)
        }
    })

    

    console.log(newArray.join(' '))
}
evenPositinElements(['20', '30', '40'])