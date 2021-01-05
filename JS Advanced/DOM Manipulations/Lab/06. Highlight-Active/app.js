function focus() {
    

    function focusIn (e) { 
        e.target.parentElement.classList.add('focused')
    }

    function focusOut (e) {
        e.target.parentElement.classList.remove('focused')
    }

    const inputs = document.getElementsByTagName('input')

    for(let i = 0; i < inputs.length;i++){
        inputs[i].addEventListener('focus', focusIn)
        inputs[i].addEventListener('blur', focusOut)
    }


}