import { TicketBroker } from "./TicketBroker";

export async function main() {

    const tb = new TicketBroker()
    const ticketNumber = await tb.reserve("Circus Event")
    const myEvent = await tb.retrieveTicket(ticketNumber)
    return myEvent
}