export class Lyrics {
  text: string;
  id: number;
  constructor(text: string, id?: number) {
    this.text = text;
    this.id = id;
  }
}