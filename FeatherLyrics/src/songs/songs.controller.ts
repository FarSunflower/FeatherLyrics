import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response, response } from 'express';
import { SongsService } from './songs.service';
import { songs } from './songs';

@Controller()
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Get()
  getListSong(@Res() response: Response) {
    return response.render('pages/indexmy', {
      songs,
    });
  }

  @Get('song')
  getSongInfoSong(@Res() response: Response) {
    return response.render('pages/song', {
      songdata: this.songService.getSong(),
      arraydata: this.songService.splitlyrics(this.songService.getLyrics()),
    });
  }

  @Get('song2')
  getSongInfoSong2(@Res() response: Response) {
    return response.render('pages/song2', {
      songdata: this.songService.getSong2(),
      arraydata: this.songService.splitlyrics(this.songService.getLyrics2()),
    });
  }

  @Get('login')
  getlogin(@Res() response: Response) {
    return response.render('pages/loginpage', {});
  }
}
