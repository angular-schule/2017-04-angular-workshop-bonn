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
    this.books = [
      new Book('000', 'Angular', 'cool'),
      new Book('111', 'Angular JS 1.x', 'alt')
    ]
  }
}
