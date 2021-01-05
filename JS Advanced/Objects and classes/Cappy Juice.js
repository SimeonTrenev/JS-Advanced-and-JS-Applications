function cappyJuice(array){

    let object = {};
    let bottles = {}

    array.forEach(line => {
        let [fruit, quantity] = line.split(' => ')
        quantity = Number(quantity);

        if(!object.hasOwnProperty(fruit)){
            object[fruit] = quantity
        }else{
            object[fruit] += quantity
        }

        if(object[fruit] >= 1000){
            bottles[fruit] = parseInt(object[fruit] / 1000)
        }
    })

    for(let key of Object.keys(bottles)){
        console.log(`${key} => ${bottles[key]}`)
    }
    

}
cappyJuice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']

)