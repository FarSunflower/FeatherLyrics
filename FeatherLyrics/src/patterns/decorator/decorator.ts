abstract class Words {
  public word: string;
  public getWord(): string {
    return this.word;
  }
}
abstract class WordTranslate extends Words {
  decoratedWord: Words;
  public abstract getWord(): string;
}
// ------------------------------ Words ------------------------------
class ConcreteWord1 extends Words {
  public word = 'See';
}
class ConcreteWord2 extends Words {
  public word = 'I';
}
// ------------------------------ Options ------------------------------
class UkraineTranslate extends WordTranslate {
  constructor(word: Words) {
    super();
    this.decoratedWord = word;
  }
  public getWord(): string {
    //тут повинна бути функція яка приймає із масиву слово, та приймає її в якості аргументу, також тут має бути під'єднаний api перекладача
    return this.decoratedWord.getWord() + ', переклад: Бачити';
  }
}
class GermanyTranslate extends WordTranslate {
  constructor(word: Words) {
    super();
    this.decoratedWord = word;
  }
  public getWord(): string {
    //тут повинна бути функція яка приймає із масиву слово, та приймає її в якості аргументу, також тут має бути під'єднаний api перекладача
    return this.decoratedWord.getWord() + ', Übersetzung: ich';
  }
}
// ------------------------------ Configure our words ------------------------------
let wordSee = new ConcreteWord1();
wordSee = new UkraineTranslate(wordSee);
let wordI = new ConcreteWord2();
wordI = new GermanyTranslate(wordI);
console.log(wordSee.getWord());
console.log(wordI.getWord());
