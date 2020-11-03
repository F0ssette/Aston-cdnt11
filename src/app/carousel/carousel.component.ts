import { Component } from '@angular/core';

const SPEED = 2000

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  images = ["assets/batman.svg", "assets/doomPatrol.svg", "assets/dune.svg", "assets/soa.svg"]
  image: string = this.images[0]
  interval: any // Pour récupérer la valeur de l'interval pour pouvoir l'utiliser et arrêter ou mettre en pause l'animation

  constructor() {
    this.update()
  }

  update() {
    let i = 0
    this.interval = setInterval(() => {
      if (i => this.images.length) i=0 // Si on sort du tableau, i revient à 0
        i++
        this.image = this.images[i]
    }, SPEED)
  }

}