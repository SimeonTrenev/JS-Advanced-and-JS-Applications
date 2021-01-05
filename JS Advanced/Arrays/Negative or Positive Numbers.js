function negativeOrPossitive(array){

    let newArray = [];

    array.forEach(number => {
        if(number < 0){
            newArray.unshift(number)
        }else{
            newArray.push(number)
        }
    })

    console.log(newArray.join('\n'))

}
negativeOrPossitive([7, -2, 8, 9])