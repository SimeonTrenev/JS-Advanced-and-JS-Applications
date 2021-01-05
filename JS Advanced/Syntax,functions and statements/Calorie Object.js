function calorieObject(array){

    let object = {};

    for(let i = 0; i < array.length;i+=2){
        let food = array[i]
        let calorie = Number(array[i + 1])
        object[food] = calorie
    }
    console.log(object)

}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])