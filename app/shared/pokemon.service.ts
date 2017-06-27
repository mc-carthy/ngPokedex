import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Pokemon } from './pokemon';

@Injectable()
export class PokemonService {

    private pokemonUrl: string = 'api/pokemon';

    constructor(private http: Http) { }

    getPokemon(): Observable<Pokemon[]>
    {
        return this.http.get(this.pokemonUrl)
            .map((res: Response) => <Pokemon[]> res.json().data)
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    deletePokemon(pokemon: Pokemon): Observable<Response>
    {
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let url = `${this.pokemonUrl}/${pokemon.id}`;
        return this.http.
            delete(url, options)
            .catch(this.handleError);
    }

    private handleError(error: Response)
    {
        let msg = 'Error status code $(error.status) status $(error.statusText) at $(error.url)';
        return Observable.throw(msg);
    }
}