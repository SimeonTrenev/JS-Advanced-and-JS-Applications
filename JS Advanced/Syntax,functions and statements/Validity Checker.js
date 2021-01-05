function validityChecker(array){

    let x1 = array[0];
    let y1 = array[1];
    let x2 = array[2];
    let y2 = array[3];

    let distance1 = isValid(x1,y1,0,0)
    let distance2 = isValid(x2,y2,0,0)
    let distance3 = isValid(x1,y1,x2,y2)

    if(Number.isInteger(distance1)){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if(Number.isInteger(distance2)){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)   
    }

    if(Number.isInteger(distance3)){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }

    function isValid(x1,y1,x2,y2){
        let distanceA = x1 - x2;
        let distanceB = y1 - y2;

        let result = Math.sqrt(Math.pow(distanceA,2) + Math.pow(distanceB,2))
        return result
    }

}
validityChecker([3, 0, 0, 4])