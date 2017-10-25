
import { RouterModule, Routes } from '@angular/router';

import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomeComponent } from './components/home/home.component';
import { PokeListComponent } from './components/poke-list/poke-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: PokeListComponent},
  { path: '**', redirectTo: 'home' }
]

export const POKE_ROUTING = RouterModule.forRoot(routes);
