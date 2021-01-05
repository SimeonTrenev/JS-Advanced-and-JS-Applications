function solve() {

  let inputText = document.getElementById('input');
  let outputFormatedText = document.getElementById('output')

  let valueOfInput = inputText.innerHTML;
  let arrayOfText = Array.from(valueOfInput.split('.'))
  let counter = 0;
  let currentParagraph = document.createElement('p')

  for(let i = 0; i < arrayOfText.length;i++){
    counter++;

    currentParagraph.innerHTML += arrayOfText[i]

    if(counter % 3 === 0){
      outputFormatedText.appendChild(currentParagraph)
      currentParagraph = document.createElement('p')
    }
  }

  if(counter > 0){
    outputFormatedText.appendChild(currentParagraph)
  }
  
}
