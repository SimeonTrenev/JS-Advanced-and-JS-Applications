function solve() {
    let addButton = document.querySelector('form div button');
 
    addButton.addEventListener('click', addTraining);
 
    let [lectureNameInput, dateInput] = Array.from(document.querySelectorAll('form div input'));
 
    let moduleInput = document.querySelector('form div select');
 
    function addTraining(e){
        e.preventDefault();
 
        if (!lectureNameInput.value || !dateInput.value || !moduleInput.value || (moduleInput.value == 'Select module')) {
            return;
        }
 
        let lecture = lectureNameInput.value;
        let date = new Date(dateInput.value);
        let moduleName = moduleInput.value.toUpperCase() + '-MODULE';
 
        let modulesElement = document.getElementsByClassName('modules')[0];
        let modules = Array.from(modulesElement.children);
 
        let module = modules.find(x => Array.from(x.children)[0].innerHTML == moduleName);
 
        if (!module) {
            module = document.createElement('div');
            module.setAttribute('class', 'module');
            modulesElement.appendChild(module);
            let h3Element = document.createElement('h3');
            h3Element.innerHTML = moduleName;
            module.appendChild(h3Element);
            let ulElement = document.createElement('ul');
            module.appendChild(ulElement);
        }
 
        let liElement = document.createElement('li');
        liElement.setAttribute('class', 'flex');
        module.children[1].appendChild(liElement);
 
 
        let h4Element = document.createElement('h4');
 
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let date_date = `${date.getFullYear()}/${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}`;
        let date_time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
 
 
        h4Element.innerHTML = `${lecture} - ${date_date} - ${date_time}`;
        liElement.appendChild(h4Element);
 
        let deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('class', 'red');
        deleteBtn.innerHTML = 'Del';
        deleteBtn.addEventListener('click', deleteHandler);
        liElement.appendChild(deleteBtn);
 
        let sortedUl = Array.from(module.children)[1];
        let sortChilder = Array.from(sortedUl.children);
        let sortedResult = sortChilder.sort((a, b) => {
            a = Array.from(a.children)[0].innerHTML.split(' - ')[1];
            b = Array.from(b.children)[0].innerHTML.split(' - ')[1];
            return a.localeCompare(b);
        });
 
        sortedResult.forEach(e => sortedUl.appendChild(e));
 
    }
 
    function deleteHandler(e) {
        let parent = e.currentTarget.parentElement;
        let module = parent.parentElement.parentElement;
        
        parent.remove();
        if (Array.from(Array.from(module.children)[1].children).length == 0) {
            module.remove();
        }
        
    }
};