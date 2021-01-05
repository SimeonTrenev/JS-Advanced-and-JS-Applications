function solve() {
   let taskInput = document.getElementById('task');
   let descriptionInput = document.getElementById('description');
   let dateInput = document.getElementById('date');
   let addButton = document.getElementById('add')
   let allDivs = document.getElementsByClassName('wrapper')[0]

   addButton.addEventListener('click', (e) => {
       e.preventDefault();

       if(taskInput.value === '' || descriptionInput.value === '' || dateInput.value === ''){
           return;
       }

       let openSection = allDivs.children[1].children[1]
       
       let articleForSection = document.createElement('article');
       let h3Element = document.createElement('h3')
       let paragraphForDescriptionInput = document.createElement('p')
       let dateParagraph = document.createElement('p');
       let insideDivElement = document.createElement('div')
       let startButton = document.createElement('button')
       let deleteButton = document.createElement('button')

       h3Element.textContent = taskInput.value;
       paragraphForDescriptionInput.textContent ='Description: ' + descriptionInput.value;
       dateParagraph.textContent = 'Due Date: ' + dateInput.value;
       articleForSection.appendChild(h3Element)
       articleForSection.appendChild(paragraphForDescriptionInput);
       articleForSection.appendChild(dateParagraph)

       insideDivElement.classList.add('flex')
       startButton.textContent = 'Start'
       startButton.classList.add('green')
       deleteButton.textContent = 'Delete'
       deleteButton.classList.add('red')

       insideDivElement.appendChild(startButton)
       insideDivElement.appendChild(deleteButton)

       articleForSection.appendChild(insideDivElement);

       openSection.appendChild(articleForSection);
       
       deleteButton.addEventListener('click', (e) => {
           articleForSection.remove()
       })


       startButton.addEventListener('click', (e) => {
        let inProgressSection = document.getElementById('in-progress')
        e.target.textContent = 'Delete'
        e.target.classList.remove('green')
        e.target.classList.add('red')
        deleteButton.textContent = 'Finish'
        deleteButton.classList.remove('red')
        deleteButton.classList.add('orange')
        inProgressSection.appendChild(articleForSection)

        startButton.addEventListener('click', (e) => {
            articleForSection.remove()
        })

        deleteButton.addEventListener('click', (e) => {
            e.target.parentElement.remove()
            deleteButton.remove()
            startButton.remove()
            let completeSection = allDivs.children[3].children[1]
            completeSection.appendChild(articleForSection)

        })
       })

       taskInput.value = '';
       descriptionInput.value = '';
       dateInput.value = '';
   })

}