function processOddNumbers(array){

   let filtered = array
   .filter((elements, index) => index % 2 !== 0)
   .map(el => el * 2)
   .reverse()
   .join(' ')

   console.log(filtered)
    
}
processOddNumbers([10, 15, 20, 25])