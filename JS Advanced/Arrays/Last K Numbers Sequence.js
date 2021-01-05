function lastKNumbers(n, k){

    let array = [1];

    for(let i = 1; i < n ; i++){

       let target = i - k;
       let sum = 0;

       if(target < 0){
           target = 0
       }

       array.slice(target,i).forEach(x => sum += x)
       array.push(sum)
    }
    console.log(array.join(' '))
}
lastKNumbers(8, 2)