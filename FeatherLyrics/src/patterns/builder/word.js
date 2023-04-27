"use strict";
exports.__esModule = true;
exports.Word = void 0;
var Word = /** @class */ (function () {
    function Word(word) {
        this._word = word;
    }
    Object.defineProperty(Word.prototype, "word", {
        get: function () {
            return this._word;
        },
        set: function (word) {
            this._word = word;
        },
        enumerable: false,
        configurable: true
    });
    return Word;
}());
exports.Word = Word;
