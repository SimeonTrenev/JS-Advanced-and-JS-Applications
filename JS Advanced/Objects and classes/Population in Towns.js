function populationInTowns(array){

    let object = {};

    array.forEach(element => {
        let [town, population] = element.split(' <-> ')
        population = Number(population);
        if(!object.hasOwnProperty(town)){
            object[town] = population
        }else{
            object[town] += population
        }
    })
    let iterated = Object.entries(object)
    
    for(let elements of iterated){
        console.log(`${elements[0]} : ${elements[1]}`)
    }

}
populationInTowns(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']
)