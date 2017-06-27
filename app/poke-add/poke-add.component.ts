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

    savePokemon(formValues: any)
    {
        this.pokemonService.addPokemon(formValues)
            .subscribe(
                res => {
                    console.log("Pokemon saved");
                    this.router.navigate(['/']);
                },
                err => console.error("Error: ", err)
            );
    }

}