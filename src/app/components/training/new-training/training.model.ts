

export class TrainingClass {
  constructor(
    public name: string,
    public value: string
  ) {}

  static createMyObject(name: string, value: string) {
    return new TrainingClass(name, value);
  }
}
