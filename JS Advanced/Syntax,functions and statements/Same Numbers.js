function sameNumbers(number){

    let sumOfNumbers = 0;
    let isSame = true;
    number = number.toString()

    for(let i = 0; i < number.length;i++){
        let currentDigit = Number(number[i]);
        let nextDigit = Number(number[i + 1])
        
        if(i !== number.length - 1){
            if(currentDigit !== nextDigit){
                isSame = false;
            }
        }
        sumOfNumbers += currentDigit
    }

    console.log(isSame)
    console.log(sumOfNumbers)

    // while(number > 0){
    //     let currentDigit = number % 10;
    //     sumOfNumbers += currentDigit
    //     number = parseInt(number / 10)
       
    // }
    // console.log(sumOfNumbers)
}
sameNumbers(1234)