import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { SongsService } from './songs.service';

@Controller()
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Get('song')
  getSongInfoSong(@Res() response: Response) {
    return response.render('pages/song', {
      songdata: this.songService.getSong(),
      likedata: this.songService.getLikes(),
      lyricssong: this.songService.getLyrics(),
    });
  }
  @Get('song2')
  getSongInfoSong2(@Res() response: Response) {
    return response.render('pages/song2', {
      songdata: this.songService.getSong2(),
      likedata: this.songService.getLikes2(),
      lyrics2song: this.songService.getLyrics2(),
    });
  }
  @Get()
  getSongInfoIndex(@Res() response: Response) {
    return response.render('pages/index', {
      songdata: this.songService.getSong(),
      likedata: this.songService.getLikes(),
      song1data: this.songService.getSong2(),
      like1data: this.songService.getLikes2(),
    });
  }
}
