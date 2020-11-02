import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  toggle : boolean
  buttonValue = "Oui"
  backgroundColor = "grey"

  constructor() { }

  onClick() {
    this.toggle = !this.toggle
    console.log(this.toggle)

    if (this.toggle === true) {
      this.buttonValue = "Oui"
      console.log(1)
      this.backgroundColor = "grey"
    } else {
      this.buttonValue = "Non"
      console.log(0)
      this.backgroundColor = "green"
    }
  }

}
