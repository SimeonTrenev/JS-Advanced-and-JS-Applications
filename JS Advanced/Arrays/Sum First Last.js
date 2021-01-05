function sumFirstAndLast(array){

    let firstElement = Number(array[0]);
    let lastElement = Number(array[array.length - 1])
    let result = firstElement + lastElement;

    return result

}
sumFirstAndLast(['20', '30', '40'])