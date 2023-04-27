import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response, response } from 'express';
import { VocabularyService } from './vocabulary.service';

@Controller()
export class VocabularyController {
  constructor(private readonly vocabularyService: VocabularyService) {}
  @Get('vocabulary')
  getPage(@Res() response: Response) {
    return response.render('pages/vocabulary', {});
  }
}
