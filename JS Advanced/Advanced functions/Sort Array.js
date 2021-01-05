function sortArray (array, typeOfSorting){

    let sorted;

    if(typeOfSorting === 'asc'){
        sorted = array.sort((a, b) => a - b)
    }else{
        sorted = array.sort((a, b) => b - a)
    }
    
    return sorted
}
console.log(sortArray([14, 7, 17, 6, 8], 'desc'))