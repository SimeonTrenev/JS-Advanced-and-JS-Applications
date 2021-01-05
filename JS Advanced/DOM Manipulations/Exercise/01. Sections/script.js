function create(words) {

   let divElement = document.getElementById('content')
 
  words.forEach(element => {
     let newDiv = document.createElement('div')
     let paragraph = document.createElement('p')
     paragraph.innerHTML = element;
     paragraph.style.display = 'none'
     newDiv.appendChild(paragraph)
     
     newDiv.addEventListener('click', () => {
        paragraph.style.display = 'block'
     })
     divElement.appendChild(newDiv)
  });

}