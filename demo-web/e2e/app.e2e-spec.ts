import { DemoWebPage } from './app.po';

describe('demo-web App', function() {
  let page: DemoWebPage;

  beforeEach(() => {
    page = new DemoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
