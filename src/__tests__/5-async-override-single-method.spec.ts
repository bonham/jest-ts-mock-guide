import { expect, test, jest } from '@jest/globals'
import { main } from '../useTickets'
import { TicketBroker } from '../TicketBroker'

test('one', async ()=>{

    const mockRetrieve = jest.fn<(x:number) => Promise<string>>().mockResolvedValue("Stunt Show") 
    jest.spyOn(TicketBroker.prototype,'retrieveTicket').mockImplementation(mockRetrieve)


    const r = await main()
    expect(r).toMatch('Stunt')
})