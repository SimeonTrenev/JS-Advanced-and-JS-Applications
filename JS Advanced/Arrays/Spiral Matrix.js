function spiralMatrix(n){

    // let matrix = []

    // for(let i = 0; i < rows;i++){
    //     matrix.push([])
    // }
    // let counter = 0;
    // for(let i = 0; i < rows;i++){
    //     for(let j = 0; j < cols;j++){
    //         matrix[i][j] = j + 1
    //         matrix[j][i] = matrix[i][j] + 1
    //     }
    //     counter++;
    // }
    // console.log(matrix)

    
        let total = n*n;
        let result= [];
     
        for(let i=0;i<n;i++) {
            let rs = [];
            for(let j=0;j<n;j++) {
                rs.push(0);
            }
            result.push(rs);
        }
     
        let x=0;
        let y=0;
        let step = 0;
        for(let i=0;i<total;){
            while(y+step<n){
                i++;
                result[x][y]=i;
                y++;
     
            }
            y--;
            x++;
     
            while(x+step<n){
                i++;
                result[x][y]=i;
                x++;
            }
            x--;
            y--;
     
            while(y>=step){
                i++;
                result[x][y]=i;
                y--;
            }
            y++;
            x--;
            step++;
     
            while(x>=step){
                i++;
                result[x][y]=i;
                x--;
            }
            x++;
            y++;
        }
       result.forEach(row => console.log(row.join(' ')));
    }
spiralMatrix(5, 5)