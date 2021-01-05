function diagonalAttack(matrix){

    let leftDiagonal = 0;
    let rightDiagonal = 0;
    let counterForLeft = 0;
    

    for(let i = 0; i < matrix.length;i++){
        let currentNum = matrix[i].split(' ')
       for(let j = 0; j < currentNum.length;j++){
           leftDiagonal += Number(currentNum[counterForLeft])
           rightDiagonal += Number(currentNum[currentNum.length - 1 - counterForLeft])
           break;
       }
       counterForLeft++;
    }

    let counterForRight = 0;

    for(let i = 0 ; i < matrix.length;i++){
        let currentNum = matrix[i].split(' ')
        if(leftDiagonal === rightDiagonal){
            for(let j = 0; j < currentNum.length;j++){
                if(j !== counterForRight && j !== currentNum.length - 1 - counterForRight){
                    currentNum[j] = leftDiagonal;
                }
            }
        }
        console.log(currentNum.join(' '))
        counterForRight++;
    }
    
    

}
diagonalAttack(['5 3 12 3 1',
               '11 4 23 2 5',
              '101 12 3 21 10',
                '1 4 5 2 2',
                '5 22 33 11 1']
)