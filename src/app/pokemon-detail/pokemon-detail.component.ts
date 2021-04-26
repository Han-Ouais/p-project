import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss'],
})
export class PokemonDetailComponent implements OnInit {
  pokemon?: Pokemon;

  constructor(
    public activeRoute: ActivatedRoute,
    private readonly pokemonService: PokemonService
  ) {}

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      const idParam = params.id;
      this.pokemonService.getOneById(idParam).subscribe((foundedPokemon) => {
        this.pokemon = foundedPokemon;
        console.log(this.pokemon);
      });
    });
  }
}
