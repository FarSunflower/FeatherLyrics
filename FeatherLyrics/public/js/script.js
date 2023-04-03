function authorize(){ 
const CLIENT_ID = '0749df1023d34fe49088b64eae364f85';
const REDIRECT_URI = 'http://localhost:3000/callback'; // замініть на свій власний

// Перенаправляє користувача на сторінку дозволу на доступ
const requestAuthorization = () => {
  const scope = 'user-read-private user-read-email'; // змініть обсяг доступу на свій власний
  const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${encodeURIComponent(scope)}`;
  window.location = url;
};

}
//Bridge
var Gestures = function (output) {
    this.output = output;
    this.tap = function () { this.output.click(); }
    this.swipe = function () { this.output.move(); }
    this.pan = function () { this.output.drag(); }
    this.pinch = function () { this.output.zoom(); }
};

var Mouse = function (output) {
    this.output = output;
    this.click = function () { this.output.click(); }
    this.move = function () { this.output.move(); }
    this.down = function () { this.output.drag(); }
    this.wheel = function () { this.output.zoom(); }
};

function run() {
    var hand = new Gestures(screen);
    var mouse = new Mouse(screen);

    hand.tap();
    hand.swipe();
    hand.pinch();

    mouse.click();
    mouse.move();
    mouse.wheel();
}
