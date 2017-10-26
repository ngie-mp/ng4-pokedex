import { Component, OnInit } from '@angular/core';
import { PokeapiService, PokemonParams } from '../../services/pokeapi.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
})

export class PokeListComponent implements OnInit {

  pokemonsList = null;

  constructor(private pokemons:PokeapiService) { }

  ngOnInit() {
    this.pokemons.getPokemons()
      .then(data => {
        this.pokemonsList = data;
        console.log(this.pokemonsList);
      })
      .catch(function(err){
        console.log(err);
      })
  }

}
