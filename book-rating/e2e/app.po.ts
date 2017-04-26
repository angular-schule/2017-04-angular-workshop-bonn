import { browser, element, by } from 'protractor';

export class BookRatingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cs-root h1')).getText();
  }
}
