import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent {

  toggle : boolean
  buttonValue : "oui" | "non" = "oui"
  backgroundColor = "#CCC"

  constructor() { }

  onClick() {

    if (this.toggle = this.buttonValue === "oui") {
      this.buttonValue = "non"
      console.log(1)
      this.backgroundColor = "green"
    } else {
      this.buttonValue = "oui"
      console.log(0)
      this.backgroundColor = "#CCC"
    }
  }

}
