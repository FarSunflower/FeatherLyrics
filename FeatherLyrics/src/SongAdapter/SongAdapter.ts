export interface IStarsRating {
  starIconPath: string;
  stars: string;
}

export interface IPlayback {
  start: string;
  end: string;
}

export interface SongAdapter {
  getStarsRating: (iconPath: string) => IStarsRating; // "4.5 stars"
  getShortSong: () => IPlayback[]; // several musical playbacks with duration less than 1 min
}
