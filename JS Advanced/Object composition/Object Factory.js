function result(input){

    let propList = JSON.parse(input);

    let result = propList.reduce((a, x) => ({...a, ...x}), {})
    //let result = proplist.reduce((a,x) => Object.assign({}, a, x), {});

    return result
}
result(`[{"canMove": true},{"canMove":true, "doors": 4},{"capacity": 5}]`)