import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PokemonService } from './../shared/pokemon.service';
import { Pokemon } from './../shared/pokemon';
import { PokemonModalComponent } from './pokemon-modal.component';

@Component({
    moduleId: module.id,
    selector: 'pk-list',
    templateUrl: 'poke-list.component.html',
    styleUrls: [
        'poke-list.component.css'
    ]
})

export class PokemonListComponent implements OnInit {

    @ViewChild('childModal') public childModal: PokemonModalComponent;

    pokemon: Pokemon[];
    errorMessage: string;

    // Modal props
    pokemonDetails: Pokemon;
    
    constructor(
        private pokemonService: PokemonService,
        private viewContainerRef: ViewContainerRef    
    ) { }

    ngOnInit()
    {
        this.getPokemon();
    }

    getPokemon()
    {
        this.pokemonService.getPokemon()
            .subscribe(
                (pokemon: Pokemon[]) => {
                    console.log(pokemon);
                    this.pokemon = pokemon;
                },
                error => this.errorMessage = <any> error
            );
    }

    // deletePokemon(pokemon: Pokemon)
    // {
    //     this.pokemonService.deletePokemon(pokemon)
    //         .subscribe(
    //             () => {},
    //             error => this.errorMessage = <any> error,
    //             () => {
    //                 this.getPokemon();
    //             }
    //         );
    // }

    deletePokemon(pokemon: Pokemon)
    {
        this.pokemonService.deletePokemon(pokemon)
            .subscribe(
                () => this.deletePokemonFromList(pokemon),
                error => this.errorMessage = <any> error,
                () => {}
            );
    }

    viewSinglePokemon(id: number)
    {
        this.pokemonService.getPokemonDetails(id)
            .subscribe(
                (pokemon: Pokemon) => {
                    this.pokemonDetails = pokemon;
                    this.childModal.show();
                },
                error => this.errorMessage = <any> error
            )
    }

    private deletePokemonFromList(pokemon: Pokemon)
    {
        var index = this.pokemon.indexOf(pokemon, 0);
        if (index > -1)
        {
            this.pokemon.splice(index, 1);
        }
    }

}