import { Injectable } from '@angular/core';
import { Player } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class JoueursService {

  players: Player[] = [
    { firstname: "Joueur 1", num: 1 },
    { firstname: "Joueur 2", num: 2 },
    { firstname: "Joueur 3", num: 3 },
    { firstname: "Joueur 4", num: 4 }
  ]

  constructor() { }

  getJoueurs() {
    return this.players
  }
}
