import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './../shared/book';

@Component({
  selector: 'cs-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.less']
})
export class CreateBookComponent {
  book = Book.empty();

  @Output()
  bookCreated = new EventEmitter<Book>();

  @ViewChild(NgForm)
  bookForm: NgForm;

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.bookForm.reset(this.book);
  }
}
