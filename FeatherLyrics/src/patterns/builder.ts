class Word {
  word: string;

  constructor(word: string) {
    this.word = word;
  }
}

class Translation {
  translation: string;

  constructor(translation: string) {
    this.translation = translation;
  }
}

class Lesson {
  words: Word[];
  translations: Translation[];
  level: string;

  constructor(words: Word[], translations: Translation[], level: string) {
    this.words = words;
    this.translations = translations;
    this.level = level;
  }

  printLesson() {
    console.log(`Lesson level: ${this.level}`);
    for (let i = 0; i < this.words.length; i++) {
      console.log(`Word: ${this.words[i].word} - Translation: ${this.translations[i].translation}`);
    }
  }
}

class LessonBuilder {
  words: string[];
  translations: string[];
  level: string;

  constructor() {
    this.words = [];
    this.translations = [];
  }

  setWords(words: string[]) {
    this.words = words;
    return this;
  }

  setTranslations(translations: string[]) {
    this.translations = translations;
    return this;
  }

  setLevel(level: string) {
    this.level = level;
    return this;
  }

  build() {
    const words = this.words.map(word => new Word(word));
    const translations = this.translations.map(translation => new Translation(translation));
    const lesson = new Lesson(words, translations, this.level);
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
