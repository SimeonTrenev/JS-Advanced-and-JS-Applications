function solve() {
   let button = document.getElementsByTagName("button")
   let textArea = document.getElementsByTagName("textarea")[0]

   let list = {}

   Array.from(button).forEach(b => {
       b.addEventListener("click", (e) => {
           if (e.target.className === "add-product") {
               let currentElement = e.target.parentElement

               let priceElement = Number(currentElement.nextElementSibling.innerHTML)
               let brandElement = currentElement.previousElementSibling.children[0].innerHTML

               if (!list[brandElement]) {
                   list[brandElement] = 0
               }
               list[brandElement] += priceElement

               textArea.innerHTML += `Added ${brandElement} for ${priceElement.toFixed(2)} to the cart.\n`
           } else {

               let totalPrice = Number(Object.values(list).reduce((a,b)=>a+b,0))                
               textArea.innerHTML+=`You bought ${Object.keys(list).join(', ')} for ${totalPrice.toFixed(2)}.`
               
               Array.from(button).forEach(b => b.disabled = true)

           }
       })
   })
}