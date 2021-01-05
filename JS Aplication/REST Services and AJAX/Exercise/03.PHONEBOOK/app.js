function attachEvents() {
const url = 'https://phonebook-nakov.firebaseio.com/phonebook.json'
let btnLoad = document.getElementById('btnLoad');
let btnCreate = document.getElementById('btnCreate');
let ul = document.getElementById('phonebook');
let person = document.getElementById('person');
let phone = document.getElementById('phone');

btnLoad.addEventListener('click', () => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        Object.keys(data).forEach(key =>{
        let li = document.createElement('li')
        li.textContent = `${data[key].person}: ${data[key].phone}`;
        let deleteButton = document.createElement('button');
        let deleteUrl = `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`
        deleteButton.textContent = 'Delete';
        
        deleteButton.addEventListener('click', () => {
            fetch(deleteUrl, { method: "DELETE" });
            
        })
        //to do add eventListener
        li.appendChild(deleteButton)

        ul.appendChild(li)
        })
    })
})

btnCreate.addEventListener('click', () => {
    fetch(url, {method: "POST", body: JSON.stringify({ person: person.value, phone: phone.value})})
})

person.value = '';
phone.value = '';
}

attachEvents();