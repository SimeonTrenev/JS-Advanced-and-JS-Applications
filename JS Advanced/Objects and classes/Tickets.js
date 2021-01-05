function tickets(arr, criteria) {
    class Tickets {
        constructor(descriptor) {
            let [destination, price, status] = descriptor.split("|");
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
 
    return arr
        .map(ticket => new Tickets(ticket))
        .sort(sortByCriteria);
 
 
    function sortByCriteria(a, b) {
        try {
            return a[criteria].localeCompare(b[criteria]);
        } catch(e) {
            return a[criteria] - b[criteria];
        }
    }
}
console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
)
)

// function tickets(arr, sortingCriterion){

//     class Ticket {
//         constructor(destination, price, status) {
//             this.destination = destination;
//             this.price = Number(price);
//             this.status = status
//         }
    
//         static sortTickets(tickets, prop) {
//             return [...tickets]
//             .sort((a, b) => {
//                 if(typeof a[prop] === 'string'){
//                     return a[prop].localeCompare(b[prop])
//                 }else {
//                     return a[prop] - b[prop]
//                 }
//             });
//         }
//     }
    
//     const tickets = arr
//     .reduce((prev, line) => {
//         let [destination, price, status] = line.split('|')
    
//         let ticket = new Ticket(destination,price,status);
    
//         prev.push(ticket)
//         return prev;
//     },[])
    
//     return Ticket.sortTickets(tickets,sortingCriterion);
        
//     }