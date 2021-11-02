import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchParams } from '../../../../data/characters/interfaces/search.interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  @Output() onSubmit: EventEmitter<SearchParams> = new EventEmitter();

  searchParams: SearchParams = {};

  constructor() { }

  ngOnInit(): void {
  }

  buscar() {
    this.onSubmit.emit(this.searchParams)
  }

}
