import { Component, OnInit } from '@angular/core';

const NUMS: string[] = ['0','1','2','3','4','5','6','7','8','9','0']
const EMPTY_STR: string[] = ['', '', '', '', '', '']
const BOXES = ['-', '-', '-', '-', '-', '-']
const CODE_SIZE = 6

@Component({
  selector: 'app-virtualkb',
  templateUrl: './virtualkb.component.html',
  styleUrls: ['./virtualkb.component.css']
})
export class VirtualkbComponent implements OnInit {

  private _keys: string[] = [...NUMS, ...EMPTY_STR] // Le spread operator va itérer sur toutes les clés du tableau et retourne la valeur copiée et ça fait donc un nouveau tableau
  keys:string[] = []
  boxes = [...BOXES]
  inputCode = ""


  constructor() { }

  ngOnInit(): void {
    this.keys = [...NUMS, ...EMPTY_STR].map(() => this.pickValue(this._keys))
    // A chaque itération
    console.log(this.keys)
  }

  selectKey(event: any) {
    let t = event.target.innerText

    if (t && this.inputCode.length < CODE_SIZE) {
      this.boxes[this.inputCode.length] = 'x'
      this.inputCode += t
    }
  }

  log() {
    console.log(this.inputCode)
  }

  pickValue(arr) {
    var max = arr.length // 16
    return arr.splice(this.randomIndex(max), 1[0])
    // Splice altère le tableau suivant les indications pour enlever un ou des éléments et renvoie un tableau avec les éléments en moins
    // Ici on lui d'aller chercher un indice au hasard de 0 à 15
    // L'objectif est de vider le tableau de base pour en remplir un autre
  }

  randomIndex(max) {
    // renvoie une valeur comprise entre 0 et max
    return Math.floor(Math.random() * max)
  }

}
