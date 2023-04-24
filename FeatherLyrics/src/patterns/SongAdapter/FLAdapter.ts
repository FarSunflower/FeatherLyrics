import { IPlayback, IStarsRating, SongAdapter } from "./SongAdapter";
import { ISong, SpotifySong } from "./SongFromSpotify";

export class FLAdapter extends SpotifySong implements SongAdapter {

        public constructor(
                public song: SpotifySong
        ) {
                super(song.id);
        }

        getStarsRating(iconPath: string): IStarsRating {
                const MAX_STARS = 5;
                const STARS_TEXT = 'stars';
                //@todo use {rating, duration, description} from super class
                let song = this.downloadSpotify(this.id); 
                // 1 -> 5 
                // 0.85 -> x
                let strStars: string = `${(song.rating/100) * MAX_STARS} ${STARS_TEXT}`; // 0.85 -> "4.5 stars" 
                const adaptedRating = {
                        starIconPath: iconPath, 
                        stars: strStars
                };
                return adaptedRating;
        }

        randomIntFromInterval(min, max): number { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min)
        }

        getShortSong(): IPlayback [] {
                const SHORT_DURATION = 59;
                //@todo use {rating, duration, description} from super class
                let song = this.downloadSpotify(this.id);
                // Duration from 0 to 180 sec; X playbacks by Y seconds in range of SHORT_DURATION
                let playbacks: IPlayback [] = [];
                let xCount = 5;
                for(let x = 0; x < xCount; ++x) {
                        const musicStart = this.randomIntFromInterval(1, 180);
                        let musicEnd =  musicStart + this.randomIntFromInterval(1, 11);
                        playbacks.push({
                                start: String(musicStart),
                                end: String(musicEnd)
                        }); 
                }
                return playbacks; //
        }
}