import Circle from "./Circle";

function useCircle() {

    const c1: Circle = new Circle(1)
    const cf: number = c1.circumfence()
    return cf

}
export { useCircle }
