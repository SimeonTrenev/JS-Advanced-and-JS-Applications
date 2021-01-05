function growingWord() {
  
let manipulatedElement = document.querySelector('#exercise > p')

let pixels = 2;
let colorChanges = {
  'blue': 'green',
  'green': 'red',
  'red': 'blue'
}

if(!manipulatedElement.hasAttribute('style')){
  manipulatedElement.setAttribute('style', `color:blue; font-size: ${pixels}px`)
}else{
  let currentPixels = manipulatedElement.style['font-size'];
  pixels = currentPixels.substr(0,currentPixels.length - 2) * 2;

  let currentColor = manipulatedElement.style.color;
  manipulatedElement.setAttribute('style', `color:${colorChanges[currentColor]}; font-size: ${pixels}px`)
}

  
}