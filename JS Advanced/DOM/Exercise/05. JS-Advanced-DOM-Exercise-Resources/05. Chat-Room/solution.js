function solve() {
 
    let button = document.getElementById('send')
    button.addEventListener('click', send)

    let message = document.getElementById('chat_messages')

    function send () {
        const input = document.getElementById('chat_input')
        const value = input.value;

        let newDiv = document.createElement('div');
        newDiv.className = 'message my-message'
        newDiv.innerText = value;
        message.appendChild(newDiv)
        input.value = ''
    }

}


