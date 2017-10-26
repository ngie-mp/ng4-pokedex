import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


// Hoping this works one day
export interface PokemonParams {
    id?: number;
    name?: string;
    image?: string;
    base_experience?: number;
    height?: number;
    results?: Array<any>;
}

@Injectable()
export class PokeapiService {

  constructor(private http:Http) { }

  getPokemons() {
    return new Promise((resolve,reject) => {
      this.http.get("https://pokeapi.co/api/v2/pokemon/")
        .subscribe(data => {
          resolve(data.json());
        })
    });
  }

  getPokemonDetail(name: String) {
    return new Promise((resolve,reject) => {
      this.http.get("https://pokeapi.co/api/v2/pokemon/"+ name)
        .subscribe(data => {
          resolve(data.json());
        })
    });

  }

}
