function cars(commands){

    const commandMap = {
        create: (acc, name, _, inheritName) => {
            if(!inheritName) {
                acc[name] = {}
                return acc;
            }
            const parent = acc[inheritName];
            acc[name] = Object.create(parent)
            return acc;
        },
        set: (acc, name, propName, propValue) => {
            acc[name][propName] = propValue;
            return acc;
        },
        print: (acc, name) => {
            let items = [];
            for(let i in acc[name]){
                items.push(`${i}:${acc[name][i]}`)
            }
            console.log(items.join(', '));
            return acc;
        }
    };

    return commands.reduce((acc,currCommand) => {
        const [op, v1, v2, v3] = currCommand.split(' ')
        return commandMap[op](acc, v1, v2, v3)
    }, {});
}