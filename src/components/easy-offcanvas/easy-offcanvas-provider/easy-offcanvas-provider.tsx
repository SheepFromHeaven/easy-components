import { Component, Element, State, Listen, Method } from '@stencil/core';

@Component({
  tag: 'easy-offcanvas-provider',
  styleUrl: 'easy-offcanvas-provider.css',
  shadow: false,
})
export class EasyOffcanvas {
  @Element() el: HTMLElement;

  @State() offcanvasElements: HTMLEasyOffcanvasPanelElement[] = [];

  @Listen('easyOffcanvasTrigger')
  onOffcanvasTrigger(event: CustomEvent<{id: string}>) {
    const offcanvasToOpen = this.offcanvasElements
      .find((offcanvas) => offcanvas.id === event.detail.id);
    if (!offcanvasToOpen.hasAttribute('open')) {
      offcanvasToOpen.setAttribute('open', '');
      document.body.style.height = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      offcanvasToOpen.removeAttribute('open');
      document.body.style.height = 'auto';
      document.body.style.overflow = 'visible';
    }
  }

  @Method()
  async registerOffcanvas(offcanvasElement: HTMLEasyOffcanvasPanelElement) {
    this.offcanvasElements.push(offcanvasElement);
  }
}
