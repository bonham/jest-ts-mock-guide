import {expect, jest, test} from '@jest/globals';
import { usecircle } from '../usecircle'; 

jest.mock('../Circle') // implementation used from automock

test('one',() => {

    const f = usecircle()
    expect(f).toBeCloseTo(0)
})

export {}
