import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styles: []
})
export class PokemonDetailComponent implements OnInit {

  constructor(private ParamsRouter:ActivatedRoute) {
    this.ParamsRouter.params.subscribe(params => {
      console.log(params['name']);
    });
  }

  ngOnInit() {

    

  }

}
