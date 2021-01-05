function ticTacToe(matrix){

    let arr = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = 'X';

    for(let line of matrix){
        [currRow, currCol] = line
        .split(' ')
        .map(Number);

        if(arr[currRow][currCol] !== false){
            console.log(`This place is already taken. Please choose another!`);
            continue;
        }

        arr[currRow][currCol] = player;

        for(let i = 0; i < 3; i++){
            if(
                arr[i][0] === player &&
                arr[i][1] === player &&
                arr[i][2] === player
            ){
                console.log(`Player ${player} wins!`)
                printMatrix();
                return
            }else if(
                arr[0][i] === player &&
                arr[1][i] === player &&
                arr[2][i] === player
            ){
                console.log(`Player ${player} wins!`)
                printMatrix();
                return
            }
        }

        if(
            arr[0][0] === player &&
            arr[1][1] === player &&
            arr[2][2] === player
        ){
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }else if(
            arr[0][2] === player &&
            arr[1][1] === player &&
            arr[2][0] === player
        ){
            console.log(`Player ${player} wins!`);
            printMatrix();
            return;
        }

        let theresFalse = false;

        for(let row = 0; row < arr.length;row++){
            if(arr[row].includes(false)){
                theresFalse = true;
            }
        }

        if(!theresFalse){
            console.log(`The game ended! Nobody wins :(`)
            printMatrix();
            return
        }

        if(player === 'X'){
            player = 'O'
        }else{
            player = 'X'
        }
    }

    function printMatrix(){
        for(let row = 0; row < arr.length;row++){
            console.log(arr[row].join('\t'))
        }
    }


}
ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
)