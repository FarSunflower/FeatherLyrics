import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response, response } from 'express';
import { SongsService } from './songs.service';
import { songs } from './songsdto/songs';
import { lyrics } from './lyricsdto/lyrics';
import { profile } from 'console';

@Controller()
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Get('profile')
  getProfile(@Res() response: Response) {
    const pageNumber = 1;
    return response.render('pages/profile', {
      songs: this.songService.funcPagination(pageNumber),
      pageNumber,
    });
  }
  @Get('loginpage')
  getLogin(@Res() response: Response) {
    const pageNumber = 1;
    return response.render('pages/loginpage', {
      songs: this.songService.funcPagination(pageNumber),
      pageNumber,
    });
  }
  @Get()
  getListSong(@Res() response: Response) {
    const pageNumber = 1;
    return response.render('pages/indexmy', {
      songs: this.songService.funcPagination(pageNumber),
      pageNumber,
    });
  }
  @Get('/:id')
  async getSong(@Param('id') id: string, @Res() response: Response) {
    const songId = Number(id);
    const lyric = this.songService.splitLyrics(songId, lyrics);
    const space = '\n';
    return response.render('pages/songs', {
      songs,
      songId,
      lyric,
      space,
    });
  }

  // Client for SongAdapter
  @Get('rating/:id')
  async getRating(@Param('id') id: string, @Res() response: Response) {
    console.log('ID = ' + id);
    const songId = id;
    await this.songService.getAdaptedSong(songId);
    // return 'Rating';
    return response.render('pages/adapter-index', {
      songs,
      songId,
    });
  }
  @Get('login')
  getlogin(@Res() response: Response) {
    return response.render('pages/loginpage', {});
  }
}
