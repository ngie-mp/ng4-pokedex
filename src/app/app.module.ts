import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PokeapiService } from './services/pokeapi.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';
import { HomeComponent } from './components/home/home.component';
import { POKE_ROUTING } from './app.routes';
import { PokeListComponent } from './components/poke-list/poke-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorpageComponent,
    HomeComponent,
    PokeListComponent
  ],
  imports: [
    BrowserModule,
    POKE_ROUTING
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
