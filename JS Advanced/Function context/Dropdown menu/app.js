function solve() {
    let dropDownButton = document.getElementById('dropdown')
    dropDownButton.addEventListener('click', dropp)
    let menuForDropdown = document.getElementById('dropdown-ul')
    let box = document.getElementById('box')
    
    function dropp () {
        menuForDropdown.style.display = 'block'
        menuForDropdown.addEventListener('click', (e) => {
            let currentColor = e.target.innerText
            box.style.backgroundColor = currentColor
            box.style.color = 'black'
        })
        dropDownButton.addEventListener('click', () => {
            if(menuForDropdown.style.display === 'block'){
                menuForDropdown.style.display = 'none'
                box.style.backgroundColor = 'black'
                box.style.color = 'white'
            }else{
                menuForDropdown.style.display = 'block'
            }
        })
    }
}