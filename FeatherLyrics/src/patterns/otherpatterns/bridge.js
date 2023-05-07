var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* Concrete Implementor - 1 */
var Beginners = /** @class */ (function () {
    function Beginners() {
    }
    Beginners.prototype.difficult = function () {
        console.log('Beginners difficult a1, a2');
        return 'Begginer level';
    };
    return Beginners;
}());
/* Concrete Implementor - 2 */
var Intermediate = /** @class */ (function () {
    function Intermediate() {
    }
    Intermediate.prototype.difficult = function () {
        console.log('Intermediate difficult b1, b2');
        return 'Intermediate level';
    };
    return Intermediate;
}());
/* Concrete Implementor - 3 */
var Advanced = /** @class */ (function () {
    function Advanced() {
    }
    Advanced.prototype.difficult = function () {
        console.log('Advanced difficult c1, c2');
        return 'Advanced level';
    };
    return Advanced;
}());
/* Abstraction (abstract class) */
var SongLanguage = /** @class */ (function () {
    function SongLanguage(songlanguage) {
        this.songlanguage = songlanguage;
    }
    SongLanguage.prototype.SongLanguage = function () {
        var difficult = this.songlanguage.difficult();
        return 'Songlanguage with difficult:' + difficult;
    };
    return SongLanguage;
}());
/* RefinedAbstraction - 1*/
var English = /** @class */ (function (_super) {
    __extends(English, _super);
    function English() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    English.prototype.SongLanguage = function () {
        var difficult = this.songlanguage.difficult();
        return 'English with difficult:' + difficult;
    };
    return English;
}(SongLanguage));
/* RefinedAbstraction - 2 */
var Spanish = /** @class */ (function (_super) {
    __extends(Spanish, _super);
    function Spanish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Spanish.prototype.SongLanguage = function () {
        var difficult = this.songlanguage.difficult();
        return 'Spanish with difficult:' + difficult;
    };
    return Spanish;
}(SongLanguage));
/* Client program */
var implementation = new Beginners();
var abstraction = new SongLanguage(implementation);
console.log(abstraction.SongLanguage());
var implementation2 = new Intermediate();
var abstraction2 = new Spanish(implementation2);
console.log(abstraction2.SongLanguage());
var implementation3 = new Advanced();
var abstraction3 = new English(implementation3);
console.log(abstraction3.SongLanguage());
