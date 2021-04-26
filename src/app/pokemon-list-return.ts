import { NamedAPIResource } from './named-apiresource';

export class PokemonListReturn {
  count: string;
  previous: boolean;
  results: NamedAPIResource[];

  constructor(count: string, previous: boolean, results: NamedAPIResource[]) {
    this.count = count;
    this.previous = previous;
    this.results = results;
  }
}
