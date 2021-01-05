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
        // let isHaveHall = this.screenings.find(x => x.hall === hall)

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

let m = new Movie("Wonder Woman 1984", "10.00");
console.log(m.newScreening("October 2, 2020", "IMAX 3D", `3D`));
console.log(m.newScreening("October 3, 2020", "Main", `regular`));
console.log(m.newScreening("October 4, 2020", "IMAX 3D", `3D`));
console.log(m.endScreening("October 2, 2020", "IMAX 3D", 150));
console.log(m.endScreening("October 3, 2020", "Main", 78));
console.log(m.toString());

m.newScreening("October 4, 2020", "235", `regular`);
m.newScreening("October 5, 2020", "Main", `regular`);
m.newScreening("October 3, 2020", "235", `regular`);
m.newScreening("October 4, 2020", "Main", `regular`);
console.log(m.toString());
