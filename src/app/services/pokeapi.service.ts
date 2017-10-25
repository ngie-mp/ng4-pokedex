import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export interface PokemonRules {
    id:number;
    name:string;
    image:string;
    base_experience:number;
    height:number;
}


@Injectable()
export class PokeapiService {

  constructor(private http:Http) { }

  getPokemonById(id: Number) {
    return new Promise((resolve,reject) => {
      this.http.get("https://pokeapi.co/api/v2/pokemon/"+id)
        .toPromise()
        .then(data => {
          resolve(data);
        }, err => {
          reject(err);
        })
    });
  }

}
