function printArrayWith(array){

    let arr = array.slice();
    let delimiter = arr.pop();
    console.log(arr.join(`${delimiter}`))

}
printArrayWith(['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']
)