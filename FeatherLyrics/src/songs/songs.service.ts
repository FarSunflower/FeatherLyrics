import { Injectable } from '@nestjs/common';
import { FLAdapter } from 'src/SongAdapter/FLAdapter';
import { SpotifySong } from 'src/SongAdapter/SongFromSpotify';
import { songs } from './songsdto/songs';
import { lyrics } from './lyricsdto/lyrics';
import { Lyrics } from './lyricsdto/lyrics.dto';
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
    //end adapter
  }
  funcPagination(pageNumber) {
    // const pageNumber = 1;
    const itemsPerPage = 8;
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = songs.slice(startIndex, endIndex);
    return itemsToShow;
  }
  splitLyrics(id: number, lyrics: Lyrics[]) {
    return lyrics[id].text.split(' ');
  }
}
