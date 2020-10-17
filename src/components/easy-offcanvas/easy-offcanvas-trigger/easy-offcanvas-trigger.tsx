import { Component, Event, EventEmitter, Prop, Listen } from '@stencil/core';

@Component({
  tag: 'easy-offcanvas-trigger',
  styleUrl: 'easy-offcanvas-trigger.css',
  shadow: false,
})
export class EasyOffcanvasTrigger {
  @Event() easyOffcanvasTrigger: EventEmitter<{id: string}>;

  @Prop() offcanvasId: string;

  @Listen('click')
  onClick() {
    this.easyOffcanvasTrigger.emit({ id: this.offcanvasId });
  }
}
