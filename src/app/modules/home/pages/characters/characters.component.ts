import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Character } from 'src/app/data/characters/interfaces/characters.interface';
import { CharactersService } from '../../../../data/characters/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  characters!: Character[];
  displayApiError: boolean = false;
  displaySpinner: boolean = true;
  paginatorLength: number = 0;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.charactersService.getCharacters()
      .subscribe(resp => {
        this.characters = resp.result;
        this.paginatorLength = resp.info.count;
        this.displaySpinner = false;
      }, (err) => {
        console.log(err);
        this.displayApiError = true;
        this.displaySpinner = false;
      })
  }
  
  getPagination(pageEvent: PageEvent) {
    this.displaySpinner = true;
    this.charactersService.getCharacters(pageEvent.pageIndex + 1)
      .subscribe(resp => {
        this.characters = resp.result;
        this.displaySpinner = false;
      })
  }

}
