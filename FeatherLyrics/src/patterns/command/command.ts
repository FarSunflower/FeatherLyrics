import { songs } from '../../songs/songsdto/songs';
import { SongAndDiff } from '../../songs/songsdto/songs.dto';
//command interface
interface Command {
  execute(): void;
  undo(): void;
  logs(): void;
}
//concrete implementation adding song to queue
class AddToQueue implements Command {
  private queue: Receiver;
  private song: SongAndDiff;
  constructor(queue: Receiver, item: SongAndDiff) {
    this.queue = queue;
    this.song = item;
  }

  execute(): void {
    this.queue.addToQueue(this.song);
    console.log(`Пісня "${this.song.SongTitle}" додана до черги`);
  }
  
  undo(): void {
    this.queue.removeFromQueue(this.song);
    console.log(`Пісня "${this.song.SongTitle}" видалена з черги`);
  }
  
  logs(): void {
    const logText = queue.getQueue();
    console.log(logText);
  }
}
//caller
class Invoker {
  private addCommandQueue: Command[];

  constructor() {
    this.addCommandQueue = [];
  }

  addToQueue(command: Command): void {
    this.addCommandQueue.push(command);
  }

  processQueue(): void {
    this.addCommandQueue.forEach((command) => {
      command.execute();
    });
    this.addCommandQueue = [];
  }
}
//receiver
class Receiver {
  private queue: SongAndDiff[];

  constructor() {
    this.queue = [];
  }
  //Додавання до черги
  addToQueue(item: SongAndDiff): void {
    this.queue.push(item);
  }
  //видалення з черги
  removeFromQueue(item: SongAndDiff): void {
    //перевіряє чи є елемент в массиві, якщо -1 то нема
    const index = this.queue.indexOf(item);
    if (index > -1) {
      this.queue.splice(index, 1);
    }
  }
  //Виводить всю чергу, тільки назви
  getQueue(): string[] {
    const logText = this.queue.map((song) => song.SongTitle);
    return logText;
  }
}
// Використання
const queue = new Receiver();
const caller = new Invoker();
const song1 = new AddToQueue(queue, songs[0]);
const song2 = new AddToQueue(queue, songs[1]);
// Додаємо команди до черги
caller.addToQueue(song1);
caller.addToQueue(song2);
// Виконуємо команди з черги
caller.processQueue();
//Відмінна останньої команди
song2.undo();
song2.logs();