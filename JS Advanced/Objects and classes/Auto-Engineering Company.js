function autoEngineeringCompany(input) {
    let cars = new Map();

    for(let line of input){
        let tokens = line.split(" | ");
        let brand = tokens[0];
        let model = tokens[1];
        let count = Number(tokens[2]);

        if(! cars.get(brand)){
            cars.set(brand, new Map());
        }
        if(! cars.get(brand).get(model)){
            cars.get(brand).set(model, 0);
        }

        cars.get(brand).set(model, cars.get(brand).get(model) + count);
    }

    for(let [brand, modelCount] of cars){
        console.log(brand);

        for(let [model, count] of modelCount){
            console.log(`###${model} -> ${count}`);
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)

// function solve(input){

//     let carObject = {};
//     let array = []

//     for(const line of input){
//         let tokens = line.split(' | ')
//         let brand = tokens[0];
//         let model = tokens[1];
//         let quantity = Number(tokens[2])
        
//         if(!carObject.hasOwnProperty(brand)){
//             carObject[brand] = {
//                 model : [],
//             }
//         }

//         if(!array.includes(brand)){
//             array.push(brand)
//         }

//         if(!carObject[brand].model.includes(model)){
//             carObject[brand].model.push(model,quantity) 
//         }else{
//             let index = carObject[brand].model.indexOf(model)
//             carObject[brand].model[index + 1] += quantity
//         }
            

//     }
    
//      let iterated = Object.entries(carObject)
     
//      for(let elements of iterated){
//          console.log(elements[0])
//          let nextIterated = Object.entries(elements[1])
//          for(let i = 0; i < nextIterated.length;i++){
//             for(let j = 0; j < nextIterated[i][i + 1].length;j += 2){
//                 let currentElement = nextIterated[i][i + 1][j]
//                 let nextElement = nextIterated[i][i + 1][j + 1]
//                 console.log(`###${currentElement} -> ${nextElement}`)
//             }
//          }
         
//      }

// }