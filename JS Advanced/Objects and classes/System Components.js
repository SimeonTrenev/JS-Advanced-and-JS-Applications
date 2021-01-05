function systemComponents(array){

    let systems = new Map();

    for(let elements of array){
        let [systemName, componentName, subcomponentName] = elements.split(' | ')
        
        if(!systems.get(systemName)){
            systems.set(systemName, new Map())
        }

        if(!systems.get(systemName).get(componentName)){
            systems.get(systemName).set(componentName, [])
        }

        systems.get(systemName).get(componentName).push(subcomponentName)

    }
    
    let systemSorted = Array.from(systems.keys()).sort((s1, s2) => sortSystems(s1, s2));

    for(let system of systemSorted){
        console.log(system)
        let componentSorted = Array.from(systems.get(system).keys()).sort((c1,c2) => sortComponents(system, c1, c2))

        for(let component of componentSorted){
            console.log(`|||${component}`);
            systems.get(system).get(component).forEach(sc => console.log(`||||||${sc}`))
        }
    }



    function sortSystems(s1, s2){
        if(systems.get(s1).size != systems.get(s2).size) {
            return systems.get(s2).size - systems.get(s1).size;
        }else{
            return s1.toLowerCase().localeCompare(s2.toLowerCase())
        }
    }

    function sortComponents(system, c1, c2){
        return systems.get(system).get(c2).length - systems.get(system).get(c1).length
    }
    


    

}
systemComponents(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
)