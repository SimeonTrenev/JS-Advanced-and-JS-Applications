solve = () => {
    const fighter = function (name = '') {
        [this.name, this.health, this.stamina] = [name, 100, 100]

        this.fight = () => {
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`)
        }
    }

    const mage = function (name = ''){
        [this.name, this.health, this.mana] = [name, 100, 100]

        this.cast = (spell) => {
            this.mana--;
            console.log(`${this.name} cast ${spell}`)
        }
    }
    
    return {
        fighter: (name = '') => new fighter(name),
        mage: (name = '') => new mage(name)
    };
}