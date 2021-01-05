function validate() {
   let emailInput = document.getElementById('email')

   emailInput.addEventListener('change', isValid)

   function isValid () {
       emailInput.classList.remove('error')

       const value = emailInput.value;

       if(value.match(/[a-z]+@[a-z]+.[a-z]+/)){
           return;
       }
       emailInput.classList.add('error')
   }
}