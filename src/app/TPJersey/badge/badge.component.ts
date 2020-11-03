import { Component, OnInit } from '@angular/core';
import { Badge } from 'src/app/interfaces';
import { BadgesService } from '../services/badges.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

  badges: Badge[]
  totalPrice: number = 0

  constructor(private badgesService:BadgesService) {
    this.badges = this.badgesService.getBadges()
  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    let value : number = event.target.value
    console.log(value)
    this.totalPrice += value
    }

}
