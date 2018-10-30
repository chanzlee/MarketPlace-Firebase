export class Album {
  public id: number;
  constructor (public title: string, public artist: string, public description: string) {
  this.id = counter++;
  }
}

let counter = 4;