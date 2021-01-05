function addAndRemoveElements(array){

    let arr = [];

    array.forEach((element, index) => {
        if(element === 'add'){
            arr.push(index + 1)
        }else{
            arr.pop()
        }
    })

    if(arr.length > 0){
        console.log(arr.join('\n'))
    }else{
        console.log(`Empty`)
    }
}
addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']

)