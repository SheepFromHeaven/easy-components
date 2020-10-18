import { newSpecPage } from '@stencil/core/testing';
import { EasyOffcanvasProvider } from '../easy-offcanvas-provider';

describe('easy-offcanvas-provider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EasyOffcanvasProvider],
      html: `<easy-offcanvas-provider></easy-offcanvas-provider>`,
    });
    expect(page.root).toEqualHtml(`
      <easy-offcanvas-provider></easy-offcanvas-provider>
    `);
  });
});
