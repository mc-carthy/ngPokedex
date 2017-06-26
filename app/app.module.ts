import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './nav/nav.component';
import { PokemonListComponent } from './poke-list/poke-list.component';
import { PokemonAddComponent } from './poke-add/poke-add.component';

import { PokemonService } from './shared/pokemon.service';
import './shared/rxjs-extensions';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        PokemonListComponent,
        PokemonAddComponent
    ],
    providers: [
        PokemonService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }