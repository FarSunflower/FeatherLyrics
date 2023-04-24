export class Song {
  SongTitle: string;
  SongImage: string;
  SongAuthor: string;
  id: number;
  constructor(
    SongTitle: string,
    SongImage: string,
    SongAuthor: string,
    id?: number,
  ) {
    this.SongTitle = SongTitle;
    this.SongImage = SongImage;
    this.SongAuthor = SongAuthor;
    this.id = id;
  }
}

export class SongAndDiff extends Song {
  like: number;
  difficult: number;
  constructor(
    SongTitle: string,
    SongImage: string,
    SongAuthor: string,
    id: number,
    like: number,
    difficult: number,
  ) {
    super(SongTitle, SongImage, SongAuthor, id);
    this.like = like;
    this.difficult = difficult;
  }
}
