import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { Http } from '@angular/http';

@Component({
  selector: 'cs-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books: Book[] = [];

  constructor(private http: Http) { }

  ngOnInit() {

    this.http.get('https://book-monkey2-api.angular-buch.com/books')
      .subscribe(reponse => {
        this.books = reponse.json()
          .map(raw => new Book(
            raw.isbn, raw.title, raw.description, raw.rating
          ));
        this.reorderBooks(null);
      });
  }

  reorderBooks(book: Book) {
    console.log(book);
    this.books.sort((a, b) => b.rating - a.rating);
  }

  test() {
    this.books.push(new Book('111', 'Tolles Buch', ''));
  }

  addBookToList(book: Book) {
    this.books.push(book);
  }
}
