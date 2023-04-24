class Word {
    public word: string;
    constructor(word: string) {
      this.word = word;
    }
  }
  
class Translation {
    private _translation: string;
    constructor(translation: string) {
      this._translation = translation;
    }

    get getTranslation(): string {
        return this._translation;
    }

    set setTranslation(translation: string) {
        this._translation = translation;
    }
}

class Song {
    private _songUrl: string;
    constructor(songUrl: string) {
      this._songUrl = songUrl;
    }

    get getTranslation(): string {
        return this._songUrl;
    }

    set setTranslation(songUrl: string) {
        this._songUrl = songUrl;
    }
}
  //interface Builder
  abstract class Builder { // vs interface Builder
    private _words: Word [];
    private translations: Translation [];
    private songs: Song [];
    private level: string;

    constructor() {
        this.level = 'A1';
        this.translations = [];
        this._words = [];
        this.songs = [];
    }

    abstract setWords(words: Word []);
    abstract setTranslations(translations: Translation []);
    set setSongs(songs: Song []) {
        this.songs = songs;
    };
    abstract set setLevel(level: string);
  }
  
  class Lesson {
    private words: Word []; 
    private translations: Translation [];
    private songs: Song [];
    private level: string
    constructor(words: Word [], translations: Translation [] , level: string) {
      this.words = words;
      this.translations = translations;
      this.level = level;
    }
  
    printLesson() {
      console.log("Lesson level: ${this.level}");
      for (let i = 0; i < this.words.length; i++) {
        console.log("Word: ${this.words[i].word} - Translation: ${this.translations[i].translation}");
      }
    }
  }
  
  class B1LessonBuilder extends Builder{
    
    constructor() {
        super()
        this.words = [];
        this.translations = [];
        
    }
    
    //buildWords
    setWords(words) {
      this.words = words.map(word => new Word(word));
      return this;
    }
  
    setTranslations(translations) {
      this.translations = translations.map(translation => new Translation(translation));
      return this;
    }
  
    setLevel(level) {
      this.level = level;
      return this;
    }
  
    build() {
      const lesson = new Lesson(this.words, this.translations, this.level);
      console.log('Lesson created:');
      lesson.printLesson();
      return lesson;
    }
  }
  
  const wordsDatabase = [
    { word: 'hello', translation: 'привіт', level: 'A1' },
    { word: 'goodbye', translation: 'до побачення', level: 'A1' },
    { word: 'friend', translation: 'друг', level: 'A2' },
    { word: 'family', translation: 'родина', level: 'A2' },
    { word: 'travel', translation: 'подорож', level: 'B1' },
    { word: 'culture', translation: 'культура', level: 'B1' },
    { word: 'politics', translation: 'політика', level: 'B2' },
    { word: 'technology', translation: 'технології', level: 'B2' },
  ];
  
  
  const builder = new LessonBuilder();
  const B1Words = wordsDatabase.filter(word => word.level === 'B1').map(word => word.word);
  const B1Translations = wordsDatabase.filter(word => word.level === 'B1').map(word => word.translation);
  builder.setWords(B1Words).setTranslations(B1Translations).setLevel('B1').build();