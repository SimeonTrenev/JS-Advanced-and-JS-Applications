function stringLength(firstParameter, secondParameter, thirdParameter){

    let result = firstParameter.length + secondParameter.length + thirdParameter.length
    let average = Math.floor(result / 3)

    console.log(result);
    console.log(average)

}
stringLength('chocolate', 'ice cream', 'cake')

// function solve(...input){

//     let result = 0;

//     for(let elements of input){
//         result += elements.length;
//     }
    
//     let average = Math.floor(result / input.length)

//     console.log(result)
//     console.log(average)

// }
// solve('chocolate', 'ice cream', 'cake')