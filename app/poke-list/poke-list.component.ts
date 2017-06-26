import { Component, OnInit } from '@angular/core';
import { PokemonService } from './../shared/pokemon.service';
import { Pokemon } from './../shared/pokemon';

@Component({
    moduleId: module.id,
    selector: 'pk-list',
    templateUrl: 'poke-list.component.html'
})

export class PokemonListComponent implements OnInit {

    pokemon: Pokemon[];
    errorMessage: string;
    
    constructor(private pokemonService: PokemonService) { }

    ngOnInit()
    {
        this.getPokemon();
    }

    getPokemon()
    {

    }

}