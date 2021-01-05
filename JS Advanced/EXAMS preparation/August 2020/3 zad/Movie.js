class Movie {
    constructor(movieName, ticketPrice) {
        this.movieName = movieName;
        this.ticketPrice = Number(ticketPrice);
        this.screenings = [];
        this.totalSoldTickets = 0;
        this.totalProfit = 0;
        this.currentProfit = 0;
    }

    newScreening(date, hall, description) {

        let isHaveDate = this.screenings.find(x => x.date === date && x.hall === hall)
       

        if(isHaveDate){
            throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
        }

        this.screenings.push({
            date,
            hall,
            description
        })

        return `New screening of ${this.movieName} is added.`
    }

    endScreening(date, hall, soldTickets) {
        let isHaveDate = this.screenings.find(x => x.date === date && x.hall === hall)
        

        if(!isHaveDate){
            throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
        }

        this.totalProfit += Number(soldTickets) * this.ticketPrice;
        this.currentProfit = Number(soldTickets) * this.ticketPrice
        this.totalSoldTickets += Number(soldTickets);

        let index;
        for(let i = 0; i < this.screenings.length;i++){
            if(this.screenings[i] === date && this.screenings[i] === hall){
                index = i;
                break;
            }
        }
        this.screenings.splice(index,1)

        return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${this.currentProfit}`
    }

    toString() {
        let result = [];

        result.push(`${this.movieName} full information:`)
        result.push(`Total profit: ${this.totalProfit.toFixed(0)}$`)
        result.push(`Sold Tickets: ${this.totalSoldTickets}`)

        
        
        if(this.screenings.length > 0){
            result.push(`Remaining film screenings:`)
            let sorted = this.screenings
            .sort((a,b) => a.hall.localeCompare(b.hall))
            .forEach(movie => {
                result.push(`${movie.hall} - ${movie.date} - ${movie.description}`)
            })
        }else{
            result.push(`No more screenings!`)
        }

        return result.join('\n')
    }
}




























// class Movie {
//     constructor(movieName, ticketPrice) {
//         this.movieName = movieName;
//         this.ticketPrice = Number(ticketPrice);
//         this.screenings = [];
//         this.totalMovieProfit = 0;
//         this.totalSoldMovieTickets = 0;
//     }

//     newScreening(date, hall, description) {
//         let screen = this.screenings.find(o => o.date === date && o.hall === hall)
//         let obj = {
//             date,
//             hall,
//             description
//         }

//         if(screen === undefined){
//             this.screenings.push(obj)
//             return `New screening of ${this.movieName} is added.`
//         }else{
//             throw new Error(`Sorry, ${hall} hall is not available on ${date}`)
//         }
//     }

//     endScreening(date, hall, soldTickets) {
//        let screen = this.screenings.find(o => o.date === date && o.hall === hall)

//         if(screen){
//             let currentProfit = Number(soldTickets) * Number(this.ticketPrice)
//             this.totalSoldMovieTickets += Number(soldTickets);
//             this.totalMovieProfit += currentProfit
            
//             let index = 0;

//             for(let i = 0; i < this.screenings.length;i++){
//                 if(this.screenings[i] === date && this.screenings[i] === hall){
//                     index = i
//                     break;
//                 }
//             }
//             this.screenings.splice(index,1)
//             return `${this.movieName} movie screening on ${date} in ${hall} hall has ended. Screening profit: ${currentProfit}`
//         }else{
//             throw new Error(`Sorry, there is no such screening for ${this.movieName} movie.`)
//         }
//     }

//     toString() {
//         let result = [];
//         result.push(`${this.movieName} full information:`)
//         result.push(`Total profit: ${this.totalMovieProfit.toFixed(0)}$`)
//         result.push(`Sold Tickets: ${this.totalSoldMovieTickets}`)
//         if(this.screenings.length > 0){
//             result.push(`Remaining film screenings:`)
//             let sorted = this.screenings
//             .sort((a,b) => a.hall.localeCompare(b.hall))
//             .forEach(movie => {
//                 result.push(`${movie.hall} - ${movie.date} - ${movie.description}`)
//             })
            
//         }else{
//             result.push(`No more screenings!`)
//         }

//         return result.join('\n')
//     }
// }

let m = new Movie('Wonder Woman 1984', '10.00');
console.log(m.newScreening('October 2, 2020', 'IMAX 3D', `3D`));
console.log(m.newScreening('October 3, 2020', 'Main', `regular`));
console.log(m.newScreening('October 4, 2020', 'IMAX 3D', `3D`));
console.log(m.endScreening('October 2, 2020', 'IMAX 3D', 150));
console.log(m.endScreening('October 3, 2020', 'Main', 78));
console.log(m.toString());

m.newScreening('October 4, 2020', '235', `regular`);
m.newScreening('October 5, 2020', 'Main', `regular`);
m.newScreening('October 3, 2020', '235', `regular`);
m.newScreening('October 4, 2020', 'Main', `regular`);
console.log(m.toString());
