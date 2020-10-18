import { newE2EPage } from '@stencil/core/testing';

describe('easy-offcanvas-provider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<easy-offcanvas-provider></easy-offcanvas-provider>');

    const element = await page.find('easy-offcanvas-provider');
    expect(element).toHaveClass('hydrated');
  });
});
