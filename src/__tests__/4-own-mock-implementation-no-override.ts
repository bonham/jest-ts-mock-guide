import { expect, jest, test } from '@jest/globals';
import { useCircle } from '../usecircle.js';
jest.mock('../Circle.js', () => {
    return function () {
        return {
            circumference: jest.fn().mockReturnValue(44),
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