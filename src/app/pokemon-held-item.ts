import { NamedAPIResource } from './named-apiresource';
import { PokemonHeldItemVersion } from './pokemon-held-item-version';

export class PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion;

  constructor(item: NamedAPIResource, version_details: PokemonHeldItemVersion) {
    this.item = item;
    this.version_details = version_details;
  }
}
