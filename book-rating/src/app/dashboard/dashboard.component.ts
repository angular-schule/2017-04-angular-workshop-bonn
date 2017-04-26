import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'cs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor() { }

  ngOnInit() {
    // bitte stets sortiert
    this.books = [
      new Book('000', 'Angular', 'cool', 2),
      new Book('111', 'Angular JS 1.x', 'alt')
    ];
    this.reorderBooks(null);
  }

  reorderBooks(book: Book) {
    console.log(book);
    this.books.sort((a, b) => b.rating - a.rating);
  }
}
