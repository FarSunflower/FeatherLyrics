import { A2LessonBuilder } from './a2lessonbuilder';
import { B1LessonBuilder } from './b1lessonbuilder';
// import { B1LessonBuilder } from './b1lessonbuilder';
import { Builder } from './builder';
import { Lesson } from './lesson';
import { wordsDatabase } from './songs.data';

export class LessonBuilderClient {
  private _builder: Builder;

  set builder(builder: Builder) {
    this._builder = builder;
  }

  get builder() {
    return this._builder;
  }

  createLesson() {
    const lessonLevel = this.builder.lesson.level;
    const words = wordsDatabase
      .filter((word) => word.level === lessonLevel)
      .map((word) => word.word);

    const translations = wordsDatabase
      .filter((word) => word.level === lessonLevel)
      .map((word) => word.translation);

    const songs = wordsDatabase
      .filter((word) => word.level === lessonLevel)
      .map((word) => word.song);

    const lesson: Lesson = this.builder
      .setWords(words)
      .setTranslations(translations)
      .setSongs(songs)
      .build();

    return lesson;
  }

  createB1Lesson() {
    this.builder = new B1LessonBuilder();
    return this.createLesson();
  }

  createA2Lesson() {
    this.builder = new A2LessonBuilder();
    return this.createLesson();
  }
}
