class Circle {

    radius: number;

    constructor(r: number) {
        this.radius = r
    } 

    circumfence() :number {
        return 2 * 3.14 * this.radius
    }

    area() {
        return 3.14 * 3.14 * this.radius
    }

}
export default  Circle