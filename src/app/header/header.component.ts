import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title: string = "Header Component"
  altText: string = "Photo de Batman"
  srcPath: string = "https://www.actualitte.com/images/facebook/batman-the-animated-series-670x376-5e4c0c262798d.jpg"
  authenticated: boolean = false
  options : string[] = ["red", "green", "blue"]
  borderColor : string = "darkcyan"

  constructor() {
    this.updateUI()
  }

  updateUI(){
    console.log("update UI")
    setTimeout(() => {
      this.title += " updated !" 
      this.authenticated = !this.authenticated
      this.options.push("new option")
    }, 1000)
  }

  onChange(event: any) {
    let value: string = event.target.value
    console.log(value)

    if(value === "new option") {
      this.borderColor = '#000000'
    } else {
      this.borderColor = value
    }
  }

}
