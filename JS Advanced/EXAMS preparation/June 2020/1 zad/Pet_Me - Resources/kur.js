// function solve() {
    
// const form = document.getElementById('container')
// const petsList = document.querySelector('#adoption > ul')
// const adoptedList = document.querySelector('#adopted > ul')

// let [name, age , kind, owner, addBtn] = Array.from(form.children)

// addBtn.addEventListener('click', addpet)

// function addpet(e) {
//     e.preventDefault();

//     if(!(name.value && Number(age.value) && kind.value && owner.value)) {
//         return;
//     }

//     let li = document.createElement('li');
//     let p = document.createElement('p');
//     p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`
//     let sOwner = document.createElement('span')
//     sOwner.textContent = `Owner: ${owner.value}`;
//     let contactBtn = document.createElement('button');
//     contactBtn.textContent = 'Contact with owner';

//     li.appendChild(p);
//     li.appendChild(sOwner);
//     li.appendChild(contactBtn);
//     petsList.appendChild(li)

//     contactBtn.addEventListener('click', makeContact)
// }

// function makeContact(e) {
//     const parent = e.target.parentElement;
//     e.target.remove();

//     const takeBtn = el('button')
//     takeBtn.textContent = 'Yes! I take it!'

//     const div = el('div')
//     const inputEl = el('input', '', { placeholder: 'Enter your names'});

//     div.appendChild(inputEl);
//     div.appendChild(takeBtn);

//     parent.appendChild(div)

//     takeBtn.addEventListener('click', (e) => {
//         if(!inputEl.value){
//             return;
//         }

//         e.target.textContent = 'Checked';
//         adoptedList.appendChild(e.target.parentElement.parentElement)

//         const span = e.target.parentElement.parentElement.querySelector('span');
//         span.textContent = `New Owner: ${inputEl.value}`

//         const checkBtn = el('button', 'Checked');
//         e.target.parentElement.parentElement.appendChild(checkBtn);
//         e.target.parentElement.remove();

//         checkBtn.addEventListener('click', (ev) => {
//             ev.target.parentElement.remove()
//         })

//     })
// }

// function el(type,content,attributes) {
//     let result = document.createElement(type);

//     if(content) {
//         result.textContent = content
//     }

//     if(attributes) {
//         Object.assign(result, attributes)
//     }

//     return result;
// }

// }


// function solve() {
//     let input = document.querySelectorAll("input[type='text']");
//     let addBtn = document.querySelector("button");
//     let section = document.querySelectorAll("section");
//     let adoption = section[0];
//     let ulAdoption = adoption.children[1];
//     let adopted = section[1];
//     let ulAdopted = adopted.children[1];
  
//     let name = input[0];
//     let age = input[1];
//     let kind = input[2];
//     let owner = input[3];
  
//     addBtn.addEventListener("click", function (e) {
//       e.preventDefault();
//       if (
//         name.value === "" ||
//         age.value === "" ||
//         kind.value === "" ||
//         owner.value === "" ||
//         Number.isNaN(Number(age.value))
//       ) {
//         return;
//       }
//       let li = document.createElement("li");
//       let p = document.createElement("p");
//       let strong1 = ce("strong", name.value);
//       let strong2 = ce("strong", age.value);
//       let strong3 = ce("strong", kind.value);
//       let span = ce("span", `Owner: ${owner.value}`);
//       let button = ce("button", "Contact with owner");
  
//       p.appendChild(strong1);
//       p.innerHTML += " is a ";
//       p.appendChild(strong2);
//       p.innerHTML += " year old ";
//       p.appendChild(strong3);
//       li.appendChild(p);
//       li.appendChild(span);
//       li.appendChild(button);
//       ulAdoption.appendChild(li);
  
//       name.value = "";
//       age.value = "";
//       kind.value = "";
//       owner.value = "";
  
//       button.addEventListener("click", function (e) {
//         let div = document.createElement("div");
//         let input = document.createElement("input");
//         input.placeholder = "Enter your names";
//         let changeBtn = ce("button", "Yes! I take it!");
  
//         div.appendChild(input);
//         div.appendChild(changeBtn);
//         li.appendChild(div);
//         e.target.remove();
  
//         changeBtn.addEventListener("click", function (e) {
//           if (input.value !== "") {
//             let newspan = ce("span", `New Owner: ${input.value}`);
//             let checkedBtn = ce("button", "Checked");
//             let parentDiv = e.target.parentNode;
//             let parent = parentDiv.parentNode;
//             parentDiv.removeChild(input);
//             parentDiv.removeChild(changeBtn);
//             parent.removeChild(parentDiv);
//             parent.removeChild(span);
//             parent.appendChild(newspan);
//             parent.appendChild(checkedBtn);
//             ulAdopted.appendChild(parent);
//             e.target.remove();
  
//             checkedBtn.addEventListener("click", function (e) {
//               parent.remove();
//             });
//           }
//         });
//       });
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