import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response, response } from 'express';
import { SongsService } from './songs.service';
import { songs } from './songsdto/songs';
import { lyrics } from './lyricsdto/lyrics';

@Controller()
export class SongsController {
  constructor(private readonly songService: SongsService) {}

  @Get()
  getListSong(@Res() response: Response) {
    return response.render('pages/indexmy', {
      songs,
    });
  }
  @Get('/:id')
  async getSong(@Param('id') id: string, @Res() response: Response) {
    const songId = Number(id);
    return response.render('pages/songs', {
      songs,
      songId,
      lyrics,
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
