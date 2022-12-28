import { expect, jest, test } from '@jest/globals';
import Circle from '../Circle';
import { useCircle } from '../useCircle'
jest.mock('../Circle')
const mockedCircle = jest.mocked(Circle);

test('mock object with just one method implemented', () => {

    mockedCircle.prototype.circumfence.mockReturnValue(66)

    const f = useCircle()
    expect(f).toBeCloseTo(66)

})

export { }
