function solve() {
    let task = document.getElementById('task')
    let description = document.getElementById('description')
    let date = document.getElementById('date')
    let addButton = document.getElementById('add')
    let allSections = Array.from(document.querySelectorAll('section'))
    

    addButton.addEventListener('click', (e) => {
        e.preventDefault();
        let openSection = allSections[1].children[1]
        
        if(task.value === '' || description.value === '' || date.value === ''){
            return;
        }

        let articleElement = document.createElement('article');
        let h3Element = document.createElement('h3')
        h3Element.textContent = task.value;
        let pForDescription = document.createElement('p')
        pForDescription.textContent = `Description: ${description.value}`
        let pForDate = document.createElement('p')
        pForDate.textContent = `Due Date: ${date.value}`

        articleElement.appendChild(h3Element);
        articleElement.appendChild(pForDescription);
        articleElement.appendChild(pForDate);

        let divElement = document.createElement('div');
        divElement.className = 'flex';

        let startButton = document.createElement('button');
        startButton.textContent = 'Start';
        startButton.className = 'green';

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'red';

        divElement.appendChild(startButton)
        divElement.appendChild(deleteButton)

        articleElement.appendChild(divElement)

        openSection.appendChild(articleElement)

        deleteButton.addEventListener('click', (e) => {
            let parent = e.target.parentElement.parentElement
            parent.remove()
        })

        startButton.addEventListener('click', (e) => {
             
            let progressSection = allSections[2].children[1]
            e.target.textContent = 'Delete'
            e.target.className = 'red'
            deleteButton.textContent = 'Finish'
            deleteButton.className = 'orange'   
            
            progressSection.appendChild(articleElement)

            startButton.addEventListener('click', (e) => {
                articleElement.remove()
            })

            deleteButton.addEventListener('click', (e) => {
                let completeSection = allSections[3].lastElementChild // allSections[3].children[1]
                e.target.parentElement.remove() // divElement.remove()
                completeSection.appendChild(articleElement)
            })

        })

        task.value = '';
        description.value = '';
        date.value = '';

    })
}


// function solve() {
//     let addButton = document.getElementById('add');
//     let taskInput = document.getElementById('task');
//     let descriptionInput = document.getElementById('description');
//     let dateInput = document.getElementById('date');



//     addButton.addEventListener('click', (e) => {
//         e.preventDefault();

//         let valueOfTaskInput = taskInput.value;
//         let valueOfDescriptionInput = descriptionInput.value;
//         let valueOfDateInput = dateInput.value;
        
//         if(valueOfTaskInput === '' || valueOfDescriptionInput === '' || valueOfDateInput === ''){
            
//         }else{
//            let newArticleSection = document.createElement('article')
//            let h3Element = document.createElement('h3')
//            let examDescription = document.createElement('p')
//            let dateForExam = document.createElement('p')
//            let divClass = document.createElement('div')
//            let startButton = document.createElement('button')
//            startButton.classList.add('green')
//            startButton.innerHTML = 'Start'
//            let deleteButton = document.createElement('button');
//            deleteButton.classList.add('red')
//            deleteButton.innerHTML = 'Delete'
           
//            divClass.appendChild(startButton)
//            divClass.appendChild(deleteButton)
//            divClass.classList.add('flex')


//            h3Element.textContent = valueOfTaskInput
//            examDescription.textContent = 'Description:' + ' ' + valueOfDescriptionInput
//            dateForExam.textContent = 'Due Date:' + ' ' +  valueOfDateInput
//            newArticleSection.appendChild(h3Element)
//            newArticleSection.appendChild(examDescription)
//            newArticleSection.appendChild(dateForExam)
//            newArticleSection.appendChild(divClass)

//            let openSection = document.getElementsByClassName('wrapper')[0].children[1].children[1]
//            let inProgressSection = document.getElementById('in-progress')
          
//            openSection.appendChild(newArticleSection)

//            deleteButton.addEventListener('click', () => {
//                delete newArticleSection
//            })

//            startButton.addEventListener('click', () => {
//                startButton.innerHTML = 'Finish'
//                startButton.classList.remove('green')
//                startButton.classList.add('orange')
//             inProgressSection.appendChild(newArticleSection)

//            })
           
//         }
//     })
// }