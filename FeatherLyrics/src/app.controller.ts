import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { wordsDatabase } from './patterns/Flyweight/songs.data';
import { TranslationFlyweight } from './patterns/Flyweight/flyweight';
import { getSizeInBytes, } from './patterns/Flyweight/flyweight.utils';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/flyweight')
  testFlyweight() {
    // використання Flyweight
    const translator = new TranslationFlyweight();
    let size_1 = getSizeInBytes(translator);
    console.log(`Init size = ${size_1}`);
    let memorySize = {
      initSize: size_1,
      memoryChanges: []
    };
    let songLyrics = ['hello', 'goodbye', 'sun', 'developer', 'travel', 'travel', 'culture', 'culture'];
    // createFlyweight(songLyrics) 
    // flyweightSongLyrics = ['hello', 'goodbye', 'sun', 'developer', 'travel', 'culture'];
    console.log();
    songLyrics.forEach((word) => {
        translator.getWordTranslation(word, wordsDatabase);
        memorySize.memoryChanges.push({
          wordSize: getSizeInBytes(word),
          poolLength: translator.getPoolLength(),
          poolSize: translator.getPoolSize(),
          memSize:  getSizeInBytes(translator)
        });      }
    );
    
    console.log('Кількість збережених перекладів у pool:', translator.getPoolLength());

    return JSON.stringify(memorySize, null, "    ");
  }
}
