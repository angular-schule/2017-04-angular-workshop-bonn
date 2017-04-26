import { Book } from './book';


describe('Book', () => {

  let book: Book;

  beforeEach(() => {
    book = new Book('', '', '');
  });

  it('should increase the rating', () => {
    book.rateUp();
    expect(book.rating).toBe(1);
  });

  it('should descrease the rating', () => {
    book.rating = 5;
    book.rateDown();
    expect(book.rating).toBe(4);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toBe(5);
  });

  it('should not be allowed to have a rating smaller than 0', () => {
    book.rating = 0;
    book.rateDown();
    expect(book.rating).toBe(0);
  });


  it('should create an instance', () => {
    expect(new Book('', '', '')).toBeTruthy();
  });
});
