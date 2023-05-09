abstract class BaseWord {
  public word: string;
  public getWord(): string {
    return this.word;
  }
  public abstract save(newTranslation: any): number;
}
abstract class TranslatedWord extends BaseWord {
  decoratedWord: BaseWord;
  public abstract getTranslation(): string;  
}
// ------------------------------ Words ------------------------------
class EnglishWord extends BaseWord {
  constructor(value: string) {
    super();
    this.word = value;
  }

  public save({origin, translatedTo, translation}): number {
    let database = [];
    let newTranslation = {
      word: this.word,
      translatedTo: translatedTo,
      translation: translation
    }
    database.push(newTranslation);
    database.forEach((dbWord)=> console.log(dbWord));
    return database.length;
  }
}
// ------------------------------ Options ------------------------------
class UkraineTranslate extends TranslatedWord {
  constructor(word: BaseWord) {
    super();
    this.decoratedWord = word;
  }
  public getTranslation(): string {
    //тут повинна бути функція яка приймає із масиву слово, та приймає її в якості аргументу, також тут має бути під'єднаний api перекладача
    return this.decoratedWord.getWord() + ', переклад: Бачити';
  }

  public save(newTranslation): number {
    let count = this.decoratedWord.save(this) + 1; 
    return true;
  }
}
class GermanyTranslate extends TranslatedWord {
  constructor(word: BaseWord) {
    super();
    this.decoratedWord = word;
  }
  public getTranslation(): string {
    //тут повинна бути функція яка приймає із масиву слово, та приймає її в якості аргументу, також тут має бути під'єднаний api перекладача
    return this.decoratedWord.getWord() + ', Übersetzung: ich';
  }
}
// ------------------------------ Configure our words ------------------------------
let wordSee = new EnglishWord('See');
wordSee = new UkraineTranslate(wordSee);
let wordI = new EnglishWord('I');
wordI = new GermanyTranslate(wordI);
console.log(wordSee.getWord());
console.log(wordI.getWord());
