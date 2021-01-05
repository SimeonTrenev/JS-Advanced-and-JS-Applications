function townsToJSON(array){

    let towns = [];
    let patern = /\s*\|\s*/

    for(let line of array.slice(1)){
        let currentElements = line.split(patern)
        let latitude = Number(currentElements[2]).toFixed(2)
        let longitude = Number(currentElements[3]).toFixed(2)
        latitude = Number(latitude)
        longitude = Number(longitude)
        let object = {
            Town : currentElements[1],
            Latitude: latitude,
            Longitude: longitude
        }

        towns.push(object)
    }
    console.log(JSON.stringify(towns))
   

}
townsToJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
)