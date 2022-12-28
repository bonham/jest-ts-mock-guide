import Circle from "./Circle";

function useCircle() {

    const c1: Circle = new Circle(1)
    const cf: number = c1.circumference()
    return cf

}
export { useCircle }
