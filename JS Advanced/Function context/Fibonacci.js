function getFibonator () {

    let currentNum = 1;
    let nextNumber = 0;

    function fib () {
        let fibNum = currentNum + nextNumber;
        currentNum = nextNumber
        nextNumber = fibNum

        return fibNum
    }


    return fib
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
