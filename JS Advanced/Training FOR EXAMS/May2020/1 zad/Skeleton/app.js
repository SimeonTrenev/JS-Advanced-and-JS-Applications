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