import { Circle } from "./Circle";

function usecircle() {

    const c1 = new Circle(3)
    const cf = c1.circumfence()
    return cf

}
export { usecircle }
console.log(usecircle())