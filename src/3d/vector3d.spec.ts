import { Point3D } from "./point3d";
import { Vector3D } from "./vector3d";

describe("vector 3d", () => {
  describe("basic vector properties - attached to point (0, 0, 0)", () => {
    let point1: Point3D;
    let point2: Point3D;

    beforeAll(() => {
      point1 = new Point3D();
      point2 = new Point3D(1, 2, 3);
    });

    test("should create 3d vector from two points", () => {
      expect.assertions(1);

      // test
      const vector = new Vector3D(point1, point2);

      // assert
      expect(vector).toEqual({ point1, point2 });
    });

    test("should create 3d vector from two arrays", () => {
      expect.assertions(1);

      // test
      const vector = Vector3D.fromArray([0, 0, 0], [1, 2, 3]);

      // assert
      expect(vector).toEqual({ point1, point2 });
    });

    test("should return 3d vector's magnitude", () => {
      expect.assertions(1);

      // test
      const vector = new Vector3D(point1, point2);

      // assert
      expect(vector.magnitude).toBe(Math.sqrt(14));
    });

    test("should return normalized 2d vector", () => {
      expect.assertions(2);

      // test
      const vector = new Vector3D(point1, point2);
      const normalized = vector.normalize();

      // assert
      expect(normalized).toEqual({
        point1,
        point2: new Point3D(
          1 / Math.sqrt(14),
          Math.sqrt(2 / 7),
          3 / Math.sqrt(14)
        ),
      });
      expect(normalized.magnitude).toBe(1);
    });
  });

  describe("basic vectors operations - attached to 0, 0 point", () => {
    let point1: Point3D;
    let point2: Point3D;
    let point3: Point3D;

    let vector1: Vector3D;
    let vector2: Vector3D;

    beforeAll(() => {
      point1 = new Point3D();
      point2 = new Point3D(1, 2, 3);
      point3 = new Point3D(2, 3, 4);

      vector1 = new Vector3D(point1, point2);
      vector2 = new Vector3D(point1, point3);
    });

    test("should add two vectors", () => {
      expect.assertions(2);

      // test
      const resultVector = vector1.add(vector2);

      // assert
      expect(resultVector).toEqual({ point1, point2: new Point3D(3, 5, 7) });
      expect(resultVector.magnitude).toBe(Math.sqrt(83));
    });

    test("should subtract two vectors", () => {
      expect.assertions(2);

      // test
      const resultVector = vector1.subtract(vector2);

      // assert
      expect(resultVector).toEqual({ point1, point2: new Point3D(-1, -1, -1) });
      expect(resultVector.magnitude).toBe(Math.sqrt(3));
    });

    test("should multiply vector by scalar", () => {
      expect.assertions(2);

      // test
      const resultVector = vector1.multiply(3);

      // assert
      expect(resultVector).toEqual({ point1, point2: new Point3D(3, 6, 9) });
      expect(resultVector.magnitude).toBe(3 * Math.sqrt(14));
    });

    test("should divide vector by scalar", () => {
      expect.assertions(2);

      // test
      const resultVector = vector1.divide(3);

      // assert
      expect(resultVector).toEqual({
        point1,
        point2: new Point3D(1 / 3, 2 / 3, 1),
      });
      expect(resultVector.magnitude).toBe(Math.sqrt(14) / 3);
    });

    test("should return dot product of two vectors", () => {
      expect.assertions(1);

      // test
      const result = vector1.dotProduct(vector2);

      // assert
      expect(result).toBe(20);
    });

    test("should return cross product of two vectors", () => {
      expect.assertions(2);

      // test
      const result = vector1.crossProduct(vector2);

      // assert
      expect(result).toEqual(new Vector3D(point1, new Point3D(-1, 2, -1)));
      expect(result.magnitude).toBe(Math.sqrt(6));
    });
  });
});
