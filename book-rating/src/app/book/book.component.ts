import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'cs-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book: Book;
}
