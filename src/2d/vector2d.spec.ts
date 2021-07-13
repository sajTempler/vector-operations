import { Point2D } from "./point2d";
import { Vector2D } from "./vector2d";

describe("vector 2d", () => {
  describe("basic vector properties - attached to 0, 0 point", () => {
    let point1: Point2D;
    let point2: Point2D;

    beforeAll(() => {
      point1 = new Point2D();
      point2 = new Point2D(3, 4);
    });

    test("should create 2d vector from two points", () => {
      expect.assertions(1);

      // test
      const vector = new Vector2D(point1, point2);

      // assert
      expect(vector).toEqual({ point1, point2 });
    });

    test("should return 2d vector's magnitude", () => {
      expect.assertions(1);

      // test
      const vector = new Vector2D(point1, point2);

      // assert
      expect(vector.magnitude).toBe(5);
    });

    test("should return normalized 2d vector", () => {
      expect.assertions(2);

      // test
      const vector = new Vector2D(point1, point2);
      const normalized = vector.normalize();

      // assert
      expect(normalized).toEqual({ point1, point2: new Point2D(0.6, 0.8) });
      expect(normalized.magnitude).toBe(1);
    });
  });

  describe("basic vectors operations - attached to 0, 0 point", () => {
    let point1: Point2D;
    let point2: Point2D;
    let point3: Point2D;

    let vector1: Vector2D;
    let vector2: Vector2D;

    beforeAll(() => {
      point1 = new Point2D();
      point2 = new Point2D(3, 4);
      point3 = new Point2D(4, 3);

      vector1 = new Vector2D(point1, point2);
      vector2 = new Vector2D(point1, point3);
    });

    test("should add two vectors", () => {
      expect.assertions(2);

      // test
      const resultVector = vector1.add(vector2);

      // assert
      expect(resultVector).toEqual({ point1, point2: new Point2D(7, 7) });
      expect(resultVector.magnitude).toBe(7 * Math.sqrt(2));
    });

    test("should subtract two vectors", () => {
      expect.assertions(2);

      // test
      const resultVector = vector1.subtract(vector2);

      // assert
      expect(resultVector).toEqual({ point1, point2: new Point2D(-1, 1) });
      expect(resultVector.magnitude).toBe(Math.sqrt(2));
    });

    test("should multiply vector by scalar", () => {
      expect.assertions(2);

      // test
      const resultVector = vector1.multiply(2);

      // assert
      expect(resultVector).toEqual({ point1, point2: new Point2D(6, 8) });
      expect(resultVector.magnitude).toBe(10);
    });

    test("should divide vector by scalar", () => {
      expect.assertions(2);

      // test
      const resultVector = vector1.divide(2);

      // assert
      expect(resultVector).toEqual({ point1, point2: new Point2D(1.5, 2) });
      expect(resultVector.magnitude).toBe(5 / 2);
    });

    test("should return dot product of two vectors", () => {
      expect.assertions(1);

      // test
      const result = vector1.dotProduct(vector2);

      // assert
      expect(result).toBe(24);
    });

    test.skip("should return cross product of two vectors", () => {
      expect.assertions(1);

      // test
      const result = vector1.crossProduct(vector2);

      // todo: investigate precision
      // assert
      expect(result).toBe(-7);
    });
  });
});
