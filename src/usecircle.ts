import Circle from "./Circle.js";

function useCircle() {

    const c1: Circle = new Circle(1)
    const cf: number = c1.circumference()
    return cf

}
export { useCircle }
