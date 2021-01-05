function wordsUppercase(string){

    let pattern = /[\w]+/g
    let array = [];

    let match = string.matchAll(pattern)
    
    for(let elements of match){
        let currentElement = elements[0].toUpperCase()
        array.push(currentElement)
    }
    console.log(array.join(', '))
    
//    let result =  string.toUpperCase()
//     .match(pattern)
//     .join(', ')
//     console.log(result)

// let result = string.toUpperCase()
// .split(/[\W]+/g)
// .filter(x => x.length > 0)
// .join(', ')
// console.log(result)

}
wordsUppercase('Hi, how are you?')