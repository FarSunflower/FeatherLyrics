import { Lesson } from './lesson';
import { Song } from './song';
import { wordsDatabase } from './songs.data';
import { Translation } from './translation';
import { Word } from './word';

//interface Builder

export interface Builder {
  lesson: Lesson;
  setLevel(level: string);
  setWords(words: string[]);
  setTranslations(translations: string[]);
  setSongs(songs: string[]);
  build(): Lesson;
}
