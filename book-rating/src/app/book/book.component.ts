import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'cs-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {
  @Input() book: Book;
}
