function printEveryElement(array){

    let lastElement = Number(array.pop());

    for(let i = 0; i < array.length;i+=lastElement){
        console.log(array[i])
    }

}
printEveryElement(['5', 
'20', 
'31', 
'4', 
'20', 
'2']
)