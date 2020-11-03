import { Component, OnInit } from '@angular/core'
import { Player } from '../interfaces'

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[] = []
  numInjuredPlayers = 0

  constructor() { }

  ngOnInit(): void {

    let p1: Player = {
      firstname: "Panpan",
      num: 69,
      injured: true
    }
    let p2: Player = {
      firstname: "Le Nain",
      num: 44,
      injured: false
    }
    let p3: Player = {
      firstname: "Fossette",
      lastname:"Kzk",
      num: 19,
      injured: false
    }

    this.players.push(p1)
    this.players.push(p2)
    this.players.push(p3)

    this.onChangeState()
  }

  onChangeState(event?: any) {
    this.numInjuredPlayers = this.players.filter(p => p.injured).length
  }
}
