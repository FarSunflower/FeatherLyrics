export class Song {
  private _songUrl: string;
  constructor(songUrl: string) {
    this._songUrl = songUrl;
  }

  get songUrl(): string {
    return this._songUrl;
  }

  set songUrl(songUrl: string) {
    this._songUrl = songUrl;
  }
}
