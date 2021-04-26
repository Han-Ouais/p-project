import { NamedAPIResource } from './named-apiresource';
import { PokemonMoveVersion } from './pokemon-move-version';

export class PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion;

  constructor(
    move: NamedAPIResource,
    version_group_details: PokemonMoveVersion
  ) {
    this.move = move;
    this.version_group_details = version_group_details;
  }
}
