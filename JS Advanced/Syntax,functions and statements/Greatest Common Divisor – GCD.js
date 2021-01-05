function greatest(firstNum, secondNum){

    let result = 0;

     if(firstNum % 9 === 0 && secondNum % 9 === 0){
        result = 9
    }else if(firstNum % 8 === 0 && secondNum % 8 === 0){
        result = 8
    }else if(firstNum % 7 === 0 && secondNum % 7 === 0){
        result = 7
    }else if(firstNum % 6 === 0 && secondNum % 6 === 0){
        result = 6
    }else if(firstNum % 5 === 0 && secondNum % 5 === 0){
        result = 5
    }else if(firstNum % 4 === 0 && secondNum % 4 === 0){
        result = 4
    }else if(firstNum % 3 === 0 && secondNum % 3 === 0){
        result = 3
    }else if(firstNum % 2 === 0 && secondNum % 2 === 0){
        result = 2
    }else{
        result = 1
    }
    console.log(result)
}
greatest(2154, 458)