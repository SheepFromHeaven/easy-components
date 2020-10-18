import { Component, Host, h, Element, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'easy-offcanvas-panel',
  styleUrl: 'easy-offcanvas-panel.scss',
  shadow: true,
})
export class EasyOffcanvasPanel {
  @Element() el: HTMLEasyOffcanvasPanelElement;

  @Prop({ reflect: true, mutable: true }) open: boolean;

  @Prop({ reflect: true }) darken: boolean;

  @Prop() position: 'left' | 'right' = 'left';

  @Prop() activeBelow: number;

  @Prop() closeOutside: boolean;

  @State() active: boolean;

  componentWillLoad() {
    document.querySelector('easy-offcanvas-provider')?.registerOffcanvas(this.el);
  }

  componentDidLoad() {
    this.onResize();
  }

  onBackgroundClick() {
    if (this.closeOutside) {
      this.open = false;
    }
  }

  @Listen('resize', { target: 'window' })
  onResize() {
    this.active = !this.activeBelow || window.innerWidth <= this.activeBelow;
  }

  render() {
    return (
      <Host class={{ open: this.open, active: this.active }}>
        <div class={{
          background: true,
          darken: this.darken,
        }} onClick={this.onBackgroundClick.bind(this)}></div>
        <div class={{
          slide: true,
          [this.position]: true,
        }}>
          <slot></slot>
        </div>
      </Host>
    );
  }

}
