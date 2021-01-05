function storeCatalogue(array){

    let object = {};
    let firstLetter = new Map();
    let arr = []

    array.forEach(line => {
        let [product, price] = line.split(' : ')
        price = Number(price);

        object[product] = price
    })

    let sorted = Object.entries(object)
    .sort((a,b) => a[0].localeCompare(b[0]));

    for(let elements of sorted){
        let splited = elements[0].split('')
        firstLetter.set(splited[0])
    }
    let mapped = Array.from(firstLetter)
    mapped.forEach(elements => {
        arr.push(elements[0])
    })

    for(let i = 0; i < arr.length;i++){
        console.log(arr[i])
        for(let j = 0; j < sorted.length;j++){
            let currentWord = sorted[j]
            if(currentWord[0][0] === arr[i]){
                console.log(`  ${currentWord[0]}: ${currentWord[1]}`)
            }else{
                continue;
            }
            
        }
    }    
}
storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
)