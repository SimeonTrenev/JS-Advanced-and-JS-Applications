// function solution (startNum) {
//     function add(num) {
//         let result = startNum + num;
//         return result
//     }
//     return add
// }

function solution (startNum) {
    return (num) => startNum + num
}

let add7 = solution(7);
console.log(add7(2));
console.log(add7(3));
