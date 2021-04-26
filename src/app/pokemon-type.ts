import { NamedAPIResource } from './named-apiresource';

export class PokemonType {
  slot: number;
  type: NamedAPIResource;

  constructor(slot: number, type: NamedAPIResource) {
    this.slot = slot;
    this.type = type;
  }
}
