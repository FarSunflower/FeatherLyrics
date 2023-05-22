import { getSizeInBytes } from './flyweight.utils';
import { wordsDatabase } from './songs.data';
export interface WordData {
  word: string;
  translation: string;
  level: string;
  song: string;
}

export class Word {
  constructor(public text: string, 
    public translation: string,
    public isTranslated: boolean = true) {}
}

export class TranslationFlyweight {
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
    return Object.values(this.pool).reduce((sum, word) => sum + getSizeInBytes(word), 0);
  }

  getPoolLength(): number {
    return Object.keys(this.pool).length;
  }
}
