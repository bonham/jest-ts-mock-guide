import { jest, test, expect } from '@jest/globals'

class Apple {
    constructor() {

    }
    color() {
        return "green"
    }
}

function check(o : Apple) :void {
    return undefined
}

test("Mock the instance", () => {

    // Mock an instance of a class, but do not mock the class
    const x = jest.fn()

    const mockap: jest.Mocked<Apple> = {
        color: jest.fn()
    }

    mockap.color.mockImplementation(()=>"blue")
    check(mockap)

    expect(mockap.color()).toBe("blue")


})

test("Mock the class",() => {

    const mockColor = jest.fn()
    mockColor.mockReturnValue("blue")
    const MockApple = jest.fn().mockImplementation(() => {
        return { color: mockColor }
    })

    const myap = new MockApple() as Apple

    check(myap)
    expect(myap.color()).toBe("blue")


})