import { Vector2D } from './2d/vector2d';
import { Vector3D } from './3d/vector3d';
export type Scalar = number;
export type Angle = number;
export type Radian = number;
export type Degree = number;

export const toRadians = (degrees: Degree): Radian => degrees * (Math.PI / 180);
export const toDegrees = (radians: Radian): Degree => (radians * 180) / Math.PI;
