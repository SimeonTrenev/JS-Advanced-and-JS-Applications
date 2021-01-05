function solve(){
   let tr = document.getElementsByTagName('tr');
   let previusClicked;
   Array.from(tr).slice(1).forEach(row => {
      row.addEventListener('click', (e) => {
         
         let elementStyle = e.target.parentElement.style
        if(!elementStyle.backgroundColor){
           elementStyle.backgroundColor = "#413f5e"

           if(previusClicked){
              previusClicked.backgroundColor = ''
           }
        }else{
           elementStyle.backgroundColor = ''
        }
        previusClicked = elementStyle;
      })

      
   })
  }