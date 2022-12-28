import AlsoCircle from "./AlsoCircle";

function useAlsoCircle() {

    const c1 = new AlsoCircle(3)
    const cf: number = c1.circumfence()
    return cf

}
export { useAlsoCircle }
