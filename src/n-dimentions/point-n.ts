/** Class representing a n-dimention point. */
export class PointND {
  [index: string]: number;
  constructor(...args: number[]) {
    args.forEach((value: number, i) => {
      this[`point${i + 1}`] = value;
    });
  }

  static fromArray(values: number[]): PointND {
    return new PointND(...values);
  }
}
