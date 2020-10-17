import { newE2EPage } from '@stencil/core/testing';

describe('easy-offcanvas', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<easy-offcanvas></easy-offcanvas>');

    const element = await page.find('easy-offcanvas');
    expect(element).toHaveClass('hydrated');
  });
});
