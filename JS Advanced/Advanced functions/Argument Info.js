function argumentInfo () {

    let args = Array.from(arguments);
    let numberOfArguments = {}
    let count = 1

    args.forEach(arg => {
        let type = typeof(arg)
        console.log(`${type}: ${arg}`)
        if(!numberOfArguments.hasOwnProperty(type)){
            numberOfArguments[type] = {count}
        }else{
            numberOfArguments[type].count++ ;
        }

    })

    let iterated = Object.entries(numberOfArguments)
    .sort((a, b) => b[1].count - a[1].count)
    .forEach((element) => {
        console.log(`${element[0]} = ${element[1].count}`)
    })

    
    
    
}
argumentInfo(
    'cat', 42, function () { console.log('Hello world!'); }, 'dog')