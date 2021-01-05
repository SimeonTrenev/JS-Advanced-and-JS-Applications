function circleArea(radius){

    let typeOfArgument = typeof radius

    if(typeOfArgument === 'number'){
        let area = Math.PI * (radius ** 2)
        console.log(area.toFixed(2))
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeOfArgument}.`)
    }

}
circleArea(5)
circleArea('name')