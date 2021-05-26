import { GithubfinderPage } from './app.po';

describe('githubfinder App', () => {
  let page: GithubfinderPage;

  beforeEach(() => {
    page = new GithubfinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
