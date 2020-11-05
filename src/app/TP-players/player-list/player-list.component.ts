import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/TP-players/interfaces';
import { PlayerService } from '../services/player.service';

const URL = "http://localhost:3000/players"

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {

  players:Player

  constructor(private http:HttpClient, private playerService:PlayerService) { }

  ngOnInit(): void {

    this.http
    .get(URL)
    .subscribe((res:any) => 
    this.players = res
    )}

  filterPoste(event: any, position: string) {

    let {value} = event.target
    console.log(value)

  }

}
