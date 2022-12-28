import { expect, jest, test } from '@jest/globals';
import { useCircle } from '../useCircle';
import Circle  from '../Circle';

// We are using the original class and mock one method definition in the class
// See https://stackoverflow.com/a/56565849/4720160

test('one', () => {

        jest.spyOn(Circle.prototype,'circumfence').mockImplementation(jest.fn<() => number>().mockReturnValue(88))

        const f = useCircle()
        expect(f).toBeCloseTo(88)
    })

export { }
