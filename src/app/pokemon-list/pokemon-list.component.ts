import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.returnList().subscribe((returnList) => {
      returnList.results.forEach((api) => {
        this.pokemonService.getAPIByUrl(api.url).subscribe((poke) => {
          this.pokemonList.push(poke);

          this.pokemonList.sort(function compare(a, b) {
            if (a.id < b.id) return -1;
            if (a.id > b.id) return 1;
            return 0;
          });
        });
      });
    });
  }
}
