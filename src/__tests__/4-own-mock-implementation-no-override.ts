import { expect, jest, test } from '@jest/globals';
import { useCircle } from '../useCircle';
jest.mock('../Circle', () => {
    return function () {
        return {
            circumfence: jest.fn().mockReturnValue(44),
            area: jest.fn()
        }
    }
})

// I don't know how to override single methods of this mockimplementation with each test

test('one', () => {

    const f = useCircle()
    expect(f).toBeCloseTo(44)
})

export { }