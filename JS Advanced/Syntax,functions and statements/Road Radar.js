function roadRadar(array){

    let speed = array[0];
    let region = array[1];
    const motorwaySpeedLimit = 130;
    const interstateSpeedLimit = 90;
    const citySpeedLimit = 50;
    const residentialSpeedLimit = 20;

    switch(region){
        case 'motorway':
        if(speed > motorwaySpeedLimit + 40){
            console.log('reckless driving')
        }else if(speed > motorwaySpeedLimit + 20){
            console.log(`excessive speeding`)
        }else if(speed > motorwaySpeedLimit){
            console.log('speeding')
        }
        break;
        case 'interstate':
            if(speed > interstateSpeedLimit + 40){
                console.log('reckless driving')
            }else if(speed > interstateSpeedLimit + 20){
                console.log(`excessive speeding`)
            }else if(speed > interstateSpeedLimit){
                console.log('speeding')
            }
        break;
        case 'city':
            if(speed > citySpeedLimit + 40){
                console.log('reckless driving')
            }else if(speed > citySpeedLimit + 20){
                console.log(`excessive speeding`)
            }else if(speed > citySpeedLimit){
                console.log('speeding')
            }
        break;
        case 'residential':
            if(speed > residentialSpeedLimit + 40){
                console.log('reckless driving')
            }else if(speed > residentialSpeedLimit + 20){
                console.log(`excessive speeding`)
            }else if(speed > residentialSpeedLimit){
                console.log('speeding')
            }
        break;
        default:

    }

}
roadRadar([200, 'motorway'])