abstract class BaseWord {
  public word: string;

  constructor(value: string) {
    this.word = value;
  }

  public getWord(): string {
    return this.word;
  }

  public abstract save(newTranslation: any): number;
}

abstract class TranslatedWord extends BaseWord {
  decoratedWord: BaseWord;

  constructor(word: BaseWord) {
    super(word.getWord());
    this.decoratedWord = word;
  }

  public abstract getTranslation(): string;
}

class EnglishWord extends BaseWord {
  public save(newTranslation: any): number {
    let database = [];
    let translation = {
      word: this.word,
      translatedTo: newTranslation.translatedTo,
      translation: newTranslation.translation
    };

    database.push(translation);
    database.forEach((dbWord) => console.log(dbWord));
    return database.length;
  }
}

class UkraineTranslate extends TranslatedWord {
  constructor(word: BaseWord) {
    super(word);
  }

  public getTranslation(): string {
    return `${this.decoratedWord.getWord()}, переклад: Бачити`;
  }

  public save(newTranslation): number {
    let count = this.decoratedWord.save(newTranslation) + 1;
    return count;
  }
}

class GermanyTranslate extends TranslatedWord {
  constructor(word: BaseWord) {
    super(word);
  }

  public getTranslation(): string {
    return `${this.decoratedWord.getWord()}, Übersetzung: ich`;
  }

  public save(newTranslation): number {
    let count = this.decoratedWord.save(newTranslation) + 1;
    return count;
  }
}

// Configure our words
let wordSee: BaseWord = new EnglishWord('See');
wordSee = new UkraineTranslate(wordSee);

let wordI: BaseWord = new EnglishWord('I');
wordI = new GermanyTranslate(wordI);

// Test the translations
console.log(wordSee.getWord()); // See
if (wordSee instanceof TranslatedWord) {
  console.log(wordSee.getTranslation()); // See, переклад: Бачити
}

console.log(wordI.getWord()); // I
if (wordI instanceof TranslatedWord) {
  console.log(wordI.getTranslation()); // I, Übersetzung: ich
}

// Test saving translations
wordSee.save({ translatedTo: 'ukrainian', translation: 'Бачити' }); // { word: 'See', translatedTo: 'ukrainian', translation: 'Бачити' }
wordI.save({ translatedTo: 'german', translation: 'ich' }); // { word: 'I', translatedTo: 'german', translation: 'ich' }