import { JerseysService } from './../services/jerseys.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  jerseys: string[]
  bigJersey = "assets/images/1.jpg"

  constructor(private jerseysService:JerseysService) {
    this.jerseys = this.jerseysService.getJerseys()
  }

  ngOnInit(): void {
  }

  onClick(event: any) {
    let value = event.target.src
    this.bigJersey = value
  }
}
