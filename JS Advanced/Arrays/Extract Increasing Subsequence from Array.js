function extract(array){

    // let newArray = [];
    // let maxValue = array[0]
    // for(let i = 0; i < array.length; i++){
    //     let currentValue = array[i]
        
    //     if(currentValue >= maxValue){
    //         maxValue = currentValue;
    //         newArray.push(maxValue)
    //     }
    // }
    // console.log(newArray.join('\n'))
    

    // let max = Number.MIN_SAFE_INTEGER;
    // let arr = array.filter(num => {
    //     if(num >= max){
    //         num = max;
    //         return true
    //     }else{
    //         return false
    //     }
    // });
    // console.log(arr.join('\n'))

    let max = Number.MIN_SAFE_INTEGER;
    let filtered = array.filter(filterMaxNum);

    function filterMaxNum(num){
        if(num >= max){
            max = num;
            return true
        }else{
            return false;
        }
    }
    console.log(filtered.join('\n'))

}
extract([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
    
    
    )