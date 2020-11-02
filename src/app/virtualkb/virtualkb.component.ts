import { Component } from '@angular/core';

@Component({
  selector: 'app-virtualkb',
  templateUrl: './virtualkb.component.html',
  styleUrls: ['./virtualkb.component.css']
})
export class VirtualkbComponent {

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "-", "-", "-", "-", "-", "-"]
  password: any = ""

  constructor() { }

  onClick(event: any) {

    let value = event.target.value

    this.password += value
  }

}
