import { MasterpageWLazyloadingPage } from './app.po';

describe('masterpage-w-lazyloading App', () => {
  let page: MasterpageWLazyloadingPage;

  beforeEach(() => {
    page = new MasterpageWLazyloadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
