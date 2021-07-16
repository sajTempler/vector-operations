/** Class representing a 3d point. */
export class Point3D {
    [index: string]: number;
    /**
     * Create a 2d point. Defaults to (0, 0)
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} z - The y value.
     */
    constructor(
        public x: number = 0,
        public y: number = 0,
        public z: number = 0
    ) {}

    static fromArray([x, y, z]: [number, number, number]): Point3D {
        return new Point3D(x, y, z);
    }
}
