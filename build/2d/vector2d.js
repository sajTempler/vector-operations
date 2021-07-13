"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2D = void 0;
const utils_1 = require("./../utils");
const point2d_1 = require("./point2d");
class Vector2D {
    constructor(point1, point2 = new point2d_1.Point2D()) {
        this.point1 = point1;
        this.point2 = point2;
    }
    /**
     * Returns vectors magnitude
     */
    get magnitude() {
        return Math.sqrt(Math.abs(Math.pow(this.point1.x + this.point2.x, 2) +
            Math.pow(this.point1.y + this.point2.y, 2)));
    }
    /**
     * Returns a direction of a vector,
     * magnitude will be 1
     */
    normalize() {
        return new Vector2D(new point2d_1.Point2D(this.point1.x / this.magnitude, this.point1.y / this.magnitude), new point2d_1.Point2D(this.point2.x / this.magnitude, this.point2.y / this.magnitude));
    }
    /**
     * Returns sum of two vectors
     * @param {Vector2D} vector
     * @returns {Vector2D} Vector2D
     */
    add(vector) {
        return new Vector2D(new point2d_1.Point2D(this.point1.x + vector.point1.x, this.point1.y + vector.point1.y), new point2d_1.Point2D(this.point2.x + vector.point2.x, this.point2.y + vector.point2.y));
    }
    /**
     * Returns subtracted vector
     * @param vector
     * @returns
     */
    subtract(vector) {
        return new Vector2D(new point2d_1.Point2D(this.point1.x - vector.point1.x, this.point1.y - vector.point1.y), new point2d_1.Point2D(this.point2.x - vector.point2.x, this.point2.y - vector.point2.y));
    }
    /**
     * Multiplies vector by given scalar
     * @param {Scalar} scalar
     * @returns {Vector2D} Vector2D
     */
    multiply(scalar) {
        return new Vector2D(new point2d_1.Point2D(this.point1.x * scalar, this.point1.y * scalar), new point2d_1.Point2D(this.point2.x * scalar, this.point2.y * scalar));
    }
    /**
     * Divides vector by given scalar
     * @param {Scalar} scalar
     * @returns {Vector2D} Vector2D
     */
    divide(scalar) {
        return new Vector2D(new point2d_1.Point2D(this.point1.x / scalar, this.point1.y / scalar), new point2d_1.Point2D(this.point2.x / scalar, this.point2.y / scalar));
    }
    /**
     * Returns a dot product of two vectors
     * @param {Vector2D} vector
     * @returns {Vector2D} Vector2D
     */
    dotProduct(vector) {
        return (this.point1.x * vector.point1.x +
            this.point1.y * vector.point1.y +
            this.point2.x * vector.point2.x +
            this.point2.y * vector.point2.y);
    }
    crossProduct(vector) {
        // |a| * |b| * sin(fi)
        console.warn(`cross product shouldn't be used in 2d space`);
        const angle = this.angle(vector);
        const rad = utils_1.toRadians(angle);
        const factor = -1; // todo implement factor facing left -1 facing right 1
        return this.magnitude * vector.magnitude * Math.sin(factor * rad);
    }
    angle(vector) {
        return utils_1.toDegrees(Math.acos(this.dotProduct(vector) / (this.magnitude * vector.magnitude)));
    }
}
exports.Vector2D = Vector2D;
