import { jest } from '@jest/globals';

export default class AnotherCircle {

    constructor() {

    }

    circumfence() { return 10 }

    area() { return 20}
}


// it's also possible like this

// export default jest.fn().mockImplementation(() => {
//     return {
//         default: jest.fn().mockImplementation(()=>{
//             return {
                
//             }
//         }),
//         circumfence: jest.fn().mockReturnValue(77)
//     }
// })
