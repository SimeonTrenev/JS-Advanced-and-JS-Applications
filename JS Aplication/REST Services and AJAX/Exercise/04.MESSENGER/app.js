function attachEvents() {
    let url = 'https://rest-messanger.firebaseio.com/messanger.json'

    let refreshButton = document.getElementById('refresh');
    refreshButton.addEventListener('click', () => {
        fetch(url)
        .then(response => response.json())
        .then(data => {
           let result = Object.values(data).reduce(
               (messages, message) => 
           (messages += `${message.author}: ${message.content}\n`),''
           );

           document.getElementById('messages').textContent = result;
        })
    })

    let submitButton = document.getElementById('submit')
    let nameInput = document.getElementById('author')
    let messageInput = document.getElementById('content')
    
    submitButton.addEventListener('click', () => {
        fetch(url, {method: "POST", body : JSON.stringify({author: nameInput.value, content: messageInput.value})})
    
    nameInput.value = '';
    messageInput.value = '';
    })
    
}

attachEvents();