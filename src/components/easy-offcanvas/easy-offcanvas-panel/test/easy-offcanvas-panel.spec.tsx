import { newSpecPage } from '@stencil/core/testing';
import { EasyOffcanvasPanel } from '../easy-offcanvas-panel';

describe('easy-offcanvas-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EasyOffcanvasPanel],
      html: `<easy-offcanvas-panel></easy-offcanvas-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <easy-offcanvas-panel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </easy-offcanvas-panel>
    `);
  });
});
