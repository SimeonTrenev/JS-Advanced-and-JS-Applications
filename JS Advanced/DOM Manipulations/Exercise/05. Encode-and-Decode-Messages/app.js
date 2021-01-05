function encodeAndDecodeMessages() {
   
    let textAreas = Array.from(document.querySelectorAll('textarea'))
    let buttons = Array.from(document.querySelectorAll('button'))
    
    let encodeText = textAreas[0]
    let encodeButton = buttons[0]

    let decodeText = textAreas[1]
    let decodeButton = buttons[1]
    
    encodeButton.addEventListener('click', () => {
        let message = encodeText.value
        let encodedMessage = '';
        
        for(let i = 0; i < message.length;i++){
            let curr = message[i]
            encodedMessage += String.fromCharCode(ascii(curr) + 1)
        }
        encodeText.value = '';
        decodeText.value = encodedMessage
    })

    decodeButton.addEventListener('click', () => {
        let currentDecodedMessage = decodeText.value;
        let decodedRealMessage = '';

        for(let i = 0; i < currentDecodedMessage.length;i++){
            let curr = currentDecodedMessage[i]
            decodedRealMessage += String.fromCharCode(ascii(curr) - 1)
        }
        decodeText.value = decodedRealMessage
    })

    function ascii (a) {
        return a.charCodeAt(0)
    }

}

