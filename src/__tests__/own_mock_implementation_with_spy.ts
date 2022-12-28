import { beforeEach, expect, jest, test } from '@jest/globals';
import { useAnotherCircle } from '../useAnotherCircle';
import AnotherCircle from '../AnotherCircle';
jest.mock('../AnotherCircle')

// this is using the mock implementation from __mocks__  AND !! overrides a method

test('one', () => {

    jest.spyOn(AnotherCircle.prototype,'circumfence').mockImplementation(jest.fn<() => number>().mockReturnValue(99))

   
    const f = useAnotherCircle()
    expect(f).toBeCloseTo(99)
})

export { }