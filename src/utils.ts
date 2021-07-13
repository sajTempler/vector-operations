import { Vector2D } from './2d/vector2d';
export type Scalar = number;
export type Angle = number;
export type Radian = number;
export type Degree = number;

export type Vector = Vector2D;

export interface BasicVectorOperations {
    add: (vector: Vector) => Vector;
    subtract: (vector: Vector) => Vector;
    multiply: (scalar: Scalar) => Vector;
    divide: (scalar: Scalar) => Vector;
    dotProduct: (vector: Vector) => Scalar;
    crossProduct: (vector: Vector) => Scalar;
}

export const toRadians = (degrees: Degree): Radian => degrees * (Math.PI / 180);
export const toDegrees = (radians: Radian): Degree => (radians * 180) / Math.PI;
