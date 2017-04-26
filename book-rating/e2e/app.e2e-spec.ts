import { browser } from 'protractor';
import { BookRatingPage } from './app.po';

describe('book-rating App', () => {
  let page: BookRatingPage;

  beforeEach(() => {
    page = new BookRatingPage();
  });

  it('should display message saying Book Rating', () => {
    page.navigateTo();
    page.getParagraphText().then((test) => {
      console.log(test);
    });

    expect(page.getParagraphText()).toEqual('Book Rating');
  });
});
