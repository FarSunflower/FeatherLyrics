export class Translation {
  private _translation: string;
  constructor(translation: string) {
    this._translation = translation;
  }

  get translation(): string {
    return this._translation;
  }

  set translation(translation: string) {
    this._translation = translation;
  }
}
