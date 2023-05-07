var SongPlayer = /** @class */ (function () {
    function SongPlayer() {
    }
    SongPlayer.prototype.turnon = function () {
        console.log('Player turning on');
    };
    SongPlayer.prototype.turnoff = function () {
        console.log('Player turning off');
    };
    SongPlayer.prototype.next = function () {
        console.log('Player switched the song to the next');
    };
    SongPlayer.prototype.previous = function () {
        console.log('Player switched the song to the previous');
    };
    SongPlayer.prototype.rewind = function () {
        console.log('Player rewind some moment');
    };
    SongPlayer.prototype.setVolume = function (volumeLevel) {
        console.log('Setting volume to ' + volumeLevel);
    };
    return SongPlayer;
}());
var SongDescription = /** @class */ (function () {
    function SongDescription() {
    }
    SongDescription.prototype.Lyrics = function () {
        console.log('get song Lyrics');
    };
    SongDescription.prototype.name = function () {
        console.log('get song name');
    };
    SongDescription.prototype.author = function () {
        console.log('get song author');
    };
    return SongDescription;
}());
var SongStatus = /** @class */ (function () {
    function SongStatus() {
    }
    SongStatus.prototype.favorite = function (song) {
        console.log(song + ' add to favorite');
    };
    SongStatus.prototype.play = function (song) {
        console.log(song + ' playing right now');
    };
    SongStatus.prototype["delete"] = function (song) {
        console.log(song + ' deleted');
    };
    SongStatus.prototype.stop = function (song) {
        console.log(song + ' stopped');
    };
    return SongStatus;
}());
// ----
var SongFacade = /** @class */ (function () {
    function SongFacade(songplayer, songstatus, songdescription) {
        this.songplayer = songplayer;
        this.songstatus = songstatus;
        this.songdescription = songdescription;
    }
    SongFacade.prototype.StartSong = function () {
        this.songplayer.turnon();
        this.songdescription.Lyrics();
        this.songstatus.play('Katy Perry');
    };
    SongFacade.prototype.StopSong = function () {
        this.songplayer.turnoff();
        this.songdescription.Lyrics();
        this.songstatus.stop('Katy Perry');
    };
    return SongFacade;
}());
// ----
var statusSong = new SongStatus();
var descriptionSong = new SongDescription();
var playerSong = new SongPlayer();
var songfacade = new SongFacade(playerSong, statusSong, descriptionSong);
songfacade.StartSong();
