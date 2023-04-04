import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { LeasonsModule } from './leasons/leasons.module';

@Module({
<<<<<<< HEAD
  imports: [
    SongsModule,
    VocabularyModule,
    LeasonsModule,
  ],
=======
  imports: [SongsModule, VocabularyModule, LeasonsModule],
>>>>>>> 25f0e3915f54cbeb1ff8b838c1d8e7ae0aad4664
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
