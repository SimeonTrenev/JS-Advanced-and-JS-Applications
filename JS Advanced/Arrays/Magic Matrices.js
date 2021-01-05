function magicMatrices(matrix){

    // let isMagic = true;

    // for(let col = 0; col < matrix.length;col++){
    //     let rowSum = 0;
    //     let colSum = 0;
    //     for(let row = 0; row < matrix.length;row++){
    //         rowSum += matrix[col][matrix.length - row - 1]
    //         colSum += matrix[row][matrix.length - col - 1]
    //     }
        
    //     if(rowSum !== colSum){
    //         isMagic = false;
    //         break;
    //     }
        
    // }

    // if(isMagic){
    //     console.log('true')
    // }else{
    //     console.log('false')
    // }

    let sum = matrix[0].reduce((a,b) => a + b, 0)
    let isMagic = true;

    for(let i = 0; i < matrix.length;i++){
        let sumRow = matrix[i].reduce((a,b) => a + b, 0)

        let sumCol = matrix.map(x => x[i]).reduce((a,b) => a + b, 0);

        if(sumRow !== sum || sumCol !== sum){
            isMagic = false;
            break;
        }
    }

    console.log(isMagic)



}
magicMatrices([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   
   
   
   )