import { NamedAPIResource } from './named-apiresource';

export class PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;

  constructor(version: NamedAPIResource, rarity: number) {
    this.version = version;
    this.rarity = rarity;
  }
}
