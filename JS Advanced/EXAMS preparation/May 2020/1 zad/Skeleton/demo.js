function solve() {
    let addButton = document.getElementById('add');
    let taskInput = document.getElementById('task');
    let descriptionInput = document.getElementById('description');
    let dateInput = document.getElementById('date');



    addButton.addEventListener('click', (e) => {
        e.preventDefault();

        let valueOfTaskInput = taskInput.value;
        let valueOfDescriptionInput = descriptionInput.value;
        let valueOfDateInput = dateInput.value;
        
        if(valueOfTaskInput === '' || valueOfDescriptionInput === '' || valueOfDateInput === ''){
            
        }else{
           let newArticleSection = document.createElement('article')
           let h3Element = document.createElement('h3')
           let examDescription = document.createElement('p')
           let dateForExam = document.createElement('p')
           let divClass = document.createElement('div')
           let startButton = document.createElement('button')
           startButton.classList.add('green')
           startButton.innerHTML = 'Start'
           let deleteButton = document.createElement('button');
           deleteButton.classList.add('red')
           deleteButton.innerHTML = 'Delete'
           
           divClass.appendChild(startButton)
           divClass.appendChild(deleteButton)
           divClass.classList.add('flex')


           h3Element.textContent = valueOfTaskInput
           examDescription.textContent = 'Description:' + ' ' + valueOfDescriptionInput
           dateForExam.textContent = 'Due Date:' + ' ' +  valueOfDateInput
           newArticleSection.appendChild(h3Element)
           newArticleSection.appendChild(examDescription)
           newArticleSection.appendChild(dateForExam)
           newArticleSection.appendChild(divClass)

           let openSection = document.getElementsByClassName('wrapper')[0].children[1].children[1]
           let inProgressSection = document.getElementById('in-progress')
          
           openSection.appendChild(newArticleSection)

           deleteButton.addEventListener('click', () => {
               delete newArticleSection
           })

           startButton.addEventListener('click', () => {
               startButton.innerHTML = 'Finish'
               startButton.classList.remove('green')
               startButton.classList.add('orange')
            inProgressSection.appendChild(newArticleSection)

           })
           
        }
    })
}