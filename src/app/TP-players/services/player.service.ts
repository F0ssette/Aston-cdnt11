import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Player } from '../interfaces';

const URL = "http://localhost:3000/players"

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private http: HttpClient) { }

  getPlayers() {
    return this.http.get(URL)
  }

  getPlayersById(id: number) {
    return this.http.get(URL + '/' + id)
  }

}
