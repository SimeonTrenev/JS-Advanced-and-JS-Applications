function aggregate(array){

    console.log(sum(array))
    console.log(inverseElements(array))
    console.log(concat(array))

    function sum(arr){
        let result = 0;
        for(let elements of arr){
            result += elements
        }
        return result
    }

    function inverseElements(arr){
        let result = 0;

        for(let elements of arr){
            result += 1 / elements
        }
        return result
    }

    function concat(arr){
        let result = '';
        for(let elements of arr){
            result += elements
        }
        return result
    }

}
aggregate([1, 2, 3])