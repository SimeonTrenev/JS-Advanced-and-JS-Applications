// function solve() {
//    let addProductMenu = document.getElementById('add-new')
//    let nameInput = addProductMenu.children[1]
//    let quantityInput = addProductMenu.children[2]
//    let priceInput = addProductMenu.children[3];
//    let addButton = addProductMenu.children[4];
//    let filterInput = document.getElementById('filter')
//    let h1 = document.getElementsByTagName('h1')[1]
//    let myProductsUl = document.getElementById('myProducts').children[1]
//    let myProductsButButton = document.getElementById('myProducts').children[2]


//    addButton.addEventListener('click', (e) => {
//       e.preventDefault()

//       if(nameInput.value === '' || quantityInput.value === '' || priceInput.value === ''){
//          return;
//       }

//       if(!Number(quantityInput.value) || !Number(priceInput.value)){
//          return;
//       }

//       let productsSection = document.getElementById('products')
//       let ulForProducts = productsSection.children[1];

//       let liElements = document.createElement('li')
//       let spanForNameOfProduct = document.createElement('span')
//       spanForNameOfProduct.textContent = nameInput.value;
//       let strongForAvaivableQuantity = document.createElement('strong')
//       strongForAvaivableQuantity.textContent = `Available: ${quantityInput.value}`
      
//       liElements.appendChild(spanForNameOfProduct);
//       liElements.appendChild(strongForAvaivableQuantity);

//       let divElements = document.createElement('div');
//       let strongForPrice = document.createElement('strong')
//       strongForPrice.textContent = priceInput.value;
//       let clientListButton = document.createElement('button');
//       clientListButton.textContent = "Add to Client's List"

//       divElements.appendChild(strongForPrice);
//       divElements.appendChild(clientListButton);

//       liElements.appendChild(divElements);

//       ulForProducts.appendChild(liElements)

//       let filteredButton = productsSection.lastElementChild.lastElementChild

//       clientListButton.addEventListener('click', (e) => {
//          e.preventDefault();
//          let qtyAvailable = Number(strongForAvaivableQuantity.textContent.substring(11));
//          let total = `${Number(priceInput.value).toFixed(2)}`
//          let newLiElements = document.createElement('li')

//       })
      
//       filteredButton.addEventListener('click', (e) => {
//          e.preventDefault();

//       })

//       nameInput.value = '';
//       quantityInput.value = '';
//       priceInput.value = '';
//    })

// }






function solve() {
   let name = document.getElementById("add-new").children[1];
   let quantity = document.getElementById("add-new").children[2];
   let price = document.getElementById("add-new").children[3];
   let addBtn = document.querySelector("#add-new button");
   let inventoryUL = document.getElementById("products").children[1];
   let filterInput = document.getElementById("filter");
   let filterBtn = document.querySelector("#products div button");
   let h1 = document.getElementsByTagName("h1")[1];
   let myProductsUL = document.getElementById("myProducts").children[1];
   let myProductsBuyBtn = document.getElementById("myProducts").children[2];
 
   addBtn.addEventListener("click", function (e) {
     e.preventDefault();
     let li = ce("li");
     let span = ce("span", `${name.value}`);
     let strong1 = ce(
       "strong",
       `Available: ${Number(quantity.value).toFixed()}`
     );
     li.appendChild(span);
     li.appendChild(strong1);
     let div = ce("div");
     let strong2 = ce("strong", `${Number(price.value).toFixed(2)}`);
     let addToClientListBtn = ce("button", `Add to Client's List`);
     div.appendChild(strong2);
     div.appendChild(addToClientListBtn);
     li.appendChild(div);
     inventoryUL.appendChild(li);
 
     addToClientListBtn.addEventListener("click", function (e) {
       e.preventDefault();
       let qtyAvailable = Number(strong1.textContent.substring(11));
       let total = `${Number(price.value).toFixed(2)}`;
       let li = ce("li");
       let strong = ce("strong", `${total}`);
       li.innerHTML = `${name.value}`;
       li.appendChild(strong);
       myProductsUL.appendChild(li);
       strong1.textContent = `Available: ${qtyAvailable - 1}`;
       qtyAvailable -= 1;
       if (qtyAvailable === 0) {
         e.target.parentNode.parentNode.remove();
       }
       let totalPrice = h1.innerHTML.substring(13);
       h1.innerHTML = `Total Price: ${(
         Number(total) + Number(totalPrice)
       ).toFixed(2)}`;
     });
   });
 
   filterBtn.addEventListener("click", function (e) {
     e.preventDefault();
     let lis = inventoryUL.children;
     Array.from(lis).forEach((el) => {
       if (
         el.firstChild.textContent
           .toLowerCase()
           .includes(filterInput.value.toLowerCase())
       ) {
         el.style.display = "block";
       } else {
         el.style.display = "none";
       }
     });
   });
 
   myProductsBuyBtn.addEventListener("click", () => {
     h1.innerHTML = "Total Price: 0.00";
     myProductsUL.innerHTML = "";
   });
 
   function ce(el, text, className, id) {
     let e = document.createElement(el);
     if (text) {
       e.textContent = text;
     }
     if (className) {
       e.classList = className;
     }
     if (id) {
       e.id = id;
     }
     return e;
   }
 }