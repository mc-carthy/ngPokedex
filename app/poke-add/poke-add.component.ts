import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from './../shared/pokemon.service';
import { Pokemon } from './../shared/pokemon';

@Component({
    moduleId: module.id,
    templateUrl: 'poke-add.component.html'
})

export class PokemonAddComponent {

    formPokemon: any = {};
    cardTitle: string = "Add Pokemon";
    errorMessage: string;

    constructor
    (
        private pokemonService: PokemonService,
        private router: Router
    ) { }

}