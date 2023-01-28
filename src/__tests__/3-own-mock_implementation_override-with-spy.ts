import { expect, jest, test } from '@jest/globals';
import { useAnotherCircle } from '../useAnotherCircle.js';
import AnotherCircle from '../AnotherCircle.js';
jest.mock('../AnotherCircle.js')

// this is using the mock implementation from __mocks__  AND !! overrides a method

test('one', () => {

    jest.spyOn(AnotherCircle.prototype, 'circumference').mockImplementation(jest.fn<() => number>().mockReturnValue(99))

    const f = useAnotherCircle()
    expect(f).toBeCloseTo(99)
})

export { }