import { throws } from 'assert';
import { Builder } from './builder';
import { Lesson } from './lesson';
import { Song } from './song';
import { Translation } from './translation';
import { Word } from './word';

export class A2LessonBuilder implements Builder {
  lesson: Lesson;
  constructor() {
    this.lesson = new Lesson('A2');
  }

  setWords(stringWords: string[]) {
    this.lesson.words = stringWords.map((word) => new Word(word));
    return this;
  }

  setTranslations(stringTranslations: string[]) {
    this.lesson.translations = stringTranslations.map(
      (translation) => new Translation(translation),
    );
    return this;
  }

  setLevel(stringLevel) {
    this.lesson.level = stringLevel;
    return this;
  }

  setSongs(stringSongs: string[]) {
    this.lesson.songs = [];
    return this;
  }

  build() {
    console.log('Lesson created:');
    this.lesson.printLesson();
    return this.lesson;
  }
}
