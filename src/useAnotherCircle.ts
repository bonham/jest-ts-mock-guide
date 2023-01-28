import AnotherCircle from "./AnotherCircle.js";

function useAnotherCircle() {

    const c1: AnotherCircle = new AnotherCircle(1)
    const cf: number = c1.circumference()
    return cf

}
export { useAnotherCircle }
