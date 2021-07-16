import { Point3D } from "./point3d";

test("should create 3d point with default values", () => {
  expect.assertions(3);

  // test
  const point = new Point3D();

  // assert
  expect(point.x).toBe(0);
  expect(point.y).toBe(0);
  expect(point.z).toBe(0);
});

test("should create 3d point with given values", () => {
  expect.assertions(3);

  // test
  const point = new Point3D(1, 2, 3);

  // assert
  expect(point.x).toBe(1);
  expect(point.y).toBe(2);
  expect(point.z).toBe(3);
});
