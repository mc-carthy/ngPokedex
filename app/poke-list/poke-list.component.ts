import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from './../shared/pokemon.service';
import { Pokemon } from './../shared/pokemon';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'pk-list',
    templateUrl: 'poke-list.component.html',
    styleUrls: [
        'poke-list.component.css'
    ]
})

export class PokemonListComponent implements OnInit {

    @ViewChild('childModal') public childModal: ModalDirective;

    pokemon: Pokemon[];
    errorMessage: string;

    // Modal props
    selectedPokemonLoaded: boolean = false;
    pokemonDetails: Pokemon;
    
    constructor(private pokemonService: PokemonService) { }

    ngOnInit()
    {
        this.getPokemon();
    }

    public hideChildModal()
    {
        this.childModal.hide;
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
                    this.selectedPokemonLoaded = true;
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