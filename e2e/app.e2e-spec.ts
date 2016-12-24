import { ProyectPrimengPage } from './app.po';

describe('proyect-primeng App', function() {
  let page: ProyectPrimengPage;

  beforeEach(() => {
    page = new ProyectPrimengPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
