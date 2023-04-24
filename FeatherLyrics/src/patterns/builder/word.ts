export class Word {
  private _word: string;
  constructor(word: string) {
    this._word = word;
  }
  set word(word: string) {
    this._word = word;
  }
  get word() {
    return this._word;
  }
}
