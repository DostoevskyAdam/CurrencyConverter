//interfaces define contract between to elements in a program
//in other programming languages it is used to define functions
//but in typescript we can also define properties and DTOs
//here we define the DTO we recieve from the API,
//the structure of data, and the type for each property recieved

export interface ExchangeRatesResponse {
    rates: {
        [key: string] : number     
    },
    base: string,
    date: string
}
