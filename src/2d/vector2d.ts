import { Radian, toDegrees, toRadians, Scalar } from "./../utils";
import { Point2D } from "./point2d";

export class Vector2D {
  constructor(readonly point1: Point2D, readonly point2: Point2D = new Point2D()) {}

  /**
   * Returns vectors magnitude
   */
  get magnitude(): number {
    return Math.sqrt(
      Math.abs(
        Math.pow(this.point1.x + this.point2.x, 2) +
          Math.pow(this.point1.y + this.point2.y, 2)
      )
    );
  }

  /**
   * Returns a direction of a vector,
   * magnitude will be 1
   */
  normalize(): Vector2D {
    return new Vector2D(
      new Point2D(
        this.point1.x / this.magnitude,
        this.point1.y / this.magnitude
      ),
      new Point2D(
        this.point2.x / this.magnitude,
        this.point2.y / this.magnitude
      )
    );
  }

  /**
   * Returns sum of two vectors
   * @param {Vector2D} vector
   * @returns {Vector2D} Vector2D
   */
  add(vector: Vector2D): Vector2D {
    return new Vector2D(
      new Point2D(
        this.point1.x + vector.point1.x,
        this.point1.y + vector.point1.y
      ),
      new Point2D(
        this.point2.x + vector.point2.x,
        this.point2.y + vector.point2.y
      )
    );
  }

  /**
   * Returns subtracted vector
   * @param vector
   * @returns
   */
  subtract(vector: Vector2D): Vector2D {
    return new Vector2D(
      new Point2D(
        this.point1.x - vector.point1.x,
        this.point1.y - vector.point1.y
      ),
      new Point2D(
        this.point2.x - vector.point2.x,
        this.point2.y - vector.point2.y
      )
    );
  }

  /**
   * Multiplies vector by given scalar
   * @param {Scalar} scalar
   * @returns {Vector2D} Vector2D
   */
  multiply(scalar: Scalar): Vector2D {
    return new Vector2D(
      new Point2D(this.point1.x * scalar, this.point1.y * scalar),
      new Point2D(this.point2.x * scalar, this.point2.y * scalar)
    );
  }

  /**
   * Divides vector by given scalar
   * @param {Scalar} scalar
   * @returns {Vector2D} Vector2D
   */
  divide(scalar: Scalar): Vector2D {
    return new Vector2D(
      new Point2D(this.point1.x / scalar, this.point1.y / scalar),
      new Point2D(this.point2.x / scalar, this.point2.y / scalar)
    );
  }

  /**
   * Returns a dot product of two vectors
   * @param {Vector2D} vector
   * @returns {Vector2D} Vector2D
   */
  dotProduct(vector: Vector2D): Scalar {
    return (
      this.point1.x * vector.point1.x +
      this.point1.y * vector.point1.y +
      this.point2.x * vector.point2.x +
      this.point2.y * vector.point2.y
    );
  }

  /**
   * @deprecated cross product doesn't make sense in 2d space 
   */
  crossProduct(vector: Vector2D): Scalar {
    // |a| * |b| * sin(fi)
    console.warn(`cross product doesn't make sense in 2d space`);
    const angle = this.angle(vector);
    const rad = toRadians(angle);
    const factor = -1 // todo implement factor facing left -1 facing right 1
    return this.magnitude * vector.magnitude * Math.sin(factor * rad);
  }

  angle(vector: Vector2D): Radian {
    return toDegrees(
      Math.acos(this.dotProduct(vector) / (this.magnitude * vector.magnitude))
    );
  }
}
