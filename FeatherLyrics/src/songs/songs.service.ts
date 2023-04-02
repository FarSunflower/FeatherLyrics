import { Injectable } from '@nestjs/common';

interface Song {
  SongTitle: string;
  SongImage: string; //image
  SongAuthor: string;
  id: number;
}
interface Likes {
  like: number;
  difficult: number;
}
interface Lyrics {
  text?: string;
  textafter?: string;
  textbefore?: string;
}
@Injectable()
export class SongsService {
  getSong(): Song {
    const SongAfterDark = {
      SongTitle: 'After Dark',
      SongImage: 'img/afterdark.png',
      SongAuthor: 'Mr. Kitty',
      id: 1,
    };
    return SongAfterDark;
  }
  getSong2(): Song {
    const SongHoldMyHand = {
      SongTitle: 'Hold My Hand',
      SongImage: 'img/holdmyhand.png',
      SongAuthor: 'Lady Gaga',
      id: 2,
    };
    return SongHoldMyHand;
  }
  getLikes(): Likes {
    const likes = {
      like: 20000,
      difficult: 1,
    };
    return likes;
  }
  getLikes2(): Likes {
    const likes = {
      like: 25000,
      difficult: 2,
    };
    return likes;
  }
  splitlyrics(lyrics): Lyrics {
    const splitlyr = { textbefore: lyrics.text.split('\n') };
    const splitly = { textafter: splitlyr.textbefore.join('\n') };
    return splitly;
  }
  getLyrics(): Lyrics {
    const lyrics = {
      text: `I see you
      You see me
      How pleasant
      This feeling
      The moment
      You hold me
      I missed you
      I'm sorry
      I've given
      What I have
      I showed you
      I'm growing
      The ashes
      Fall slowly
      As your voice
      Consoles me
      As the hours pass
      I will let you know
      That I need to ask
      Before I'm alone
      How it feels to rest
      On your patient lips
      To eternal bliss
      I'm so glad to know
      As the hours pass
      I will let you know
      That I need to ask
      Before I'm alone
      How it feels to rest
      On your patient lips
      To eternal bliss
      I'm so glad to know
      We're swaying
      To drum beats
      In motion
      I'm feeling
      My patience
      Controlling
      The question
      I won't speak
      We're telling
      The stories
      Our laughter
      He knows me
      We're leaving
      We're talking
      You're closer
      It's calming
      As the hours pass
      I will let you know
      That I need to ask
      Before I'm alone
      How it feels to rest
      On your patient lips
      To eternal bliss
      I'm so glad to know
      As the hours pass
      I will let you know
      That I need to ask
      Before I'm alone
      How it feels to rest
      On your patient lips
      To eternal bliss
      I'm so glad to know
      The night will hold us close
      And the stars will guide us home
      I've been waiting for this moment
      We're finally alone
      I turn to ask the question
      So anxious, my thoughts
      Your lips were soft like winter
      In your passion, I was lost
      As the hours pass
      I will let you know
      That I need to ask
      Before I'm alone
      How it feels to rest
      On your patient lips
      To eternal bliss
      I'm so glad to know
      As the hours pass
      I will let you know
      That I need to ask
      Before I'm alone
      How it feels to rest
      On your patient lips
      To eternal bliss
      I'm so glad to know
      As the hours pass
      I will let you know
      That I need to ask
      Before I'm alone
      How it feels to rest
      On your patient lips
      To eternal bliss
      I'm so glad to know
      As the hours pass
      I will let you know
      That I need to ask
      Before I'm alone
      How it feels to rest
      On your patient lips
      To eternal bliss
      I'm so glad to know`,
    };
    return lyrics;
  }
  getLyrics2(): Lyrics {
    const lyrics = {
      text: `Tell me you need me
      Hold my hand, everything will be okay
      I heard from the heavens that clouds have been grey
      Pull me close, wrap me in your aching arms
      I see that you're hurtin', why'd you take so long
      To tell me you need me? I see that you're bleeding
      You don't need to show me again
      But if you decide to, I'll ride in this life with you
      I won't let go 'til the end
      So cry tonight
      But don't you let go of my hand
      You can cry every last tear
      I won't leave 'til I understand
      Promise me, just hold my hand
      Raise your head, look into my wishful eyes
      That fear that's inside you will lift, give it time
      I can see everything you're blind to now
      Your prayers will be answered, let God whisper how
      To tell me you need me, I see that you're bleeding
      You don't need to show me again
      But if you decide to, I'll ride in this life with you
      I won't let go 'til the end
      So cry tonight
      But don't you let go of my hand
      You can cry every last tear
      I won't leave 'til I understand
      Promise you'll just hold my hand
      Hold my hand, hold my
      Hold my hand, my hand
      I'll be right here, hold my hand
      Hold my hand, hold my
      Hold my hand, my hand
      I'll be right here, hold my hand
      I know you're scared and your pain is imperfect
      But don't you give up on yourself
      I've heard a story, a girl, she once told me
      That I would be happy again
      Hold my hand
      Hold my hand
      Hold my hand, hold my hand
      Hold my hand, hold my hand
      Hold my hand
      I heard from the heavens`,
    };
    return lyrics;
  }
}
