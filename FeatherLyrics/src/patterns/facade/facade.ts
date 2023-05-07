class SongPlayer {
  turnon() {
    console.log('Player turning on');
  }
  turnoff() {
    console.log('Player turning off');
  }
  next() {
    console.log('Player switched the song to the next');
  }
  previous() {
    console.log('Player switched the song to the previous');
  }
  rewind() {
    console.log('Player rewind some moment');
  }
  setVolume(volumeLevel: number) {
    console.log('Setting volume to ' + volumeLevel);
  }
}
class SongDescription {
  Lyrics() {
    console.log('get song Lyrics');
  }
  name() {
    console.log('get song name');
  }
  author() {
    console.log('get song author');
  }
}
class SongStatus {
  favorite(song: string) {
    console.log(song + ' add to favorite');
  }
  play(song: string) {
    console.log(song + ' playing right now');
  }
  delete(song: string) {
    console.log(song + ' deleted');
  }
  stop(song: string) {
    console.log(song + ' stopped');
  }
}

// ----
class SongFacade {
  private songplayer: SongPlayer;
  private songstatus: SongStatus;
  private songdescription: SongDescription;

  constructor(
    songplayer: SongPlayer,
    songstatus: SongStatus,
    songdescription: SongDescription,
  ) {
    this.songplayer = songplayer;
    this.songstatus = songstatus;
    this.songdescription = songdescription;
  }
  public StartSong() {
    this.songplayer.turnon();
    this.songdescription.Lyrics();
    this.songstatus.play('Katy Perry');
  }
  public StopSong() {
    this.songplayer.turnoff();
    this.songdescription.Lyrics();
    this.songstatus.stop('Katy Perry');
  }
}
// ----
const statusSong = new SongStatus();
const descriptionSong = new SongDescription();
const playerSong = new SongPlayer();
const songfacade = new SongFacade(playerSong, statusSong, descriptionSong);
songfacade.StartSong();
