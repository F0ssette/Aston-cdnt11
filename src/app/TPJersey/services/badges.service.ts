import { Injectable } from '@angular/core';
import { Badge } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BadgesService {

  private badges:Badge[] = [
    {logo: "assets/images/badge1.jpg",price: 10},
    {logo: "assets/images/badge2.png", price: 10},
    {logo:"assets/images/badge3.jpg", price: 10}
    ]

  constructor() { }

  getBadges() {
    return this.badges
  }
}
