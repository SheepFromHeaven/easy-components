import { newSpecPage } from '@stencil/core/testing';
import { EasyOffcanvas } from '../easy-offcanvas';

describe('easy-offcanvas', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EasyOffcanvas],
      html: `<easy-offcanvas></easy-offcanvas>`,
    });
    expect(page.root).toEqualHtml(`
      <easy-offcanvas>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </easy-offcanvas>
    `);
  });
});
