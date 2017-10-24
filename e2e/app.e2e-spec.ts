import { NgPokePage } from './app.po';

describe('ng-poke App', function() {
  let page: NgPokePage;

  beforeEach(() => {
    page = new NgPokePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
