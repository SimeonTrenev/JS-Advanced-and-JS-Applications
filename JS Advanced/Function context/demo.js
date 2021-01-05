
let arr = [1,2,3,4,5]

let reducedArr = arr.reduce((acc, curr) => {
    acc.push(curr * 5)
    return acc
}, [])

console.log(reducedArr)

