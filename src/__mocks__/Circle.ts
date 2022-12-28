import { jest } from '@jest/globals';

export default jest.fn().mockImplementation(() => {
    return {
        default: jest.fn().mockImplementation(()=>{
            return {
                
            }
        }),
        circumfence: jest.fn().mockReturnValue(77)
    }
})
