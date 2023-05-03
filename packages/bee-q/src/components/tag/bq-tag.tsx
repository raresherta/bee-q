import { h, Component, Prop, State, Watch, Element } from '@stencil/core';

import { hasSlotContent, validatePropValue } from '../../shared/utils';
import { TAG_SIZE, TTagSize } from './bq-tag.types';

@Component({
  tag: 'bq-tag',
  styleUrl: './scss/bq-tag.scss',
  shadow: true,
})
export class BqTag {
  // Own Properties
  // ====================
  private prefixElem: HTMLElement;

  // Reference to host HTML element
  // ===================================
  @Element() el!: HTMLBqButtonElement;

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================
  @State() private hasPrefix = false;
  @State() isOpen = true;

  // Public Property API
  // ========================
  /* When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>` */
  @Prop({ reflect: true }) href: string;

  /** If true, the button will be disabled (no interaction allowed) */
  @Prop() disabled = false;

  /** If `true` it will display the tag with a remove icon */
  @Prop() removable = true;

  /** The size of the tag */
  @Prop({ reflect: true, mutable: true }) size: TTagSize = 'medium';

  // Prop lifecycle events
  // =======================

  @Watch('size')
  checkPropValues() {
    validatePropValue(TAG_SIZE, 'medium', this.el, 'size');
  }

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  // Component lifecycle events

  componentWillLoad() {
    this.checkPropValues();
  }

  // Ordered by their natural call order
  // =====================================

  // Listeners
  // ==============

  // Public methods API
  // These methods are exposed on the host element.
  // Always use two lines.
  // Public Methods must be async.
  // Requires JSDocs for public API documentation.
  // ===============================================

  // Local methods
  // Internal business logic.
  // These methods cannot be called from the host element.
  // =======================================================
  private handleSlotChange = () => {
    this.hasPrefix = hasSlotContent(this.prefixElem, 'prefix');
  };

  handleCloseClick = () => {
    console.log('CLOSE TAG');
    this.isOpen = false;
  };

  // render() function
  // Always the last one in the class.
  // ===================================

  render() {
    return (
      this.isOpen && (
        <div
          class={{
            'bq-tag': true,
            [`size--${this.size}`]: true,
            disabled: this.disabled,
            'has-prefix': this.hasPrefix,
          }}
        >
          <span class="bq-tag__prefix" ref={(spanElem) => (this.prefixElem = spanElem)} part="prefix">
            <slot name="prefix" onSlotchange={this.handleSlotChange} />
          </span>
          <span class="bq-tag__label" part="label">
            <slot />
          </span>
          {this.removable && (
            <bq-icon class="cursor-pointer" name="x-circle" role="img" title="close" onClick={this.handleCloseClick} />
          )}
        </div>
      )
    );
  }
}
