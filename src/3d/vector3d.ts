import { Radian, toDegrees, toRadians, Scalar } from "./../utils";
import { Point3D } from "./point3d";

export class Vector3D {
  // [index: Point3D]: number;

  constructor(
    readonly point1: Point3D,
    readonly point2: Point3D = new Point3D()
  ) {}

  /**
   * Returns vectors magnitude
   */
  get magnitude(): number {
    const value = Object.keys(this.point1).reduce(
      (acc, value: string) =>
        acc + Math.pow(this.point1[value] + this.point2[value], 2),
      0
    );

    return Math.sqrt(Math.abs(value));
  }

  /**
   * Returns a direction of a vector,
   * magnitude will be 1
   */
  normalize(): Vector3D {
    return new Vector3D(
      Point3D.fromArray(
        Object.keys(this.point1).map(
          (key) => this.point1[key] / this.magnitude
        ) as [number, number, number]
      ),
      Point3D.fromArray(
        Object.keys(this.point1).map(
          (key) => this.point2[key] / this.magnitude
        ) as [number, number, number]
      )
    );
  }

  /**
   * Returns sum of two vectors
   * @param {Vector3D} vector
   * @returns {Vector3D} Vector3D
   */
  add(vector: Vector3D): Vector3D {
    return new Vector3D(
      Point3D.fromArray(
        Object.keys(this.point1).map(
          (key) => this.point1[key] + vector.point1[key]
        ) as [number, number, number]
      ),
      Point3D.fromArray(
        Object.keys(this.point2).map(
          (key) => this.point2[key] + vector.point2[key]
        ) as [number, number, number]
      )
    );
  }

  /**
   * Returns subtracted vector
   * @param vector
   * @returns
   */
  subtract(vector: Vector3D): Vector3D {
    return new Vector3D(
      Point3D.fromArray(
        Object.keys(this.point1).map(
          (key) => this.point1[key] - vector.point1[key]
        ) as [number, number, number]
      ),
      Point3D.fromArray(
        Object.keys(this.point2).map(
          (key) => this.point2[key] - vector.point2[key]
        ) as [number, number, number]
      )
    );
  }

  /**
   * Multiplies vector by given scalar
   * @param {Scalar} scalar
   * @returns {Vector3D} Vector3D
   */
  multiply(scalar: Scalar): Vector3D {
    return new Vector3D(
      Point3D.fromArray(
        Object.keys(this.point1).map((key) => this.point1[key] * scalar) as [
          number,
          number,
          number
        ]
      ),
      Point3D.fromArray(
        Object.keys(this.point2).map((key) => this.point2[key] * scalar) as [
          number,
          number,
          number
        ]
      )
    );
  }

  /**
   * Divides vector by given scalar
   * @param {Scalar} scalar
   * @returns {Vector3D} Vector3D
   */
  divide(scalar: Scalar): Vector3D {
    return new Vector3D(
      Point3D.fromArray(
        Object.keys(this.point1).map((key) => this.point1[key] / scalar) as [
          number,
          number,
          number
        ]
      ),
      Point3D.fromArray(
        Object.keys(this.point2).map((key) => this.point2[key] / scalar) as [
          number,
          number,
          number
        ]
      )
    );
  }

  /**
   * Returns a dot product of two vectors
   * @param {Vector3D} vector
   * @returns {Vector3D} Vector3D
   */
  dotProduct(vector: Vector3D): Scalar {
    return (
      Object.keys(this.point1).reduce(
        (acc, key) => acc + this.point1[key] * vector.point1[key],
        0
      ) +
      Object.keys(this.point2).reduce(
        (acc, key) => acc + this.point2[key] * vector.point2[key],
        0
      )
    );
  }

  crossProduct(vector: Vector3D): Vector3D {
    return new Vector3D(
      new Point3D(
        this.point1.y * vector.point1.z - this.point1.z * vector.point1.y,
        this.point1.z * vector.point1.x - this.point1.x * vector.point1.z,
        this.point1.x * vector.point1.y - this.point1.y * vector.point1.x
      ),
      new Point3D(
        this.point2.y * vector.point2.z - this.point2.z * vector.point2.y,
        this.point2.z * vector.point2.x - this.point2.x * vector.point2.z,
        this.point2.x * vector.point2.y - this.point2.y * vector.point2.x
      )
    )
  }
}
