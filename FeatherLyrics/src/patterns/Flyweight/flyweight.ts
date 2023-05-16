import { wordsDatabase } from './songs.data';
export interface WordData {
  word: string;
  translation: string;
  level: string;
  song: string;
}

class Word {
  constructor(public text: string, public translation: string, public isTranslated: boolean = true) {}
}

class TranslationFlyweight {
  private pool: Record<string, Word> = {};

  getWordTranslation(word: string, wordsDatabase: WordData[]): string {
    if (word in this.pool) {
      return this.pool[word].translation;
    } else {
      const wordData = wordsDatabase.find((data) => data.word === word);
      if (wordData) {
        const wordObj = new Word(word, wordData.translation, true);
        this.pool[word] = wordObj;
        return wordObj.translation;
      } else {
        return 'перекладу немає,потрібно отримати переклад від API';
      }
    }
  }
  getPoolSize(): number {
    return Object.keys(this.pool).length;
  }
}

// використання Flyweight

const translator = new TranslationFlyweight();

console.log(translator.getWordTranslation('hello', wordsDatabase));
console.log(translator.getWordTranslation('goodbye', wordsDatabase));
console.log(translator.getWordTranslation('sun', wordsDatabase));
console.log(translator.getWordTranslation('developer', wordsDatabase));
console.log(translator.getWordTranslation('travel', wordsDatabase));
console.log(translator.getWordTranslation('travel', wordsDatabase));
console.log(translator.getWordTranslation('culture', wordsDatabase));
console.log(translator.getWordTranslation('culture', wordsDatabase));
console.log('Кількість збережених перекладів у pool:', translator.getPoolSize());


    