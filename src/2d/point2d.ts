/** Class representing a 2d point. */
export class Point2D {

    /**
     * Create a 2d point. Defaults to (0, 0)
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(
        public x: number = 0,
        public y: number = 0
    ) {}

    static fromArray([x, y]: [number, number]): Point2D {
        return new Point2D(x, y);
    }
}
