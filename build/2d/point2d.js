"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point2D = void 0;
/** Class representing a 2d point. */
class Point2D {
    /**
     * Create a 2d point. Defaults to (0, 0)
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    static fromArray([x, y]) {
        return new Point2D(x, y);
    }
}
exports.Point2D = Point2D;
