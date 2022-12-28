import { expect, test } from '@jest/globals'
import { TicketBroker } from '../TicketBroker'

test('ticketnumber', async ()=>{

    const tb = new TicketBroker()
    const tn = await tb.reserve('myevent')
    expect(tn).toBe(1)

})