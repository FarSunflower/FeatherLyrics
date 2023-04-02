import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response, response } from 'express';
import { SongsService } from './songs.service';

@Controller()
export class SongsController {
  constructor(private readonly songService: SongsService) {}
  @Get('song')
  getSongInfoSong(@Res() response: Response) {
    return response.render('pages/song', {
      songdata: this.songService.getSong(),
      likedata: this.songService.getLikes(),
      arraydata: this.songService.splitlyrics(this.songService.getLyrics()),
    });
  }
  @Get('song2')
  getSongInfoSong2(@Res() response: Response) {
    return response.render('pages/song2', {
      songdata: this.songService.getSong2(),
      likedata: this.songService.getLikes2(),
      arraydata: this.songService.splitlyrics(this.songService.getLyrics2()),
    });
  }
  // @Get('song:id')
  // fuckd(@Param id) {
  // getSongInfoSong3(@Res() response: Response) {
  //   return response.render('pages/song', {
  //     songdata: this.songService.getSong(':id'),
  //     likedata: this.songService.getLikes(':id'),
  //     arraydata: this.songService.splitlyrics(this.songService.getLyrics(':id')),
  //   });
  // }}
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
