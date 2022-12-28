import { expect, test, jest } from '@jest/globals'
import { main } from '../useTickets'
import { TicketBroker } from '../TicketBroker'
jest.mock( '../TicketBroker' )
const mockedTicketBroker = jest.mocked(TicketBroker)

test('one', async ()=>{

    //const mockRetrieve = jest.fn<(x:number) => Promise<string>>().mockResolvedValue("Stunt Show") 
    mockedTicketBroker.prototype.retrieveTicket.mockResolvedValue('Stunt')
    

    const r = await main()
    expect(r).toMatch('Stunt')
})