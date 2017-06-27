import { Component, Input, ViewChild } from '@angular/core';
import { Pokemon } from './../shared/pokemon';
import { ModalDirective } from 'ng2-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'pokemon-modal',
    templateUrl: 'pokemon-modal.component.html'
})

export class PokemonModalComponent {

    @ViewChild('childModal') public childModal: ModalDirective;
    @Input() pokemonDetails: Pokemon;

    constructor() { }

    show()
    {
        this.childModal.show();
    }

    hide()
    {
        this.childModal.hide();
    }

}