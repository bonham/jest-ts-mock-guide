import { expect, jest, test } from '@jest/globals';
import AlsoCircle from '../AlsoCircle';
import { useAlsoCircle } from '../useAlsoCircle';
jest.mock('../AlsoCircle')
const mockedCircle = jest.mocked(AlsoCircle);

test('mock object with just one method implemented', () => {

    mockedCircle.prototype.circumfence.mockReturnValue(66)

    const f = useAlsoCircle()
    expect(f).toBeCloseTo(66) 

})

export {}
