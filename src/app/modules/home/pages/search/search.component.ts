import { Component, OnInit } from '@angular/core';
import { Character } from '../../../../data/characters/interfaces/characters.interface';
import { SearchParams } from "../../../../data/characters/interfaces/search.interface";
import { CharactersService } from '../../../../data/characters/services/characters.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  characters: Character[] = [];

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
  }

  buscar(searchParams: SearchParams) {
    let queryString = Object.keys(searchParams).map((key) => key + '=' + searchParams[key]).join('&');
    if (Object.keys(searchParams).length === 0) {
      console.log('hey')
    } else {
      this.charactersService.filteredCharacters(queryString)
        .subscribe(resp => {
          this.characters = resp.result;
        })
    }
  }

}
