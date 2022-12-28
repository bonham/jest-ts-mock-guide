import AnotherCircle from "./AnotherCircle";

function useAnotherCircle() {

    const c1: AnotherCircle = new AnotherCircle(1)
    const cf: number = c1.circumfence()
    return cf

}
export { useAnotherCircle }
