import { PokemonAbility } from './pokemon-ability';
import { PokemonType } from './pokemon-type';
import { PokemonMove } from './pokemon-move';
import { PokemonStat } from './pokemon-stat';
import { PokemonSprites } from './pokemon-sprites';
import { VersionGameIndex } from './version-game-index';
import { PokemonHeldItem } from './pokemon-held-item';
import { NamedAPIResource } from './named-apiresource';

export class Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];

  constructor(
    id: number,
    name: string,
    base_experience: number,
    height: number,
    is_default: boolean,
    order: number,
    weight: number,
    abilities: PokemonAbility[],
    forms: NamedAPIResource[],
    game_indices: VersionGameIndex[],
    held_items: PokemonHeldItem[],
    location_area_encounters: string,
    moves: PokemonMove[],
    sprites: PokemonSprites,
    species: NamedAPIResource,
    stats: PokemonStat[],
    types: PokemonType[]
  ) {
    this.id = id;
    this.name = name;
    this.base_experience = base_experience;
    this.height = height;
    this.is_default = is_default;
    this.order = order;
    this.weight = weight;
    this.abilities = abilities;
    this.forms = forms;
    this.game_indices = game_indices;
    this.held_items = held_items;
    this.location_area_encounters = location_area_encounters;
    this.moves = moves;
    this.sprites = sprites;
    this.species = species;
    this.stats = stats;
    this.types = types;
  }
}
