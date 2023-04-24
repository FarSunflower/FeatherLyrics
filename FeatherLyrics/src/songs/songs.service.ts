import { Injectable } from '@nestjs/common';
import { FLAdapter } from 'src/SongAdapter/FLAdapter';
import { SpotifySong } from 'src/SongAdapter/SongFromSpotify';

@Injectable()
export class SongsService {
  // adapter
  getAdaptedSong(id: string) {
    const spotifySong = new SpotifySong(id);
    const songAdapter = new FLAdapter(spotifySong);

    console.log('Playbacks list:');
    console.log(songAdapter.getShortSong());
    console.log('Song stars rating:');
    console.log(
      songAdapter.getStarsRating(
        'https://img.freepik.com/free-vector/start_53876-25533.jpg',
      ),
    );
    // const usersong = new UserSong();
    // usersong.fromWitch();
    // spotifysong.fromSpotify();
    // adaptersong.fromWitch();
  }
  //end adapter
}
