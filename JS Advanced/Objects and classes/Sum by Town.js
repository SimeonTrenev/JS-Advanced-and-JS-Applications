function sumByTown(array){

    let object = {};

    for(let i = 0; i < array.length;i+=2){
        let town = array[i]
        let income = Number(array[i + 1])

        if(!object.hasOwnProperty(town)){
            object[town] = income
        }else{
            object[town] += income
        }
    }
    console.log(JSON.stringify(object))
}   
sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4'])