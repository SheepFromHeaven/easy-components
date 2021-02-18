import { Component, Host, h, Element, Prop, State, Listen } from '@stencil/core';

@Component({
  tag: 'easy-offcanvas-panel',
  styleUrl: 'easy-offcanvas-panel.scss',
  shadow: true,
})
export class EasyOffcanvasPanel {
  @Element() el: HTMLEasyOffcanvasPanelElement;

  @Prop({ reflect: true, mutable: true }) open: boolean;

  @Prop() position: 'left' | 'right' = 'left';

  @Prop() animationTime: number = 300;

  @Prop() closeOutside: boolean;

  @Prop() active: boolean = true;

  componentWillLoad() {
    document.querySelector('easy-offcanvas-provider')?.registerOffcanvas(this.el);
  }

  onBackgroundClick() {
    if (this.closeOutside) {
      this.open = false;
    }
  }

  render() {
    return (
      <Host class={{
        open: this.open,
        active: this.active,
        [this.position]: true,
      }}>
        <div part='background' onClick={this.onBackgroundClick.bind(this)}></div>
        <div 
          part='panel'
          style={{
            transition: `transform ${this.animationTime}ms`,
          }}
        >
          <slot></slot>
        </div>
      </Host>
    );
  }

}
