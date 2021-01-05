function equalNeighbors(matrix){

    let counter = 0;

    for(let row = 0; row < matrix.length;row++){
        for(let col = 0; col < matrix[row].length;col++){
            let currentElement = matrix[row][col]
            if(col !== matrix[row].length - 1){
                let nextElement = matrix[row][col + 1]
                if(currentElement == nextElement){
                    counter++;
                }
            }
            if(row !== matrix.length - 1){
                let underedElement = matrix[row + 1][col]
                if(currentElement == underedElement){
                    counter++;
                }
            }
            
        }
        
    }
    console.log(counter)

}
equalNeighbors([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
)