import { browser, by, element } from 'protractor';

export class AngularKarmaJasminePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getNavigatorTag() {
    return element(by.css('app-root nav')).getTagName();
  }
}
