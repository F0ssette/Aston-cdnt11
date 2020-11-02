import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  images = ["assets/batman.svg", "assets/doomPatrol.svg", "assets/dune.svg", "assets/soa.svg"]
  image: string = this.images[0]

  constructor() {
    this.update()
  }

  update() {

    let i = 0
    setInterval(() => {
      if (i < 3) {
        i++
      }
      else {
        i = 0
      }
      this.image = this.images[i]
    }, 5000)

  }

}