import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private fruits = ["cerise", "framboise", "melon", "mangue"]

  constructor() { }

  getFruits(){
    return this.fruits
  }
}
