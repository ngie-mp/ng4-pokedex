import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
// Routes
import { POKE_ROUTING } from './app.routes';

// Components
import { PokeListComponent } from './components/poke-list/poke-list.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';

// Services
import { PokeapiService } from './services/pokeapi.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorpageComponent,
    HomeComponent,
    PokeListComponent,
    PokemonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    POKE_ROUTING
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
