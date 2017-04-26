import { browser, element, by } from 'protractor';

describe('commasoft', () => {

  beforeAll(() => browser.ignoreSynchronization = true);

  it('have the the copyright text', () => {
    debugger;
    browser.get('https://www.comma-soft.com/');
    const copyrightText = element(by.className('copyright'));
    expect(copyrightText.getText()).toEqual('COPYRIGHT © 2017. COMMA SOFT AG. ALLE RECHTE VORBEHALTEN.');
  });

  afterAll(() => browser.ignoreSynchronization = false);
});
