import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { LeasonsModule } from './leasons/leasons.module';

@Module({

  imports: [
    SongsModule,
    VocabularyModule,
    LeasonsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
