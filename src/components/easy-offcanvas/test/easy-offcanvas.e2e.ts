import { newE2EPage } from '@stencil/core/testing';

describe('easy-offcanvas', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<easy-offcanvas-trigger></easy-offcanvas-trigger>');

    const element = await page.find('easy-offcanvas-trigger');
    expect(element).toHaveClass('hydrated');
  });
});
