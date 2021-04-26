import { NamedAPIResource } from './named-apiresource';

export class VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;

  constructor(game_index: number, version: NamedAPIResource) {
    this.game_index = game_index;
    this.version = version;
  }
}
