import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JerseysService {

  private jerseys = ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg",]

  constructor() { }

  getJerseys() {
    return this.jerseys
  }
}
