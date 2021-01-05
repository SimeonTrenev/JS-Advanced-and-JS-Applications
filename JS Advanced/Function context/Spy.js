function Spy(target, method) {

    let originalFunction = target[method]
    
    let result = {
        count: 0
    }

    target[method] = function() {
        result.count++;
        return originalFunction.apply(this,arguments)
    }

    return result
}

let obj = {
    method:()=>"invoked"
}
let spy = Spy(obj,"method");

obj.method();
obj.method();
obj.method();

console.log(spy) 

// function Spy(obj, methodName) {
//     const spy = {count: 0}
//     let method = obj[methodName]

//     if(!method) {
//         throw new Error('No such method!')
//     }

//     obj[methodName] = function(...args) {

//         this.count++;
//         return method.apply(obj,args)

//     }.bind(spy)
//     return spy
// }
