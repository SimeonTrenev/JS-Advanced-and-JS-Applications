function heroicInventory(array){

    let object = {};
    let arr = []

    array.forEach(elements => {
        let tokens = elements.split(' / ')
        
        let name = tokens[0]
        let level = Number(tokens[1])
        let items = [];
        
        if(tokens.length > 2){
            items = tokens[2].split(', ')
        }
        
        object = {
            name,
            level,
            items
        }
        arr.push(object)
    })

    console.log(JSON.stringify(arr))

}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)