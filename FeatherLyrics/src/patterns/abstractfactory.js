/*ConcreteFactory (EnglishFactory)*/
var EnglishFactory = /** @class */ (function () {
    function EnglishFactory() {
    }
    EnglishFactory.prototype.createLessonBeginner = function () {
        return new EnglishBeginner();
    };
    EnglishFactory.prototype.createLessonAdvanced = function () {
        return new EnglishAdvanced();
    };
    return EnglishFactory;
}());
/*ConcreteFactory (SpanishFactory)*/
var SpanishFactory = /** @class */ (function () {
    function SpanishFactory() {
    }
    SpanishFactory.prototype.createLessonBeginner = function () {
        return new SpanishBeginner();
    };
    SpanishFactory.prototype.createLessonAdvanced = function () {
        return new SpanishAdvanced();
    };
    return SpanishFactory;
}());
/*English Beginner Lesson*/
var EnglishBeginner = /** @class */ (function () {
    function EnglishBeginner() {
    }
    EnglishBeginner.prototype.beginnercourse = function () {
        return 'English course level: Beginner';
    };
    return EnglishBeginner;
}());
/*Spanish Beginner Lesson*/
var SpanishBeginner = /** @class */ (function () {
    function SpanishBeginner() {
    }
    SpanishBeginner.prototype.beginnercourse = function () {
        return 'Spanish course level: Beginner';
    };
    return SpanishBeginner;
}());
/*English Advanced Lesson*/
var EnglishAdvanced = /** @class */ (function () {
    function EnglishAdvanced() {
    }
    EnglishAdvanced.prototype.advancedcourse = function () {
        return 'English course level: Advanced';
    };
    return EnglishAdvanced;
}());
/*Spanish Advanced Lesson*/
var SpanishAdvanced = /** @class */ (function () {
    function SpanishAdvanced() {
    }
    SpanishAdvanced.prototype.advancedcourse = function () {
        return 'Spanish course level: Advanced';
    };
    return SpanishAdvanced;
}());
/**
 * The client code works with factories and products only through abstract
 * types: AbstractFactory and AbstractProduct. This lets you pass any factory or
 * product subclass to the client code without breaking it.
 */
function clientCodeEnglish(factory) {
    var englishbegin = factory.createLessonBeginner();
    var englishadvan = factory.createLessonAdvanced();
    console.log(englishbegin.beginnercourse());
    console.log(englishadvan.advancedcourse());
}
function clientCodeSpanish(factory) {
    var spanishbegin = factory.createLessonBeginner();
    var spanishadvan = factory.createLessonAdvanced();
    console.log(spanishbegin.beginnercourse());
    console.log(spanishadvan.advancedcourse());
}
/**
 * The client code can work with any concrete factory class.
 */
console.log('Client: Testing client code with the english factory type...');
clientCodeEnglish(new EnglishFactory());
console.log('');
console.log('Client: Testing the same client code with the spanish factory type...');
clientCodeSpanish(new SpanishFactory());
