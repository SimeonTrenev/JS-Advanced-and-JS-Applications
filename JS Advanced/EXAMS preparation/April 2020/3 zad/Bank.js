class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
        
    }

    newCustomer(customer) {
       let { firstName, lastName, personalId } = customer;

       let isClient = this.allCustomers.find(c => c.personalId === personalId)

       if(isClient !== undefined){
        throw new Error(`${firstName} ${lastName} is already our customer!`)
       }

       customer.totalMoney = 0;
       customer.transactions = []

       this.allCustomers.push(customer)
       return customer
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId === personalId);

        if(!customer){
            throw new Error(`We have no customer with this ID!`)
        }

        

        customer.totalMoney += amount;
        
        customer.transactions.push(`${customer.firstName} ${customer.lastName} made deposit of ${amount}$!`)

        return `${customer.totalMoney}$`
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId === personalId);

        if(!customer){
            throw new Error(`We have no customer with this ID!`)
        }

        
        if(customer.totalMoney >= amount){
            customer.totalMoney -= amount;
            customer.transactions.push(`${customer.firstName} ${customer.lastName} withdrew ${amount}$!`)

            return `${customer.totalMoney}$`
        }else{
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`)
        }
    }

    customerInfo(personalId) {
        let customer = this.allCustomers.find(c => c.personalId === personalId)

        if(!customer){
            throw new Error(`We have no customer with this ID!`)
        }

        let result = [];

        result.push(`Bank name: ${this.bankName}`)
        result.push(`Customer name: ${customer.firstName} ${customer.lastName}`)
        result.push(`Customer ID: ${customer.personalId}`)
        result.push(`Total Money: ${customer.totalMoney}$`)
        result.push(`Transactions:`)
        for(let i = 0; i < customer.transactions.length; i++){
            result.push(`${customer.transactions.length - i}. ${customer.transactions[customer.transactions.length - 1 - i]}`)
        }

        return result.join('\n')
    }

    
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
