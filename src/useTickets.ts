import { TicketBroker } from "./TicketBroker.js";

export async function main() {

    const tb = new TicketBroker()
    const ticketNumber = await tb.reserve("Circus Event")
    const myEvent = await tb.retrieveTicket(ticketNumber)
    return myEvent
}