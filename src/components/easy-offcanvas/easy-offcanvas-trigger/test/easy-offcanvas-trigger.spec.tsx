import { newSpecPage } from '@stencil/core/testing';
import { EasyOffcanvasTrigger } from '../easy-offcanvas-trigger';

describe('easy-offcanvas-trigger', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EasyOffcanvasTrigger],
      html: `<easy-offcanvas-trigger></easy-offcanvas-trigger>`,
    });
    expect(page.root).toEqualHtml(`
      <easy-offcanvas-trigger>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </easy-offcanvas-trigger>
    `);
  });
});
