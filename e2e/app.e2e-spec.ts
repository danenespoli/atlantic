import { DeadliftPage } from './app.po';

describe('deadlift App', function() {
  let page: DeadliftPage;

  beforeEach(() => {
    page = new DeadliftPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
