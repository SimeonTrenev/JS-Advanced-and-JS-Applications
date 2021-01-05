class VeterinaryClinic {
    constructor(clinicName, capacity){
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.totalProfit = 0;
        this.currentWorkload = 0;
    }

    getPet(owner, petName){
        if(!owner){
            return;
        }

        return owner.pets.find(x => x.petName === petName)
    }

    getClient(ownerName){
        let client = this.clients.find(x => x.ownerName === ownerName)

        return client;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        if(this.capacity <= this.currentWorkload){
            throw new Error(`Sorry, we are not able to accept more patients!`)
        }

        // TODO: Check if currently in clinic with procedures

        let currentOwner = this.getClient(ownerName);
        let currentPet = this.getPet(currentOwner, petName)

        if(currentOwner && currentPet){
            if(currentPet.procedures.length > 0){
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`)
            }else{
                currentPet.procedures = procedures
            }
        }else if(!currentOwner){
            currentOwner = {
                ownerName,
                pets: []
            }
            this.clients.push(currentOwner)
        }

        // Add pet to owner
        currentOwner.pets.push({
            petName,
            kind,
            procedures
        })

         // Modify workload
         this.currentWorkload++;

         // return welcome message
         return `Welcome ${petName}!`
    }

    onLeaving(ownerName, petName) {
        let currentOwner = this.getClient(ownerName)
        let currentPet = this.getPet(currentOwner,petName)

        if(!currentOwner){
            throw new Error(`Sorry, there is no such client!`)
        }

        if(!currentPet || currentPet.procedures.length == 0){
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        }


        // Add new price 500.00
        this.totalProfit += 500 * currentPet.procedures.length

        // clear procedures of the current pet
        currentPet.procedures = [];

        // update workload
        this.currentWorkload--;

         // return 
        return `Goodbye ${petName}. Stay safe!`
    }

    toString() {
        let result = [];

        let percentage = Math.floor((this.currentWorkload / this.capacity) * 100)
        result.push(`${this.clinicName} is ${percentage}% busy today!`)

        result.push(`Total profit: ${this.totalProfit.toFixed(2)}$`)

       this.clients.sort((a, b) => a.ownerName.localeCompare(b.ownerName))

       for(let elements of this.clients){
           elements.pets.sort((a,b) => a.petName.localeCompare(b.petName))

           result.push(`${elements.ownerName} with:`)
           for(let pet of elements.pets){
               result.push(`---${ pet.petName } - a ${ pet.kind.toLowerCase() } that needs: ${pet.procedures.join(', ')}`)
           }
       }

        return result.join('\n')
    }
}

let clinic = new VeterinaryClinic("SoftCare", 10);
console.log(
  clinic.newCustomer("Jim Jones", "Tom", "Cat", ["A154B", "2C32B", "12CDB"])
);
console.log(
  clinic.newCustomer("Anna Morgan", "Max", "Dog", ["SK456", "DFG45", "KS456"])
);
console.log(clinic.newCustomer("Jim Jones", "Tiny", "Cat", ["A154B"]));
console.log(clinic.onLeaving("Jim Jones", "Tiny"));
console.log(clinic.toString());
clinic.newCustomer("Jim Jones", "Sara", "Dog", ["A154B"]);
console.log(clinic.toString());
