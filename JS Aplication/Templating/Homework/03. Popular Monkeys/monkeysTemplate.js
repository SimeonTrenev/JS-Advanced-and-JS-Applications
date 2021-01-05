const elements = {
  allMonkeys: () => document.querySelector("div.monkeys"),
};

fetch("./monkeys.hbs")
  .then((r) => r.text())
  .then((monkeysTemplateSrc) => {
    const monkeysTemplate = Handlebars.compile(monkeysTemplateSrc);
    const resultHTML = monkeysTemplate({ monkeys });
    elements.allMonkeys().innerHTML = resultHTML;
    attachEventListener()
  })
  .catch(err => console.error(err))


  function attachEventListener() {
      elements.allMonkeys().addEventListener('click', (e) => {
          const { target } = e;

          if(target.nodeName !== 'BUTTON' || target.textContent !== 'Info'){
              return;
          }

          let paragraph = target.parentElement.querySelector('p')

          if(paragraph.style.display === 'block') {
            paragraph.style.display = 'none'
          }else{
            paragraph.style.display = 'block'
          }
      })
  }