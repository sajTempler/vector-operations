export * from "./2d/point2d";
export * from "./2d/vector2d";
export * from "./utils";

import { Point3D } from "./3d/point3d";
import { PointND } from "./n-dimentions/point-n";

const p1 = new Point3D(1, 2, 3);
console.log("p1", p1);

const p2 = PointND.fromArray([1, 2, 3, 4, 5, 6, 7, 8]);
console.log("p2", p2);
