/* Implementor interface*/
interface Difficult {
  difficult(): string;
}
/* Concrete Implementor - 1 */
class Beginners implements Difficult {
  public difficult(): string {
    console.log('Beginners difficult a1, a2');
    return 'Begginer level';
  }
}
/* Concrete Implementor - 2 */
class Intermediate implements Difficult {
  public difficult(): string {
    console.log('Intermediate difficult b1, b2');
    return 'Intermediate level';
  }
}
/* Concrete Implementor - 3 */
class Advanced implements Difficult {
  public difficult(): string {
    console.log('Advanced difficult c1, c2');
    return 'Advanced level';
  }
}
/* Abstraction (abstract class) */
class SongLanguage {
  protected songlanguage: Difficult;
  constructor(songlanguage: Difficult) {
    this.songlanguage = songlanguage;
  }
  public SongLanguage(): string {
    const difficult = this.songlanguage.difficult();
    return 'Songlanguage with difficult:' + difficult;
  }
}
/* RefinedAbstraction - 1*/
class English extends SongLanguage {
  public SongLanguage(): string {
    const difficult = this.songlanguage.difficult();
    return 'English with difficult:' + difficult;
  }
}
/* RefinedAbstraction - 2 */
class Spanish extends SongLanguage {
  public SongLanguage(): string {
    const difficult = this.songlanguage.difficult();
    return 'Spanish with difficult:' + difficult;
  }
}
/* Client program */
const implementation = new Beginners();
const abstraction = new SongLanguage(implementation);
console.log(abstraction.SongLanguage());
const implementation2 = new Intermediate();
const abstraction2 = new Spanish(implementation2);
console.log(abstraction2.SongLanguage());
const implementation3 = new Advanced();
const abstraction3 = new English(implementation3);
console.log(abstraction3.SongLanguage());
