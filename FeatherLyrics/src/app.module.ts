import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { VocabularyModule } from './vocabulary/vocabulary.module';
import { LeasonsModule } from './leasons/leasons.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SongsModule,
    VocabularyModule,
    LeasonsModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
