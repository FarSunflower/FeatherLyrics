import { throws } from 'assert';
import { Builder } from './builder';
import { Lesson } from './lesson';
import { Song } from './song';
import { Translation } from './translation';
import { Word } from './word';

export class B1LessonBuilder implements Builder {
  lesson: Lesson;
  constructor() {
    this.lesson = new Lesson('B1');
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
    this.lesson.songs = stringSongs.map((song) => new Song(song));
    return this;
  }

  build() {
    console.log(`Lesson ${this.lesson.level} created:`);
    this.lesson.printLesson();
    return this.lesson;
  }
}

// import { Builder } from './builder';
// import { Lesson } from './lesson';
// import { Song } from './song';
// import { Translation } from './translation';
// import { Word } from './word';

// export class B1LessonBuilder extends Builder {
//   constructor() {
//     super();
//   }

//   //buildWords
//   setWords(words: string[]) {
//     this.words = words.map((word) => new Word(word));
//     return this;
//   }

//   setTranslations(translations: string[]) {
//     this.translations = translations.map(
//       (translation) => new Translation(translation),
//     );
//     return this;
//   }

//   setLevel(level) {
//     this.level = level;
//     return this;
//   }

//   setSongs(songs: string[]) {
//     this.songs = songs.map((song: string) => {
//       return new Song(song);
//     });
//     return this;
//   }

//   build() {
//     const lesson = new Lesson(
//       this.level,
//       this.words,
//       this.translations,
//       this.songs,
//     );
//     console.log('Lesson created:');
//     lesson.printLesson();
//     return lesson;
//   }
// }
