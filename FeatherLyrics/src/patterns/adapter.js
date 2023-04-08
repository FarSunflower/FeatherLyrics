var UserSong = /** @class */ (function () {
    function UserSong() {
    }
    UserSong.prototype.fromWitch = function () {
        console.log('i am usersong');
        return 'You successful upload own song';
    };
    return UserSong;
}());
var SpotifySong = /** @class */ (function () {
    function SpotifySong() {
    }
    SpotifySong.prototype.fromSpotify = function () {
        console.log('i am spotifysong');
        return 'You successful upload song from spotify';
    };
    return SpotifySong;
}());
var Adapter = /** @class */ (function () {
    function Adapter(spotify) {
        this.spotifysong = spotify;
    }
    Adapter.prototype.fromWitch = function () {
        this.spotifysong.fromSpotify();
    };
    return Adapter;
}());
var spotifysong = new SpotifySong();
var adaptersong = new Adapter(spotifysong);
var usersong = new UserSong();
usersong.fromWitch();
spotifysong.fromSpotify();
adaptersong.fromWitch();
