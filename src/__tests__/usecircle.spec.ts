import {expect, jest, test} from '@jest/globals';

import { usecircle } from '../usecircle'; 

test('one',() => {

    const f = usecircle()
    expect(f).toBeCloseTo(18.84)
}) 