import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  providers: [PokeapiService]
})

export class PokeListComponent implements OnInit {

  pokemonsList: {
    name?: string,
    sprites?: {}
  };

  constructor(private pokemons:PokeapiService) { }

  ngOnInit() {
    this.pokemons.getPokemonById(1)
      .then(data => {
        this.pokemonsList = data;
      })
      .catch(function(err){
        console.log(err);
      })
  }

}
