const elements = {
    input: () => document.querySelector('input#towns'),
    button: () => document.querySelector('button#btnLoadTowns'),
    root: () => document.querySelector('div#root')
};

elements.button().addEventListener('click', getInputInformation);

function getInputInformation(e) {
    e.preventDefault();
   const { value } = elements.input();
   const towns = value.split(', ').map(t => {return {name : t}})
   //can be splitted by regex - value.split(/[, ]+/g)...
   appendTowns(towns);
}

function appendTowns(towns) {
    getTemplate()
        .then(templateSource => {
            const template = Handlebars.compile(templateSource);
            const htmlResult = template({ towns });
            elements.root().innerHTML = htmlResult;
        })
        .catch(err => console.error(err));
}

function getTemplate() {
    return fetch('./template.hbs').then(r => r.text());
}