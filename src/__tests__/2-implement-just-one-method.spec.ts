import { expect, jest, test } from '@jest/globals';
import Circle from '../Circle';
import { useCircle } from '../useCircle'
jest.mock('../Circle')
const mockedCircle = jest.mocked(Circle);

// Circle object will be mocked and all methods return undefined. Except we will set a return value for 
// 'circumference()' - per test

test('mock object with just one method implemented 1', () => {

    mockedCircle.prototype.circumference.mockReturnValue(66)

    const f = useCircle()
    expect(f).toBeCloseTo(66)

})

test('mock object with just one method implemented 2', () => {

    mockedCircle.prototype.circumference.mockReturnValue(77)

    const f = useCircle()
    expect(f).toBeCloseTo(77)

})
export { }
