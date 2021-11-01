import { Component, EventEmitter, Output, Input } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  @Input() length!: number;
  @Output() onPageEvent: EventEmitter<PageEvent> = new EventEmitter();

  pageEvent: PageEvent | undefined;

  constructor() { }

  getPagination(pageEvent?: PageEvent) {
    this.pageEvent = pageEvent;
    this.onPageEvent.emit(this.pageEvent);
  }

}
