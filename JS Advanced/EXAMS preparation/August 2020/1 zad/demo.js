function solve() {
    let firstDiv = document.querySelectorAll('#container')[0]
    let nameInput = firstDiv.children[0]
    let hallInput = firstDiv.children[1]
    let ticketPriceInput = firstDiv.children[2];
    let buttonOnScreen = firstDiv.children[3];
 
    buttonOnScreen.addEventListener('click', (e) => {
        e.preventDefault();
        
 
 
     //    if(
     //        nameInput.value === '' ||
     //        hallInput.value === '' ||
     //        ticketPriceInput.value === '' ||
     //        Number(isNaN(Number(ticketPriceInput.value)))
     //    ){
 
     //    }
         if(!(nameInput.value && hallInput.value && Number(ticketPriceInput.value))){
             return;
         }
 
         let liElement = document.createElement('li')
 
         let filmName = document.createElement('span')
         filmName.textContent = nameInput.value;
 
         let strongHall = document.createElement('strong');
         strongHall.textContent = 'Hall: ' + hallInput.value
 
         let secondDivElement = document.createElement('div')
 
         liElement.appendChild(filmName);
         liElement.appendChild(strongHall);
 
         let strongPrice = document.createElement('strong')
         strongPrice.textContent = ticketPriceInput.value
 
         let inputForTicket = document.createElement('input')
         inputForTicket.placeholder = 'Tickets Sold'
 
         let archiveButton = document.createElement('button')
         archiveButton.textContent = 'Archive'
         
         secondDivElement.appendChild(strongPrice)
         secondDivElement.appendChild(inputForTicket)
         secondDivElement.appendChild(archiveButton)
 
         liElement.appendChild(secondDivElement)
 
         let movieSection = document.querySelectorAll('#movies')[0]
         let ulMovieSection = movieSection.children[1]
         ulMovieSection.appendChild(liElement)
 
         nameInput.value = '';
        hallInput.value = '';
        ticketPriceInput.value = ''
 
         archiveButton.addEventListener('click', (e) => {
             if(Number(!inputForTicket.value)){
                 return
             }
             liElement.remove(secondDivElement)
 
             let achiveSection = document.querySelectorAll('#archive')[0]
             let ulForAchiveSection = achiveSection.children[1]
             
 
             let newLiElement = document.createElement('li')
             let calculationForSum = (Number(inputForTicket.value) * Number(strongPrice.textContent)).toFixed(2)
 
             let strongForMoney = document.createElement('strong')
             strongForMoney.textContent = 'Total amount: ' + calculationForSum
             let deleteButton = document.createElement('button')
             deleteButton.textContent = 'Delete'
 
             newLiElement.appendChild(filmName)
             newLiElement.appendChild(strongForMoney)
             newLiElement.appendChild(deleteButton)
 
             ulForAchiveSection.appendChild(newLiElement)
 
             deleteButton.addEventListener('click', (e) => {
                 let parent = e.target.parentNode.parentNode;
                 parent.removeChild(newLiElement)
             })
             
             let clearButton = achiveSection.children[2]
             clearButton.addEventListener('click', (e) => {
                 newLiElement.remove()
             })
 
             
         })
 
    })
 }
 
 // function solve() {
 //     let input = document.querySelectorAll("input");
 //     let onScreenBtn = document.querySelector("button");
 //     let sections = document.querySelectorAll("section");
 //     let movieSection = sections[0].children[1];
 //     let archiveSection = sections[1].children[1];
   
 //     let name = input[0];
 //     let hall = input[1];
 //     let price = input[2];
   
 //     onScreenBtn.addEventListener("click", function (e) {
 //       e.preventDefault();
 //       if (
 //         name.value === "" ||
 //         hall.value === "" ||
 //         price.value === "" ||
 //         Number(isNaN(Number(price.value)))
 //       ) {
 //         return;
 //       } else {
 //         let li = document.createElement("li");
 //         let div = document.createElement("div");
 //         let span1 = ce("span", name.value);
 //         let strong1 = ce("strong", `Hall: ${hall.value}`);
 //         let strong2 = ce("strong", price.value);
 //         let input = document.createElement("input");
 //         input.placeholder = "Tickets Sold";
 //         let archiveBtn = ce("button", "Archive");
 //         div.appendChild(strong2);
 //         div.appendChild(input);
 //         div.appendChild(archiveBtn);
 //         li.appendChild(span1);
 //         li.appendChild(strong1);
 //         li.appendChild(div);
 //         movieSection.appendChild(li);
   
 //         name.value = "";
 //         hall.value = "";
 //         price.value = "";
   
 //         archiveBtn.addEventListener("click", function (e) {
 //           if (Number.isNaN(Number(input.value)) || input.value === "") {
 //             return;
 //           } else {
 //             li.removeChild(div);
 //             let deleteBtn = ce("button", "Delete");
 //             strong1.textContent =
 //               "Total amount: " +
 //               (Number(input.value) * Number(strong2.textContent)).toFixed(2);
 //             li.appendChild(deleteBtn);
 //             archiveSection.appendChild(li);
   
 //             deleteBtn.addEventListener("click", function (e) {
 //               let parent = e.target.parentNode.parentNode;
 //               parent.removeChild(li);
 //             });
 //           }
 //         });
 //       }
 //     });
 //     let clearBtn = sections[1].children[2];
 //     clearBtn.addEventListener("click", function (e) {
 //       archiveSection.innerHTML = "";
 //     });
   
 //     function ce(el, text, className, id) {
 //       let e = document.createElement(el);
 //       if (text) {
 //         e.textContent = text;
 //       }
 //       if (className) {
 //         e.classList = className;
 //       }
 //       if (id) {
 //         e.id = id;
 //       }
 //       return e;
 //     }
 //   }