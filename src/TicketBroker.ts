interface ReservedTickets {
    [index: number]: string
}

export class TicketBroker {

    ticket_no = 1
    reserved :ReservedTickets = {}
    
    constructor() {}

    async reserve(eventName :string) {

        const currentTicketNumber = this.ticket_no
        this.reserved[currentTicketNumber] = eventName 
        this.ticket_no++
        return currentTicketNumber

    }

    async retrieveTicket(ticketNumber: number) {
        
        if( this.reserved.hasOwnProperty(ticketNumber) ) {
            const eventName = this.reserved[ticketNumber]
            delete this.reserved[ticketNumber]
            return eventName
        } else {
            throw(`Ticket with number ${ticketNumber} is not in reserved list`)
        }

    }

}