function cookingByNumbers(array){

    let number = Number(array.shift());

    for(let commands of array){
        if(commands === 'chop'){
            number = chop(number)
            console.log(number)
        }else if(commands === 'dice'){
            number = dice(number)
            console.log(number)
        }else if(commands === 'spice'){
            number = spice(number)
            console.log(number)
        }else if(commands === 'bake'){
            number = bake(number)
            console.log(number)
        }else if(commands === 'fillet'){
            number = fillet(number)
            console.log(number)
        }
    }

    function chop(number){
        return number / 2;
    }

    function dice(number){
        return Math.sqrt(number)
    }

    function spice(number){
        return number + 1;
    }

    function bake(number){
        return number * 3;
    }

    function fillet(number){
        return number * 0.8;
    }

}
cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])