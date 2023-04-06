interface SongFromUser {
  fromWitch();
}
interface SongFromSpotify {
  fromSpotify();
}
class UserSong implements SongFromUser {
  fromWitch() {
    console.log('i am usersong');
    return 'You successful upload own song';
  }
}
class SpotifySong implements SongFromSpotify {
  fromSpotify() {
    console.log('i am spotifysong');
    return 'You successful upload song from spotify';
  }
}
class Adapter implements SongFromUser {
  spotifysong: SongFromSpotify;
  constructor(spotify: SongFromSpotify) {
    this.spotifysong = spotify;
  }
  public fromWitch() {
    this.spotifysong.fromSpotify();
  }
}
const spotifysong = new SpotifySong();
const adaptersong = new Adapter(spotifysong);
const usersong = new UserSong();
usersong.fromWitch();
spotifysong.fromSpotify();
adaptersong.fromWitch();
