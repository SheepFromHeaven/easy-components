import { newE2EPage } from '@stencil/core/testing';

describe('easy-offcanvas-panel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<easy-offcanvas-panel></easy-offcanvas-panel>');

    const element = await page.find('easy-offcanvas-panel');
    expect(element).toHaveClass('hydrated');
  });
});
