import { NamedAPIResource } from './named-apiresource';

export class PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;

  constructor(stat: NamedAPIResource, effort: number, base_stat: number) {
    this.stat = stat;
    this.effort = effort;
    this.base_stat = base_stat;
  }
}
