import { newSpecPage } from '@stencil/core/testing';
import { EasyOffcanvasPanel } from '../easy-offcanvas-panel';

describe('easy-offcanvas-panel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [EasyOffcanvasPanel],
      html: `<easy-offcanvas-panel></easy-offcanvas-panel>`,
    });
    expect(page.root).toEqualHtml(`
      <easy-offcanvas-panel class="active">
        <mock:shadow-root>
          <div class="background"></div>
          <div class="slide left">
            <slot></slot>
          </div>
        </mock:shadow-root>
      </easy-offcanvas-panel>
    `);
  });
});
