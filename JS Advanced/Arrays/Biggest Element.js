function biggestElement(matrix){

    // let biggestNumber = Number.MIN_SAFE_INTEGER;

    // for(let elements of matrix){
    //     for(let numbers of elements){
    //         if(numbers > biggestNumber){
    //             biggestNumber = numbers
    //         }
    //     }
    // }
    // console.log(biggestNumber)

    let concated = matrix[0]
    .concat(...matrix)
    .sort((a, b) => b - a)
    .slice(0,1)
    .join('')

    console.log(concated)

}
biggestElement([[20, 50, 10],
    [8, 33, 145]]
   )