function solve() {
   
   let body = document.getElementsByTagName('tbody')[0]
   let text = document.getElementById('searchField')
   let button = document.getElementById('searchBtn')

   button.addEventListener('click', () => {
      let value = text.value;
      let tr = body.children
      for(let elements of tr){
         if(elements.textContent.includes(value)){
            elements.classList = 'select'
         }else{
            elements.classList = 'none'
         }
         text.value = ''
      }
      
   })

}