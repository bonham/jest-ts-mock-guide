import Circle from "./Circle";

function usecircle() {

    const c1: Circle = new Circle(3)
    const cf: number = c1.circumfence()
    return cf

}
export { usecircle }
console.log(usecircle())