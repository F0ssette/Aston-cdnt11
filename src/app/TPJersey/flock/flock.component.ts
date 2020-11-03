import { JoueursService } from './../services/joueurs.service';
import { Component, OnInit, Output } from '@angular/core'
import { Player } from '../../interfaces'

@Component({
  selector: 'app-flock',
  templateUrl: './flock.component.html',
  styleUrls: ['./flock.component.css']
})
export class FlockComponent implements OnInit {

  players: Player[]

  constructor(private joueursService: JoueursService) {
    this.players = this.joueursService.getJoueurs()
  }

  ngOnInit(): void {
  }

  onChange(event: any) {
    let value = event.target.value
    console.log(value)
  }

}
