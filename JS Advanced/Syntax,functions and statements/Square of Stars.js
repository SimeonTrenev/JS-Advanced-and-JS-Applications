function squareOfStars(numberOfStars){

    if(numberOfStars === undefined){
        numberOfStars = 5
    }

    let result = ''
    
    for(let i = 1; i <= numberOfStars;i++){
        result += '*' + ' '
    }

    for(let i = 1; i <= numberOfStars;i++){
        console.log(result)
    }
    

}
squareOfStars(3)