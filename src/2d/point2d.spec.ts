import { Point2D } from "./point2d";

test("should create 2d point with default values", () => {
  expect.assertions(2);

  // test
  const point = new Point2D();

  // assert
  expect(point.x).toBe(0);
  expect(point.y).toBe(0);
});

test("should create 2d point with given values", () => {
  expect.assertions(2);

  // test
  const point = new Point2D(2, 3);

  // assert
  expect(point.x).toBe(2);
  expect(point.y).toBe(3);
});
