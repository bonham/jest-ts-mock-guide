import { expect, test, jest } from '@jest/globals'
import { main } from '../useTickets.js'
import { TicketBroker } from '../TicketBroker.js'
jest.mock('../TicketBroker.js')
const mockedTicketBroker = jest.mocked(TicketBroker)

test('one', async () => {

    //const mockRetrieve = jest.fn<(x:number) => Promise<string>>().mockResolvedValue("Stunt Show") 
    mockedTicketBroker.prototype.retrieveTicket.mockResolvedValue('Stunt')


    const r = await main()
    expect(r).toMatch('Stunt')
})