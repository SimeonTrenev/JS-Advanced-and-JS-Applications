let cats = {
    firstCat: {
        name: 'Johny',
        age: 5
    },
    secondCat: {
        name: 'Dimmy',
        ages: 5
    },
    thirdCat: {
        name: 'Lolly',
        age: 3
    }
}

let{secondCat: {name ,ages}} = cats
console.log(name)