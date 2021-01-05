function result(input) {
    const listProcessorBuilder = function () {
        let list = [];
 
        return {
            // add: text => list.push(text),
            add: text => list = [...list, text],
            // remove: text => list.splice(list.indexOf(text), 1),
            remove: text => list = list.filter(x => x != text),
            print: () => console.log(list.join()),
        };
    } 
 
    let listProcessor = listProcessorBuilder();
 
    input
        .map(x => x.split(' '))
        .forEach(([command, argument]) => {
            listProcessor[command](argument)
        });
}
result(['add pesho', 'add george', 'add peter', 'remove peter','print'])