export interface ISong {
  rating: number;
  duration: number;
  description: string;
}

export interface SongFromSpotify {
  id: string;
  rating?: number;
  duration?: number;
  description?: string;
  downloadSpotify: (id: string) => ISong;
}

export class SpotifySong implements SongFromSpotify {
  public constructor(
    public id: string,
    public rating?: number,
    public duration?: number,
    public description?: string,
  ) {
    // @todo use once inside ConcreteAdapter (FLAdapter)
    // let {
    //   rating: numRating,
    //   duration: numDuration,
    //   description: strDescript
    // } : ISong = this.downloadSpotify(id);
    // this.rating = numRating;
    // this.duration = numDuration;
    // this.description = strDescript;
  }

  downloadSpotify(id: string): ISong {
    console.log('i am spotifysong');
    const anySong: ISong = {
      rating: 85,
      duration: 180,
      description: 'You successful downloaded song from spotify',
    }; //@todo API end-point request
    return anySong;
  }
}
