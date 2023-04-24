import { Song } from './song';
import { Translation } from './translation';
import { Word } from './word';

export class Lesson {
  private _level: string;
  private _words: Word[] = [];
  private _translations: Translation[] = [];
  private _songs: Song[] = [];

  constructor(level: string) {
    this._level = level;
  }

  set level(level: string) {
    this._level = level;
  }

  get level(): string {
    return this._level;
  }

  set words(words: Word[]) {
    this._words = words;
  }

  get words(): Word[] {
    return this._words;
  }

  set translations(translations: Translation[]) {
    this._translations = translations;
  }

  get translations(): Translation[] {
    return this._translations;
  }

  set songs(songs: Song[]) {
    this._songs = songs;
  }

  get songs(): Song[] {
    return this._songs;
  }

  printLesson() {
    console.log(`Lesson level: ${this.level} Size ${this.words.length}`);
    console.log('Words:');
    console.log(this.words);
    console.log('Translations:');
    console.log(this.translations);
    console.log('Songs:');
    console.log(this.songs);
    // for (let i = 0; i < this.words.length; i++) {
    //   const word = this.words[i].word;
    //   console.log('word exist');
    //   const translation = this.translations[i].translation;
    //   console.log('translation exist');
    //   const song = this.songs
    //     ? this.songs[i].songUrl
    //     : 'songUrl does not exist';

    //   console.log(
    //     `Word: ${word} - Translation: ${translation} - Songs: ${song}`,
    //   );
    // }
  }
}
