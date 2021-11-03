import { Component, OnInit } from '@angular/core';
import { Character } from '../../../../data/characters/interfaces/characters.interface';
import { SearchParams } from '../../../../data/characters/interfaces/search.interface';
import { CharactersService } from '../../../../data/characters/services/characters.service';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchParams!: SearchParams;
  characters: Character[] = [];
  displaySpinner: boolean = false;
  displayPaginator: boolean = false;
  paginatorLength: number = 0;

  constructor(
    private charactersService: CharactersService,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
  }

  buscar(searchParams: SearchParams) {
    if (Object.keys(searchParams).length === 0) {
      this.snackBar.open('You must enter at least one search parameter.', 'Ok')
    } else {
      this.searchParams = searchParams;
      let queryString = Object.keys(searchParams).map((key) => key + '=' + searchParams[key]).join('&');
      this.displaySpinner = true;
      this.charactersService.filteredCharacters(queryString)
        .subscribe(resp => {
          if (resp.info.count === 0) {
            this.snackBar.open("There's no results for this search", "Ok");
            this.displaySpinner = false;
          } else {
            this.characters = resp.result;
            this.paginatorLength = resp.info.count;
            this.displayPaginator = (resp.info.pages > 1);
            this.displaySpinner = false;
          }
        })
    }
  }

  getPagination(pageEvent: PageEvent) {
    let parameters = Object.keys(this.searchParams).map((key) => key + '=' + this.searchParams[key]).join('&');
    let queryString = `page=${pageEvent.pageIndex + 1}&${parameters}`;
    this.displaySpinner = true;
    this.charactersService.filteredCharacters(queryString)
      .subscribe(resp => {
        this.characters = resp.result;
        this.displaySpinner = false;
      })
  }

}
