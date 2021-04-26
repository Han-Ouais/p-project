import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon';
import { HttpClient } from '@angular/common/http';
import { PokemonListReturn } from './pokemon-list-return';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly http: HttpClient) {}

  /**
   * returnList
   */
  public returnList(): Observable<PokemonListReturn> {
    return this.http.get<PokemonListReturn>('/pokemon?offset=0&limit=151');
  }

  /**
   * getByUrl
   */
  public getAPIByUrl(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }

  /*
   * getOneById
   */
  public getOneById(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>('/pokemon/' + id);
  }
}
