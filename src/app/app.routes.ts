
import { RouterModule, Routes } from '@angular/router';

import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomeComponent } from './components/home/home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: PokeListComponent},
  { path: 'details/:name', component: PokemonDetailComponent},
  { path: '**', redirectTo: 'home' }
]

export const POKE_ROUTING = RouterModule.forRoot(routes);
