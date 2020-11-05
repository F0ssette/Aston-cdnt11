import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  player = {
    lastname: "",
    firstname: "",
    position: "",
    age: 0
  }
  playerSent: string

  constructor(private http: HttpClient,) { }

  ngOnInit(): void {
  }

  postPlayer() {
    let url = "http://localhost:3000/players"

    this.http.post(url, this.player)
    .subscribe((res: any) => {
      this.playerSent = `Le joueur ${res.firstname} a bien été ajouté`
    })
  }

}
