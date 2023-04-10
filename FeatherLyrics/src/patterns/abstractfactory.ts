/*AbstractFactory (LessonFactory) Beginner Advanced*/
interface LessonFactory {
  createLessonBeginner(): Beginner;
  createLessonAdvanced(): Advancedd;
}

/*ConcreteFactory (EnglishFactory)*/
class EnglishFactory implements LessonFactory {
  public createLessonBeginner(): Beginner {
    return new EnglishBeginner();
  }
  public createLessonAdvanced(): Advancedd {
    return new EnglishAdvanced();
  }
}
/*ConcreteFactory (SpanishFactory)*/
class SpanishFactory implements LessonFactory {
  public createLessonBeginner(): Beginner {
    return new SpanishBeginner();
  }

  public createLessonAdvanced(): Advancedd {
    return new SpanishAdvanced();
  }
}

/*BeginnerLesson*/
interface Beginner {
  beginnercourse(): string;
}

/*English Beginner Lesson*/
class EnglishBeginner implements Beginner {
  public beginnercourse(): string {
    return 'English course level: Beginner';
  }
}
/*Spanish Beginner Lesson*/
class SpanishBeginner implements Beginner {
  public beginnercourse(): string {
    return 'Spanish course level: Beginner';
  }
}

/*AdvancedLesson*/
interface Advancedd {
  advancedcourse(): string;
}

/*English Advanced Lesson*/
class EnglishAdvanced implements Advancedd {
  public advancedcourse(): string {
    return 'English course level: Advanced';
  }
}
/*Spanish Advanced Lesson*/
class SpanishAdvanced implements Advancedd {
  public advancedcourse(): string {
    return 'Spanish course level: Advanced';
  }
}

/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 */
function clientCodeEnglish(factory: LessonFactory) {
  const englishbegin = factory.createLessonBeginner();
  const englishadvan = factory.createLessonAdvanced();

  console.log(englishbegin.beginnercourse());
  console.log(englishadvan.advancedcourse());
}
function clientCodeSpanish(factory: LessonFactory) {
  const spanishbegin = factory.createLessonBeginner();
  const spanishadvan = factory.createLessonAdvanced();

  console.log(spanishbegin.beginnercourse());
  console.log(spanishadvan.advancedcourse());
}
/**
 * The client code can work with any concrete factory class.
 */
console.log('Client: Testing client code with the english factory type...');
clientCodeEnglish(new EnglishFactory());

console.log('');

console.log(
  'Client: Testing the same client code with the spanish factory type...',
);
clientCodeSpanish(new SpanishFactory());
