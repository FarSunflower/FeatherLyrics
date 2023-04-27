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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var Words = /** @class */ (function () {
    function Words() {
    }
    Words.prototype.getWord = function () {
        return this.word;
    };
    return Words;
}());
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
var WordTranslate = /** @class */ (function (_super) {
    __extends(WordTranslate, _super);
    function WordTranslate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WordTranslate;
}(Words));
// ------------------------------ Cars ------------------------------
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Model S';
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 73000;
    };
    return ModelS;
}(Car));
var ConcreteWord1 = /** @class */ (function (_super) {
    __extends(ConcreteWord1, _super);
    function ConcreteWord1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.word = 'See';
        return _this;
    }
    return ConcreteWord1;
}(Words));
var ModelX = /** @class */ (function (_super) {
    __extends(ModelX, _super);
    function ModelX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Model X';
        return _this;
    }
    ModelX.prototype.cost = function () {
        return 77000;
    };
    return ModelX;
}(Car));
var ConcreteWord2 = /** @class */ (function (_super) {
    __extends(ConcreteWord2, _super);
    function ConcreteWord2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.word = 'I';
        return _this;
    }
    return ConcreteWord2;
}(Words));
// ------------------------------ Options ------------------------------
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', Enhanced Autopilot';
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return EnhancedAutoPilot;
}(CarOptions));
var UkraineTranslate = /** @class */ (function (_super) {
    __extends(UkraineTranslate, _super);
    function UkraineTranslate(word) {
        var _this = _super.call(this) || this;
        _this.decoratedWord = word;
        return _this;
    }
    UkraineTranslate.prototype.getWord = function () {
        //тут повинна бути функція яка приймає із масиву слово, та приймає її в якості аргументу, також тут має бути під'єднаний api перекладача
        return this.decoratedWord.getWord() + ', переклад: Бачити';
    };
    return UkraineTranslate;
}(WordTranslate));
var SmartAirSuspension = /** @class */ (function (_super) {
    __extends(SmartAirSuspension, _super);
    function SmartAirSuspension(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    SmartAirSuspension.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', Smart Air Suspension';
    };
    SmartAirSuspension.prototype.cost = function () {
        return this.decoratedCar.cost() + 2500;
    };
    return SmartAirSuspension;
}(CarOptions));
var GermanyTranslate = /** @class */ (function (_super) {
    __extends(GermanyTranslate, _super);
    function GermanyTranslate(word) {
        var _this = _super.call(this) || this;
        _this.decoratedWord = word;
        return _this;
    }
    GermanyTranslate.prototype.getWord = function () {
        //тут повинна бути функція яка приймає із масиву слово, та приймає її в якості аргументу, також тут має бути під'єднаний api перекладача
        return this.decoratedWord.getWord() + ', Übersetzung: ich';
    };
    return GermanyTranslate;
}(WordTranslate));
var RearFacingSeats = /** @class */ (function (_super) {
    __extends(RearFacingSeats, _super);
    function RearFacingSeats(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    RearFacingSeats.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ', Rear Facing Seats';
    };
    RearFacingSeats.prototype.cost = function () {
        return this.decoratedCar.cost() + 4000;
    };
    return RearFacingSeats;
}(CarOptions));
// ------------------------------ Configure our Tesla! ------------------------------
var myTesla = new ModelS();
myTesla = new SmartAirSuspension(myTesla);
myTesla = new RearFacingSeats(myTesla);
console.log(myTesla.cost());
console.log(myTesla.getDescription());
var wordSee = new ConcreteWord1();
wordSee = new UkraineTranslate(wordSee);
var wordI = new ConcreteWord2();
wordI = new GermanyTranslate(wordI);
console.log(wordSee.getWord());
console.log(wordI.getWord());
