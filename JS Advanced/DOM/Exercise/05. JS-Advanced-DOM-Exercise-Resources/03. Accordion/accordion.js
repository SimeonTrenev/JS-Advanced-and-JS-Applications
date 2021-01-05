function toggle() {
    
    let buttonContent = document.getElementsByClassName('button')[0];
    let divStyle = document.getElementById('extra')
    
    if(buttonContent.textContent === 'More'){
        divStyle.style.display = 'block'
        buttonContent.textContent = 'Less'
    }else{
        divStyle.style.display = 'none'
        buttonContent.innerHTML = 'More'
    }
}